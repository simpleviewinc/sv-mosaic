import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import { FormFieldToggleSwitchDef } from ".";
import Form from "../Form/Form";
import { FieldDef } from "@root/components/Field";
import { useForm, formActions } from "../Form";
import { ButtonProps } from "@root/components/Button";

export default {
	title: "FormFields/FormFieldToggleSwitch",
	decorators: [withKnobs],
} as Meta;

const onSubmit = async (dispatch) => {
	const { valid, data } = await dispatch(formActions.submitForm());
	if (!valid) return;

	alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
};

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const renderButtons = (dispatch): ButtonProps[] => [
	{
		label: "Save",
		onClick: () => onSubmit(dispatch),
		color: "yellow",
		variant: "contained",
	},
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
	},
];

export const Playground = (): ReactElement => {
	const { state, dispatch, registerFields } = useForm();

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
	const { state, dispatch, registerFields } = useForm();

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

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title='Form Title'
				description='This is a description example'
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
