import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FormFieldChipSingleSelectDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { getOptions } from "@root/utils/getOptions";

export default {
	title: "FormFields/FormFieldChipSingleSelect",
	decorators: [withKnobs],
} as Meta;

const options = [
	{
		label: "Opt1",
		value: "Option_1",
	},
	{
		label: "Opt2",
		value: "Option_2",
	},
	{
		label: "Opt3",
		value: "Option_3",
	},
];

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();


	const label = text("Label", "Label");
	const helperText = text("Helper Text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const sendOptions = boolean("Options", true);
	const shouldUseGetOptions = boolean("Obtain options from db", false);

	const fields = useMemo(
		() =>
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
						options: sendOptions ? options : undefined,
						getOptions: shouldUseGetOptions ? getOptions : undefined,
					},
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[label, helperText, instructionText, required, disabled, shouldUseGetOptions, sendOptions]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch } = useForm();
	const fields = useMemo(
		() =>
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
					instructionText: "Instruction text"
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
					instructionText: "Instruction text"
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
					instructionText: "Instruction text"
				},
				{
					name: "chipDB",
					label: "From data base options example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						getOptions
					},
					helperText: "Helper text",
					instructionText: "Instruction text"
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title='Form Regular Example'
				description='This is a description example'
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
