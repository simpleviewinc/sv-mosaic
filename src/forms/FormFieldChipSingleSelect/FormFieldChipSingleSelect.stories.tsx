import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FormFieldChipSingleSelectDef } from ".";
import { FieldDef } from "@root/components/Field";
import { useForm, formActions } from "../Form";
import { ButtonProps } from "@root/components/Button";

// Components
import Form from "../Form/Form";

export default {
	title: "FormFields/FormFieldChipSingleSelect",
	decorators: [withKnobs],
} as Meta;

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const onSubmit = async (dispatch) => {
	const { valid, data } = await dispatch(formActions.submitForm());
	if (!valid) return;

	alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
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

	const options = useMemo( ()=> [
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
	], []);
	
	const label = text("Label", "Label");
	const helperText = text("Helper Text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	
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
						options
					},
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[label, helperText, instructionText, required, disabled]
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

	const options = useMemo(() => [
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
	], []);

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
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
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
