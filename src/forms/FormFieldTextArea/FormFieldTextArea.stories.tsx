import * as React from "react";
import { useMemo } from "react";
import FormFieldTextArea, { TextAreaDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

export default {
	title: "FormFields/FormFieldTextArea",
	component: FormFieldTextArea,
	argTypes: {
		size: {
			options: ["xs", "sm", "md", "lg"],
			control: "select",
		},
	},
} as ComponentMeta<typeof FormFieldTextArea>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		required,
		disabled,
		maxCharacters,
		size,
		placeholder,
		helperText,
		instructionText,
		fields
	} = args;

	const playgroundField = useMemo(
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

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroundField}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: [...excludedFormFieldsControls, "size"] } };
Playground.args = {
	size: "sm",
	placeholder: "placeholder",
	maxCharacters: 20,
	disabled: false,
	required: false,
	helperText: "Helper text",
	instructionText: "Instruction text",
	label: "Label",
};

const kitchenSinkFields = [
	{
		name: "regular",
		label: "Regular example",
		type: "textArea",
		size: "md",
		inputSettings: {
			placeholder: "placeholder",
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
			placeholder: "placeholder",
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
			placeholder: "placeholder",
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

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls, "size"] } };
KitchenSink.args = {
	fields: kitchenSinkFields
}

