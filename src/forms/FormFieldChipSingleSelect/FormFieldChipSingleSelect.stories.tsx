import * as React from "react";
import { useMemo } from "react";
import { FormFieldChipSingleSelectDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldChipSingleSelect",
	component: Form,
}

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

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		fields,
		helperText,
		instructionText,
		required,
		disabled,
	} = args;

	const playgroundFields = useMemo(
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
						options,
					},
				},
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[label, helperText, instructionText, required, disabled]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroundFields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
};

const kitchenSinkFields = [
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
] as FieldDef<FormFieldChipSingleSelectDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
