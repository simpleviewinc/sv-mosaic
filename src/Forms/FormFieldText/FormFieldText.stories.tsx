import * as React from "react";
import { useCallback, useMemo } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
	select,
} from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Material UI
import AccountCircle from "@material-ui/icons/AccountCircle";

// Components
import { TextFieldDef } from ".";
import { FieldDef } from "@root/components/Field";
import { ReactElement } from "react";
import { Sizes } from "@root/theme/sizes";
import { useForm } from "../Form/formUtils";
import Form from "../Form/Form";

export default {
	title: "Forms|FormFieldText",
	decorators: [withKnobs],
} as Meta;

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const size = select("Size", [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
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
					maxCharacters,
					size,
					inputSettings: {
						prefixElement: withIcon && <AccountCircle />,
						maxCharacters,
						size,
						placeholder,
						multiline,
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
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
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
		size: Sizes.md,
		inputSettings: {
			size: Sizes.md,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	} as FieldDef<TextFieldDef>,
	{
		name: "multiline",
		label: "Multiline example",
		type: "text",
		required: false,
		size: Sizes.md,
		inputSettings: {
			multiline: true,
			size: Sizes.md,
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
		size: Sizes.md,
		maxCharacters: 20,
		inputSettings: {
			maxCharacters: 20,
			size: Sizes.md,
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
		inputSettings: {
			prefixElement: <AccountCircle />,
			placeholder: "placeholder",
			size: Sizes.md,
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
		inputSettings: {
			placeholder: "placeholder",
			size: Sizes.md,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "xsSize",
		label: "Size xs",
		type: "text",
		required: false,
		inputSettings: {
			size: Sizes.xs,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "text",
		required: false,
		inputSettings: {
			size: Sizes.sm,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "text",
		required: false,
		inputSettings: {
			size: Sizes.md,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "text",
		required: false,
		inputSettings: {
			size: Sizes.lg,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
] as FieldDef<TextFieldDef>[];

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
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
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
