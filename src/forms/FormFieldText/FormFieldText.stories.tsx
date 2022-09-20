import * as React from "react";
import { useMemo } from "react";
import FormFieldText, { TextFieldDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";

// Components
import AccountCircle from "@mui/icons-material/AccountCircle";

export default {
	title: "FormFields/FormFieldText",
	component: FormFieldText,
	argTypes: {
		size: {
			options: ["xs", "sm", "md", "lg"],
			control: "select",
		},
		number: {
			options: ["number", "text"],
			control: "select",
		},
	},
};

const Template = (args) => {
	const {
		size,
		type,
		placeholder,
		maxCharacters,
		disabled,
		required,
		multiline,
		withIcon,
		helperText,
		instructionText,
		label,
		fields,
		prefixElement
	} = args;

	const { state, dispatch } = useForm();

	const playgroundField = useMemo(
		() =>
			[
				{
					name: "textfield",
					label,
					type: "text",
					required,
					disabled,
					maxCharacters: type !== "number" && maxCharacters,
					size,
					inputSettings: {
						prefixElement: withIcon && prefixElement,
						maxCharacters,
						placeholder,
						multiline,
						type
					},
					helperText,
					instructionText,
				},
			],
		[
			label,
			required,
			disabled,
			maxCharacters,
			size,
			placeholder,
			withIcon,
			multiline,
			helperText,
			instructionText,
			type,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={"Form Title"}
				description={"This is a description example"}
				state={state}
				fields={fields ? fields : playgroundField}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	size: "sm",
	type: "text",
	placeholder: "placeholder",
	maxCharacters: "20",
	disabled: false,
	required: false,
	multiline: false,
	withIcon: true,
	helperText: "Helper text",
	instructionText: "Instruction text",
	label: "Label",
	prefixElement: <AccountCircle />
};

const kitchenSinkFields = [
	{
		name: "regular",
		label: "Regular example",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	} as FieldDef<TextFieldDef>,
	{
		name: "number",
		label: "Number type example",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			placeholder: "number",
			type: "number",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	} as FieldDef<TextFieldDef>,
	{
		name: "multiline",
		label: "Multiline example",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			multiline: true,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "withMaxChar",
		label: "With a max chars stablished",
		type: "text",
		required: false,
		size: "md",
		maxCharacters: 20,
		inputSettings: {
			maxCharacters: 20,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "withIcon",
		label: "With an icon",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			prefixElement: <AccountCircle />,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "disabled",
		label: "Disabled example shows the placeholder",
		type: "text",
		required: false,
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
		type: "text",
		required: false,
		size: "xs",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "text",
		required: false,
		size: "sm",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "text",
		required: false,
		size: "md",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "text",
		required: false,
		size: "lg",
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
] as FieldDef<TextFieldDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: [...excludedFormFieldsControls, "size", "number"] } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
