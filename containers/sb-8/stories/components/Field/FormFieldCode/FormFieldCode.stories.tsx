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
					},
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			],
		[label, hideLabel, required, disabled, theme, customTheme, helperText, instructionText, forceInstructionTooltip],
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
			code: "function concat({ left, right }: { left: string; right }): string {\n    return `${left}:${right}`;\n}",
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
};
