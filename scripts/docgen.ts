import type { ComponentDoc, ParserOptions, PropItem } from "react-docgen-typescript";

import { withCustomConfig } from "react-docgen-typescript";
import path from "path";
import { parse } from "doctrine";
import { mkdir, writeFile } from "fs/promises";
import { escapeHtml, fileExists } from "./utils";
import { readFileSync } from "fs";
import ts from "typescript";

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

type ExampleDoc = ComponentDoc & { content: string };

class Documentation {
	private imports: {
		name: string;
		path: string;
	}[] = [];

	private examples: ExampleDoc[] = [];

	private doc: ComponentDoc;

	constructor({ doc }: { doc: ComponentDoc }) {
		this.doc = doc;
	}

	addImports(...imports: {name: string; path: string}[]): Documentation {
		for (const imp of imports) {
			if (this.imports.find(({ name }) => name === imp.name)) {
				continue;
			}

			this.imports.push(imp);
		}

		return this;
	}

	addExamples(...examples: ExampleDoc[]): void {
		this.examples.push(...examples);
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
			...this.imports.map(({ name, path }) => `import ${name} from "${path}";`),
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
		if (!this.examples) {
			return [];
		}

		const parts: string[] = [
			"## Examples",
		];

		for (const { displayName, description, content } of this.examples) {
			parts.push(`### ${displayName}`);
			parts.push(description);
			parts.push(`<Example component={stories.${displayName}}>{\`${content}\`}</Example>`);
		}

		return parts;
	}
}

function stripComments(text: string): string {
	return text.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "").trim();
}

async function parseComponentContent(path: string) {
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

	const fileContents = readFileSync(path, "utf-8");

	const program = ts.createProgram([path], options);
	const checker = program.getTypeChecker();
	const sourceFile = program.getSourceFile(path);

	if (!sourceFile) {
		throw new Error(`Source file for ${path} is undefined`);
	}

	const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

	if (!moduleSymbol) {
		throw new Error(`No symbols available from example source file ${path}.`);
	}

	const components = checker
		.getExportsOfModule(moduleSymbol)
		.reduce<Record<string, {content: string}>>((acc, component) => {
			const { valueDeclaration } = component;
			const name = component.getName();

			if (!valueDeclaration) {
				throw new Error(`No value declaration for ${name} in ${path}`);
			}

			const { pos, end } = valueDeclaration;
			const content = stripComments(fileContents.substring(pos, end).trim());

			return {
				...acc,
				[name]: { content },
			};
		}, {});

	return components;
}

async function fetchExampleDocs(path: string): Promise<ExampleDoc[]> {
	const exists = await fileExists(path);

	if (!exists) {
		return [];
	}

	const parsedFile = await parseComponentContent(path);

	const documents = sbParser.parse(path).map((doc) => ({
		...doc,
		...(parsedFile[doc.displayName]),
	}));

	return documents;
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

		const documentation = new Documentation({ doc });

		const exampleDocs = await fetchExampleDocs(path.join(docDirPath, `${pathParts.name}.examples.stories.tsx`));
		if (exampleDocs.length) {
			documentation
				.addImports({
					name: "{ Canvas, Meta }",
					path: "@storybook/blocks",
				}, {
					name: "* as stories",
					path: `./${pathParts.name}.examples.stories.tsx`,
				}, {
					name: "Example",
					path: "@components/Example",
				})
				.addExamples(...exampleDocs);
		}

		await mkdir(docDirPath, { recursive: true });
		await writeFile(docPath, documentation.markdownFromDoc());
	}
}

main();

