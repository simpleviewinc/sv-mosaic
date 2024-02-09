import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions } from "@root/utils/getOptions";

export default {
	title: "FormFields/FormFieldRadio",
	decorators: [withKnobs],
} as Meta;

const options = [
	{
		label: "Label 1",
		value: "label_1",
	},
	{
		label: "Label 2",
		value: "label_2",
	},
	{
		label: "Label 3",
		value: "label_3",
	},
];

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;
	const label = text("Label", "Label");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "");
	const helperText = text("Helper text", "Helper text");
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local",
	);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "radio",
					label,
					type: "radio",
					required,
					disabled,
					inputSettings: {
						options: optionsOrigin === "Local" ? options : undefined,
						getOptions: optionsOrigin === "DB" ? getOptions : undefined,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[label, required, disabled, instructionText, helperText, optionsOrigin],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(methods)}
				title={text("Form Title", "Form Title")}
				description={text("Form Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "radio",
		label: "Regular example",
		type: "radio",
		required: false,
		disabled: false,
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "radio-disabled",
		label: "Disabled example",
		type: "radio",
		required: false,
		disabled: true,
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "radio-db",
		label: "From data base example",
		type: "radio",
		required: false,
		disabled: false,
		inputSettings: {
			getOptions,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(methods)}
				title="Form Title"
				description="This is a description example"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
