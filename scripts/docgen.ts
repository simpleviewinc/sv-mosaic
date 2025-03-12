import type { ComponentDoc, ParserOptions, PropItem } from "react-docgen-typescript";

import { withCustomConfig } from "react-docgen-typescript";
import path from "path";
import * as ts from "typescript";
import { parse } from "doctrine";
import { readFileSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { escapeHtml, fileExists } from "./utils";
import { inspect } from "util";

const basePath = path.resolve(__dirname, "..");
const libPath = path.join(basePath, "containers", "mosaic");
const storybookPath = path.join(basePath, "containers", "sb-8");

const libTsConfigPath = path.join(libPath, "tsconfig.esm.json");
const sbTsConfigPath = path.join(storybookPath, "tsconfig.json");

const parserOptions: ParserOptions = {
	savePropValueAsString: true,
};

const libParser = withCustomConfig(libTsConfigPath, parserOptions);
const sbParser = withCustomConfig(sbTsConfigPath, parserOptions);

const componentsPath = path.join(libPath, "src", "components");
const componentsStoriesPath = path.join(storybookPath, "stories", "components");

const components = [
	"Card/Card.tsx:Card",
	// "DataView/DataView.tsx:DataView",
];

class Documentation {
	private imports: {
		name: string;
		path: string;
	}[] = [];

	private doc: ComponentDoc;

	private exampleDocs: ComponentDoc[];

	constructor({ doc, exampleDocs = [] }: { doc: ComponentDoc; exampleDocs?: ComponentDoc[] }) {
		this.doc = doc;
		this.exampleDocs = exampleDocs;
	}

	markdownFromDoc(): string {
		const { displayName, description, props: propsMap } = this.doc;

		const parts: string[] = [];

		parts.push("");

		parts.push(`# ${displayName}`);
		parts.push(description);

		const props = Object.entries(propsMap);
		if (props.length) {
			parts.push("## Props");
			parts.push("| Name | Type  | Default | Description");
			parts.push("| - | - | - | -");

			for (const [, prop] of props) {
				parts.push(this.markdownRowFromProp(prop));
			}
		}

		return [
			this.imports.map(({ name, path }) => `import ${name} from "${path}"`),
			"",
			...parts,
			...this.markdownFromExamples(),
		].join("\n");
	}

	markdownRowFromProp({ name, description: descriptionRaw, type, required, defaultValue }: PropItem): string {
		const parts: string[] = [];

		parts.push(`${name}${required ? "<span class=\"doc-required\">&#42;</span>" : ""}`);
		parts.push(`<code class="doc-code">${escapeHtml(type.name)}</code>`);
		parts.push(defaultValue ? `<code class="doc-code">${defaultValue.value}</code>` : "-");

		const { description } = parse(descriptionRaw);

		parts.push(description.replace(/[\r\n]+/g, " "));

		return `| ${parts.join(" | ")}`;
	}

	markdownFromExamples(): string[] {
		if (!this.exampleDocs.length) {
			return [];
		}

		const parts: string[] = [
			"## Examples",
		];

		for (const { displayName, description } of this.exampleDocs) {
			parts.push(`### ${displayName}`);
			parts.push(description);
		}

		return parts;
	}
}

async function fetchExampleDocs(path: string): Promise<ComponentDoc[]> {
	const exists = await fileExists(path);

	if (!exists) {
		return [];
	}

	return sbParser.parse(path);
}

function stripComments(text: string): string {
	return text.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "").trim();
}

async function _main() {
	const { config, error } = ts.readConfigFile(sbTsConfigPath, fileName => readFileSync(fileName, "utf-8"));

	if (error) {
		throw new Error(`Cannot load tsconfig.json from ${sbTsConfigPath}. ${error.messageText}`);
	}

	const { options, errors } = ts.parseJsonConfigFileContent(
		config,
		ts.sys,
		basePath,
		{},
		sbTsConfigPath,
	);

	if (errors && errors.length) {
		if (errors[0] instanceof Error) throw errors[0];
		else if (errors[0].messageText)
			throw new Error(`TS${errors[0].code}: ${errors[0].messageText}`);
		else throw new Error(JSON.stringify(errors[0]));
	}

	const fileName = "containers/sb-8/stories/components/Card/Card.examples.stories.tsx";
	const fileContents = readFileSync(fileName, "utf-8");

	const program = ts.createProgram([fileName], options);
	const checker = program.getTypeChecker();
	const sourceFile = program.getSourceFile(fileName);

	if (!sourceFile) {
		throw new Error(`Source file for ${fileName} is undefined`);
	}

	const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

	if (!moduleSymbol) {
		throw new Error(`No symbols available from example source file ${fileName}.`);
	}

	const components = checker
		.getExportsOfModule(moduleSymbol)
		.reduce<Record<string, {content: string}>>((acc, component) => {
			const { valueDeclaration } = component;
			const name = component.getName();

			if (!valueDeclaration) {
				throw new Error(`No value declaration for ${name} in ${fileName}`);
			}

			if (name === "Base") {
				// You're trying to work out how to expand variables
				// @ts-expect-error
				component.declarations[0].getChildren().forEach(child => {
					console.log(checker.getSymbolsInScope(child, ts.SymbolFlags.All));
				});
			}

			const { pos, end } = valueDeclaration;
			const content = stripComments(fileContents.substring(pos, end).trim());

			return {
				...acc,
				[name]: { content },
			};
		}, {});

	// console.log(components);
}

async function main() {
	for (const componentUri of components) {
		const componentParts = componentUri.split(":");

		if (componentParts.length !== 2) {
			throw new Error(`${componentUri} should contain two parts, the relative path to the component and the component name.`);
		}

		const [relativePath, componentName] = componentParts;
		const fullPath = path.join(componentsPath, relativePath);
		const docs = libParser.parse(fullPath);

		const pathParts = path.parse(relativePath);
		const docDirPath = path.join(componentsStoriesPath, pathParts.dir);
		const docPath = path.join(docDirPath, `${pathParts.name}.mdx`);

		const doc = docs.find((item) => item.displayName === componentName);
		if (!doc) {
			throw new Error(`${componentName} not found in ${relativePath}.`);
		}

		const exampleDocs = await fetchExampleDocs(path.join(docDirPath, `${pathParts.name}.examples.stories.tsx`));

		const documentation = new Documentation({
			doc,
			exampleDocs,
		});

		await mkdir(docDirPath, { recursive: true });
		await writeFile(docPath, documentation.markdownFromDoc());
	}
}

_main();

