import * as React from "react";
import { useMemo, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
	select,
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import AccountCircle from "@mui/icons-material/AccountCircle";

export default {
	title: "FormFields/FormFieldText",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { dispatch, state } = controller;

	const size = select("Size", ["xs", "sm", "md", "lg"], "sm");
	const type = select("Type", ["password", "text"], "text");
	const placeholder = text("Placeholder", "placeholder");
	const maxCharacters = number("Max characters", 20);
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const multiline = boolean("Multiline", false);
	const minRows = number("Min rows for multiline", 3);
	const maxRows = number("Max rows for multiline", 4);
	const withIcon = boolean("With icon", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");

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
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				{...controller}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
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
	const { state, dispatch } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
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
	const { dispatch } = controller;

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title="Validation Strategies"
				fields={validationStrategyFields}
			/>
		</>
	);
};
