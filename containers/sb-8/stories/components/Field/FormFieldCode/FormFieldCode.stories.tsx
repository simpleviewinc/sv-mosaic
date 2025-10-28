import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "#mosaic/components/Field";
import Form, { useForm } from "#mosaic/components/Form";
import { commonFieldControls, renderButtons } from "@utils";

export default {
	title: "FormFields/FormFieldCode",
};

export const Playground = ({
	label,
	hideLabel,
	required,
	prepop,
	prepopData,
	disabled,
	instructionText,
	forceInstructionTooltip,
	helperText,
	theme,
	customTheme,
	language,
	autogrow,
	minHeight,
	maxHeight,
	height,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { handleSubmit, state } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "code",
					label,
					hideLabel,
					type: "code",
					required,
					disabled,
					inputSettings: {
						theme: theme === "custom" ? customTheme : theme,
						language,
						autogrow,
						minHeight,
						maxHeight,
						height,
						onMount: (editor, monico) => {
							monico.languages.typescript.typescriptDefaults.addExtraLib(`
								interface ScriptArgs {
									foo: string
								}
							`);
						},
					},
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			],
		[label, hideLabel, required, disabled, theme, customTheme, language, autogrow, minHeight, maxHeight, height, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<Form
				buttons={renderButtons(handleSubmit)}
				title="Code Field"
				fields={fields}
				{...controller}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			code: "interface ConcatParams {\n    left: string;\n    right: string;\n}\n\nfunction concat({ left, right }: ConcatParams): string {\n    return `${left}:${right}`;\n}",
		},
	}),
	theme: "light",
	customTheme: {
		base: "vs",
		inherit: true,
		rules: [],
		colors: {
			"editor.background": "#fafafa",
		},
	},
	language: "typescript",
	autogrow: false,
	minHeight: 200,
	maxHeight: 600,
	height: 300,
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	theme: {
		name: "Theme",
		options: ["light", "dark", "custom"],
		control: { type: "select" },
	},
	customTheme: {
		name: "Custom Theme",
		if: { arg: "theme", eq: "custom" },
	},
	language: {
		name: "Language",
		options: ["typescript", "html", "css"],
		control: { type: "select" },
	},
	autogrow: {
		name: "Autogrow",
	},
	minHeight: {
		name: "Min Height",
		if: { arg: "autogrow" },
	},
	maxHeight: {
		name: "Max Height",
		if: { arg: "autogrow" },
	},
	height: {
		name: "Height",
		if: { arg: "autogrow", eq: false },
	},
};
