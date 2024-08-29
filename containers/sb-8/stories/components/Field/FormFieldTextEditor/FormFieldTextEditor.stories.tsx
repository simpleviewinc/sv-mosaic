// BUG TO BE FIXED
import * as React from "react";
import { useMemo, ReactElement } from "react";
import Form, { useForm } from "@root/components/Form";
import { FieldDef, FormFieldTextEditorTipTapExperimental } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldTextEditor",
};

export const Playground = ({
	label,
	disabled,
	required,
	skeleton,
	instructionText,
	helperText,
	toggleLabel,
	spellcheck,
	direction,
	language,
	maxCharacters,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
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
			],
		[
			direction,
			required,
			disabled,
			toggleLabel,
			label,
			helperText,
			instructionText,
			maxCharacters,
			spellcheck,
			language,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Field"
				fields={fields}
				buttons={renderButtons(handleSubmit)}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	toggleLabel: "Toggle label",
	spellcheck: false,
	direction: "ltr",
	language: "en",
	maxCharacters: 100,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	toggleLabel: {
		name: "Toggle Label",
	},
	spellcheck: {
		name: "Direction",
		control: { type: "select" },
		options: ["ltr", "rtl"],
	},
	direction: {
		name: "Direction",
	},
	language: {
		name: "Language",
	},
	maxCharacters: {
		name: "Maximum Characters",
	},
};

const fields: FieldDef[] = [
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
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Kitchen Sink"
				description="This is a description example"
				fields={fields}
				buttons={renderButtons(handleSubmit)}
			/>
		</>
	);
};

export const Tiptap = ({
	label,
	disabled,
	required,
	skeleton,
	instructionText,
	helperText,
	toggleLabel,
	spellcheck,
	direction,
	language,
	maxCharacters,
}): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const tiptapFields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "textEditor",
					label,
					type: FormFieldTextEditorTipTapExperimental,
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
			],
		[
			direction,
			required,
			disabled,
			toggleLabel,
			label,
			helperText,
			instructionText,
			maxCharacters,
			spellcheck,
			language,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Tiptap"
				fields={tiptapFields}
				buttons={renderButtons(handleSubmit)}
				skeleton={skeleton}
			/>
		</>
	);
};

Tiptap.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	toggleLabel: "Toggle label",
	spellcheck: false,
	direction: "ltr",
	language: "en",
	maxCharacters: 100,
};

Tiptap.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	toggleLabel: {
		name: "Toggle Label",
	},
	spellcheck: {
		name: "Direction",
		control: { type: "select" },
		options: ["ltr", "rtl"],
	},
	direction: {
		name: "Direction",
	},
	language: {
		name: "Language",
	},
	maxCharacters: {
		name: "Maximum Characters",
	},
};
