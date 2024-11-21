import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "../../../../utils";

// Components
import AccountCircle from "@mui/icons-material/AccountCircle";

export default {
	title: "FormFields/FormFieldText",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	size,
	type,
	placeholder,
	maxCharacters,
	multiline,
	minRows,
	maxRows,
	withIcon,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { handleSubmit, state } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "textfield",
					label,
					type: "text",
					required,
					disabled,
					size,
					inputSettings: {
						prefixElement: withIcon && <AccountCircle />,
						maxCharacters,
						placeholder: placeholder === "" ? undefined : placeholder,
						multiline,
						type,
						minRows,
						maxRows,
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
			minRows,
			maxRows,
			type,
		],
	);

	return (
		<>
			<Form
				buttons={renderButtons(handleSubmit)}
				title="Text Field"
				fields={fields}
				{...controller}
				skeleton={skeleton}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
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
	size: "sm",
	type: "text",
	placeholder: "placeholder",
	maxCharacters: 20,
	multiline: false,
	minRows: 3,
	maxRows: 4,
	withIcon: false,
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
	size: {
		name: "Size",
		control: { type: "select" },
		options: ["xs", "sm", "md", "lg"],
	},
	type: {
		name: "Type",
		control: { type: "select" },
		options: ["password", "text"],
	},
	placeholder: {
		name: "Placeholder",
	},
	maxCharacters: {
		name: "Maximum Characters",
	},
	multiline: {
		name: "Multi-line",
	},
	minRows: {
		name: "Minimum Rows",
	},
	maxRows: {
		name: "Maximum Rows",
	},
	withIcon: {
		name: "Show Icon",
	},
};

const kitchenSinkfields: FieldDef[] = [
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
	},
	{
		name: "password",
		label: "Password type example",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			placeholder: "Password",
			type: "Password",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
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
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Title"
				description="Form description"
				fields={kitchenSinkfields}
			/>
		</>
	);
};

const validateShouldBeTest = (value: any) => {
	if (value !== "Test") {
		return "This field should have the value \"Test\"";
	}
};

const validationStrategyFields: FieldDef[] = [
	{
		name: "onBlur",
		label: "onBlur",
		type: "text",
		instructionText: "This field will be validated only when the input loses focus",
		validators: [validateShouldBeTest],
		validateOn: "onBlur",
	},
	{
		name: "onBlurAmend",
		label: "onBlurAmend",
		type: "text",
		instructionText: "This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",
		validators: [validateShouldBeTest],
		validateOn: "onBlurAmend",
	},
	{
		name: "onBlurChange",
		label: "onBlurChange",
		type: "text",
		instructionText: "This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",
		validators: [validateShouldBeTest],
		validateOn: "onBlurChange",
	},
	{
		name: "onChange",
		label: "onChange",
		type: "text",
		instructionText: "This field should be validated with every change",
		validators: [validateShouldBeTest],
		validateOn: "onChange",
	},
];

export const ValidationStrategies = (): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Validation Strategies"
				fields={validationStrategyFields}
			/>
		</>
	);
};
