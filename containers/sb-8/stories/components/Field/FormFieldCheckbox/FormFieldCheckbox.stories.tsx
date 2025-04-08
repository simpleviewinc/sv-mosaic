import type { ReactElement } from "react";

import React, { useMemo } from "react";
import type { FormFieldCheckboxInputSettings } from "@root/components/Field";
import { type FieldDef } from "@root/components/Field";

import Form, { useForm } from "@root/components/Form";
import { commonFieldControls, renderButtons } from "../../../../utils";
import { getOptions, mockOptions } from "@root/mock";

export default {
	title: "FormFields/FormFieldCheckbox",
};

export const Playground = ({
	label,
	hideLabel,
	required,
	disabled,
	instructionText,
	forceInstructionTooltip,
	helperText,
	prepop,
	prepopData,
	optionsType,
	optionCount,
	itemsPerColumn,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const options = useMemo<FormFieldCheckboxInputSettings["options"]>(() => {
		if (optionsType === "Synchronous") {
			return optionCount >= 0 ? mockOptions.slice(0, optionCount) : mockOptions;
		}

		return async () => {
			const result = await getOptions();
			return optionCount >= 0 ? result.slice(0, optionCount) : result;
		};
	}, [optionCount, optionsType]);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "checkbox",
					label,
					hideLabel,
					type: "checkbox",
					required,
					disabled,
					inputSettings: {
						options,
						itemsPerColumn: Number(itemsPerColumn),
					},
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			] as FieldDef[],
		[label, hideLabel, required, disabled, options, itemsPerColumn, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Checkbox Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			checkbox: [
				{ value: "option_1-cat_1", label: "Option 1" },
				{ value: "foo", label: "Foo" },
			],
		},
	}),
	optionsType: "Synchronous",
	optionCount: 25,
	itemsPerColumn: 8,
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	optionsType: {
		name: "Options Type",
		options: ["Synchronous", "Asynchronous"],
		control: { type: "select" },
	},
	optionCount: {
		name: "Number of Options",
	},
	itemsPerColumn: {
		name: "Items per Column",
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
			options: mockOptions,
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
			options: mockOptions,
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
