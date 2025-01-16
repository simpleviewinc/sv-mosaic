import type { ReactElement } from "react";
import type { FieldDef } from "@root/components/Field";

import React, { useMemo } from "react";

import Form, { useForm } from "@root/components/Form";
import { getOptions, optionsLibrary } from "@root/mock";
import { renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldCheckbox",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	prepop,
	prepopData,
	optionsType,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

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
						options: optionsType === "Synchronous" ? optionsLibrary : getOptions,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[required, disabled, label, instructionText, helperText, optionsType],
	);

	const getFormValues = useMemo(() => prepop
		? async () => prepopData
		: undefined,
	[prepop, prepopData]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Checkbox Field"
				fields={fields}
				skeleton={skeleton}
				getFormValues={getFormValues}
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
	prepop: false,
	prepopData: {
		checkbox: [
			{ value: "option_1-cat_1", label: "Option 1" },
			{ value: "foo", label: "Foo" },
		],
	},
	optionsType: "Synchronous",
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
	prepop: {
		name: "Prepopulate",
	},
	prepopData: {
		name: "Prepopulate Data",
		if: { arg: "prepop" },
	},
	optionsType: {
		name: "Options Type",
		options: ["Synchronous", "Asynchronous"],
		control: { type: "select" },
	},
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "checkbox",
		label: "Regular example",
		type: "checkbox",
		required: false,
		disabled: false,
		inputSettings: {
			options: optionsLibrary,
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
			options: optionsLibrary,
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
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Title"
				description="This is a description example"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
