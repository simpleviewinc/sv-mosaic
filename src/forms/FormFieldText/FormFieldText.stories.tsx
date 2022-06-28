import * as React from "react";
import { useCallback, useMemo } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
	select,
} from "@storybook/addon-knobs";

// Material UI
import AccountCircle from "@mui/icons-material/AccountCircle";

// Components
import { TextFieldDef } from ".";
import { FieldDef } from "@root/components/Field";
import { ReactElement } from "react";
import { useForm } from "../Form/formUtils";
import Form from "../Form/Form";

export default {
	title: "FormFields/FormFieldText",
	decorators: [withKnobs],
};

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const size = select("Size", ["xs", "sm", "md", "lg"], "sm");
	const type = select("Type", ["number", "text"], "text");
	const placeholder = text("Placeholder", "placeholder");
	const maxCharacters = number("Max characters", 20);
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const multiline = boolean("Multiline", false);
	const withIcon = boolean("With icon", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");

	const fields = useMemo(
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
						prefixElement: withIcon && <AccountCircle />,
						maxCharacters,
						placeholder,
						multiline,
						type
					},
					helperText,
					instructionText,
				},
			] as FieldDef<TextFieldDef>[],
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
			type
		]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
					JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
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

const kitchenSinkfields = [
	{
		name: "regular",
		label: "Regular example",
		type: "text",
		required: false,
		size: "md",
		inputSettings: {
			placeholder: "placeholder"
		},
		helperText: "Helper text",
		instructionText: "Instruction text"
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

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(kitchenSinkfields);
	}, [kitchenSinkfields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
          JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Form Title'
				description='Form description'
				state={state}
				fields={kitchenSinkfields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
