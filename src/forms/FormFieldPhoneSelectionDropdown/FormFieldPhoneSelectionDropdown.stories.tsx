import * as React from "react";
import { useMemo } from "react";
import { PhoneSelectionDef } from "./FormFieldPhoneSelectionDropdownTypes";
import FormFieldPhoneSelectionDropdown, { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

export default {
	title: "FormFields/FormFieldPhoneSelectionDropdown",
	component: FormFieldPhoneSelectionDropdown,
} as ComponentMeta<typeof FormFieldPhoneSelectionDropdown>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		required,
		disabled,
		autoFormat,
		country,
		placeholder,
		helperText,
		instructionText,
		fields,
	} = args;

	const playgroudFields = useMemo(
		() =>
			[
				{
					name: "phone",
					label,
					type: "phone",
					required,
					disabled,
					inputSettings: {
						autoFormat,
						country,
						placeholder,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<PhoneSelectionDef>[],
		[
			disabled,
			required,
			autoFormat,
			country,
			placeholder,
			label,
			helperText,
			instructionText,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroudFields}
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
	autoFormat: true,
	country: "",
	placeholder: "placeholder",
};

const kitchenSinkFields = [
	{
		name: "phone",
		label: "Regular example",
		type: "phone",
		required: false,
		disabled: false,
		helperText: "Helper text",
		instructionText: 'Default contry code is "us"',
	},
	{
		name: "countryCode",
		label: "With a country code provided",
		type: "phone",
		required: false,
		disabled: false,
		inputSettings: {
			country: "ar",
		},
		helperText: "Helper text",
		instructionText: 'The country code of "ar" was provided',
	},
	{
		name: "autoformatEnabled",
		label: "Autoformat enabled",
		type: "phone",
		required: false,
		disabled: false,
		inputSettings: {
			autoFormat: true,
			country: "us",
		},
		helperText: "Helper text",
		instructionText: "Type a phone number to see the format",
	},
	{
		name: "withPlaceholder",
		label: "With a custom placeholder",
		type: "phone",
		required: false,
		disabled: false,
		inputSettings: {
			country: "us",
			placeholder: "Enter phone number",
		},
		helperText: "Helper text",
		instructionText: "Remove the phone number prefix to see the placeholder",
	},
] as FieldDef<PhoneSelectionDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
