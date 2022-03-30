import * as React from "react";
import { ReactElement, useMemo, useCallback } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import { FormFieldToggleSwitchDef } from ".";
import Form from "../Form/Form";
import { FieldDef } from "@root/components/Field";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldToggleSwitch",
	decorators: [withKnobs],
} as Meta;


export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean("Disabled", false);
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const toggleLabel = text("Toggle label", "Toggle label");

	const fields = useMemo(
		() =>
			[
				{
					name: "toggleSwitch",
					label,
					type: "toggleSwitch",
					required,
					disabled,
					inputSettings: {
						toggleLabel,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<FormFieldToggleSwitchDef>[],
		[required, disabled, toggleLabel, label, helperText, instructionText]
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
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "toggleSwitchDefault",
					label: "Default example",
					type: "toggleSwitch",
					required: false,
					disabled: false,
					inputSettings: {
						toggleLabel: "Toggle label",
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "toggleSwitchDisabled",
					label: "Disabled example",
					type: "toggleSwitch",
					required: false,
					disabled: true,
					inputSettings: {
						toggleLabel: "Toggle label",
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "toggleSwitchWithoutLabel",
					label: "Toggle switch without label",
					type: "toggleSwitch",
					required : false,
					disabled: false,
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
			] as FieldDef<FormFieldToggleSwitchDef>[],
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
				description='This is a description example'
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
