import * as React from "react";
import { useMemo } from "react";
import FormFieldRadio, { FormFieldRadioDef } from ".";
import { FieldDef } from "@root/components/Field";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import Form, { useForm } from "@root/components/Form";
import { ComponentMeta } from "@storybook/react";

export default {
	title: "FormFields/FormFieldRadio",
	component: FormFieldRadio,
} as ComponentMeta<typeof FormFieldRadio>;

const options = [
	{
		label: "Label 1",
		value: "label_1",
	},
	{
		label: "Label 2",
		value: "label_2",
	},
	{
		label: "Label 3",
		value: "label_3",
	},
];

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		required,
		disabled,
		instructionText,
		helperText,
		fields,
	} = args;

	const playGroundFields = useMemo(
		() =>
			[
				{
					name: "radio",
					label,
					type: "radio",
					required,
					disabled,
					inputSettings: {
						options,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<FormFieldRadioDef>[],
		[label, required, disabled, instructionText, helperText]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playGroundFields}
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
		name: "radio",
		label: "Regular example",
		type: "radio",
		required: false,
		disabled: false,
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "radio-disabled",
		label: "Disabled example",
		type: "radio",
		required: false,
		disabled: true,
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
