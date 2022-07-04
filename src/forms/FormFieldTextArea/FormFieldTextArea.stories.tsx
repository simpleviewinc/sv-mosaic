import * as React from "react";
import { ReactElement, useMemo } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
	select,
} from "@storybook/addon-knobs";
import { TextAreaDef } from ".";
import { FieldDef } from "@root/components/Field";
import { useForm, formActions } from "../Form";
import { ButtonProps } from "@root/components/Button";

// Components
import Form from "../Form/Form";

export default {
	title: "FormFields/FormFieldTextArea",
	decorators: [withKnobs],
}

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
	const {
		state,
		dispatch,
		registerFields,
	} = useForm();

	const size = select("Size", ["xs", "sm", "md", "lg"], "sm");
	const placeholder = text("Placeholder", "placeholder");
	const maxCharacters = number("Max characters", 20);
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");

	const fields = useMemo(
		() =>
			[
				{
					name: "regular",
					label,
					type: "textArea",
					required,
					disabled,
					maxCharacters,
					size,
					inputSettings: {
						maxCharacters,
						placeholder,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<TextAreaDef>[],
		[
			required,
			disabled,
			maxCharacters,
			size,
			placeholder,
			helperText,
			instructionText,
			label,
		]
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

const kitchenSinkFields = [
	{
		name: "regular",
		label: "Regular example",
		type: "textArea",
		size: "md",
		inputSettings: {
			placeholder: "placeholder"
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "withMaxChar",
		label: "Established with a max chars",
		type: "textArea",
		maxCharacters: 20,
		size: "md",
		inputSettings: {
			maxCharacters: 20,
			placeholder: "placeholder"
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "disabledExample",
		label: "Disabled",
		type: "textArea",
		disabled: true,
		size: "md",
		inputSettings: {
			placeholder: "placeholder"
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "xsSize",
		label: "Size xs",
		type: "textArea",
		size: "xs",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "textArea",
		size: "sm",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "textArea",
		size: "md",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "textArea",
		size: "lg",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
] as FieldDef<TextAreaDef>[];

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		registerFields,
	} = useForm();

	useMemo(() => {
		registerFields(kitchenSinkFields);
	}, [kitchenSinkFields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title='Form title'
				description='Form description'
				state={state}
				fields={kitchenSinkFields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
