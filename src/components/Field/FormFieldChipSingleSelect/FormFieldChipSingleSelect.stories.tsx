import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs, select } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { getOptions } from "@root/utils/getOptions";

export default {
	title: "FormFields/FormFieldChipSingleSelect",
	decorators: [withKnobs],
};

const options = [
	{
		label: "Option 1",
		value: "Option_1",
	},
	{
		label: "Option 2",
		value: "Option_2",
	},
	{
		label: "Option 3",
		value: "Option_3",
	},
];

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

	const label = text("Label", "Label");
	const helperText = text("Helper Text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local",
	);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					label,
					helperText,
					instructionText,
					required,
					disabled,
					name: "Form Field Chip Single Select",
					type: "chip",
					inputSettings: {
						options: optionsOrigin === "Local" ? options : undefined,
						getOptions: optionsOrigin === "DB" ? getOptions : undefined,
					},
				},
			] as FieldDef[],
		[label, helperText, instructionText, required, disabled, optionsOrigin],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "chipRegular",
					label: "Regular example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipDisable",
					label: "Disable example",
					type: "chip",
					required: false,
					disabled: true,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipRequired",
					label: "Required example",
					type: "chip",
					required: true,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipDB",
					label: "From data base options example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						getOptions,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
			],
		[],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title="Form Regular Example"
				description="This is a description example"
				fields={fields}
			/>
		</>
	);
};
