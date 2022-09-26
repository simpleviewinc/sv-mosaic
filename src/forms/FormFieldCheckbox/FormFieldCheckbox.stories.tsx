import * as React from "react";
import { useMemo } from "react";
import FormFieldCheckbox, { FormFieldCheckboxDef } from ".";
import { FieldDef } from "@root/components/Field";
import { ComponentMeta } from "@storybook/react";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { checkboxOptions } from "./FormFieldCheckboxUtils";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldCheckbox",
	component: FormFieldCheckbox,
} as ComponentMeta<typeof FormFieldCheckbox>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		required,
		fields,
		disabled,
		helperText,
		instructionText,
		options
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "checkbox",
					label,
					type: "checkbox",
					required,
					disabled,
					inputSettings: {
						options,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<FormFieldCheckboxDef>[],
		[required, disabled, label, instructionText, helperText, options]
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
	options: checkboxOptions
};


const kitchenSinkFields = [
	{
		name: "checkbox",
		label: "Regular example",
		type: "checkbox",
		required: false,
		disabled: false,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: "Helper Text",
		instructionText: "InstructionText",
	},
	{
		name: "disabledCheckbox",
		label: "Disabled example",
		type: "checkbox",
		required: false,
		disabled: true,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: "Helper Text",
		instructionText: "InstructionText",
	},
	/* Should inputSettings be an optional prop?
	{
		name: 'withoutOptions',
		label: 'Without options',
		type: 'checkbox',
		required: false,
		disabled: false,
		helperText: 'Helper Text',
		instructionText: 'InstructionText',
	}, */
] as FieldDef<FormFieldCheckboxDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
