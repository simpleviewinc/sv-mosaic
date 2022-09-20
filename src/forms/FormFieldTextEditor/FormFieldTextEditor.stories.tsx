// // BUG TO BE FIXED
import * as React from "react";
import { useMemo } from "react";
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { TextEditorDef } from "./FormFieldTextEditorTypes";
import { excludedFormFieldsControls, renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldTextEditor",
	component: Form,
	argTypes: {
		direction: {
			options: ["ltr", "rtl"],
			control: "select"
		},
	}
};

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		direction,
		disabled,
		helperText,
		instructionText,
		label,
		language,
		maxCharacters,
		required,
		spellcheck,
		fields
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "textEditor",
					label,
					type: "textEditor",
					required,
					inputSettings: {
						spellcheck,
						direction,
						language,
						maxCharacters,
					},
					disabled,
					helperText,
					instructionText,
				},
			] as FieldDef<TextEditorDef>[],
		[
			direction,
			required,
			disabled,
			label,
			helperText,
			instructionText,
			maxCharacters,
			spellcheck,
			language,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroundFields}
				dispatch={dispatch}
				buttons={renderButtons(dispatch)}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	direction: "ltr",
	required: false,
	disabled: false,
	label: "Label",
	helperText: "Helper Text",
	instructionText: "Instruction Text",
	maxCharacters: 100,
	spellcheck: false,
	language: "en"
};

const kitchenSinkFields = [
	{
		name: "spellCheck",
		label: "Text editor with spellcheck active",
		type: "textEditor",
		required: false,
		inputSettings: {
			spellcheck: true,
		},
	},
	{
		name: "ltr",
		label: "Text editor with left to right direction",
		type: "textEditor",
		required: false,
		inputSettings: {
			direction: "ltr",
		},
	},
	{
		name: "rtl",
		label: "Text editor with right to left direction",
		type: "textEditor",
		required: false,
		inputSettings: {
			direction: "rtl",
		},
	},
	{
		name: "german",
		label: "Text editor in german (de) language",
		type: "textEditor",
		required: false,
		inputSettings: {
			language: "de",
		},
	},
	{
		name: "maxChars",
		label: "Text editor with max character limit",
		type: "textEditor",
		required: false,
		inputSettings: {
			maxCharacters: 20,
		},
	},
	{
		name: "disabled",
		label: "Disabled text editor",
		type: "textEditor",
		required: false,
		disabled: true,
	},
]

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls, "direction"] } };
KitchenSink.args = {
	fields: kitchenSinkFields
};
