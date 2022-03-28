import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { PhoneSelectionDef } from "./FormFieldPhoneSelectionDropdownTypes";

// Components
import { FieldDef } from "@root/components/Field";
import Form from "../Form/Form";

// Utils
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldPhoneSelectionDropdown",
	decorators: [withKnobs],
};

export const Playground = () : ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const autoFormat = boolean("Autoformat", true);
	const country = text("Country code (e.g., us, mx, etc.)", "");
	const placeholder = text("Placeholder", "Placeholder");
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text")

	const fields = useMemo(
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
					instructionText
				},
			] as FieldDef<PhoneSelectionDef>[],
		[disabled, required, autoFormat, country, placeholder, label, helperText, instructionText]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
}

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
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
					name: "autoformatDisabled",
					label: "Autoformat disabled",
					type: "phone",
					required: false,
					disabled: false,
					inputSettings: {
						autoFormat: false,
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
						placeholder: "Enter phone number"
					},
					helperText: "Helper text",
					instructionText: "Remove the phone number prefix to see the placeholder",
				},
			] as FieldDef<PhoneSelectionDef>[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Form Title'
				description='Form description'
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
