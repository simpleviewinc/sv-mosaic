import * as React from "react";
import { useMemo, ReactElement } from "react";
import { boolean, withKnobs, text, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FieldDef } from "@root/components/Field";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { checkboxOptions } from "./FormFieldCheckboxUtils";
import { renderButtons } from "@root/utils/storyUtils";
import { getOptions } from "@root/utils/getOptions";

export default {
	title: "FormFields/FormFieldCheckbox",
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Label");
	const instructionText = text("Instruction Text", "Instruction Text");
	const helperText = text("Helper Text", "Helper Text");
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local",
	);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "checkbox",
					label,
					type: "checkbox",
					required,
					disabled,
					inputSettings: {
						options: optionsOrigin === "Local" ? checkboxOptions : undefined,
						getOptions: optionsOrigin === "DB" ? getOptions : undefined,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[required, disabled, label, instructionText, helperText, optionsOrigin],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(methods)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "checkbox",
		label: "Regular example",
		type: "checkbox",
		required: false,
		disabled: false,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: "Helper Text",
		instructionText: "InstructionText",
	},
	{
		name: "disabledCheckbox",
		label: "Disabled example",
		type: "checkbox",
		required: false,
		disabled: true,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: "Helper Text",
		instructionText: "InstructionText",
	},

	{
		name: "checkboxFromDB",
		label: "Options from DB example",
		type: "checkbox",
		required: false,
		disabled: false,
		inputSettings: {
			getOptions,
		},
		helperText: "Helper Text",
		instructionText: "InstructionText",
	},
	/* Should inputSettings be an optional prop?
	{
		name: 'withoutOptions',
		label: 'Without options',
		type: 'checkbox',
		required: false,
		disabled: false,
		helperText: 'Helper Text',
		instructionText: 'InstructionText',
	}, */
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
