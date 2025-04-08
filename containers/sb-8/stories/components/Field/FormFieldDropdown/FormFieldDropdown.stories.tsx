import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions, mockOptions } from "@root/mock";

export default {
	title: "FormFields/FormFieldDropdown",
};

export const Playground = ({
	label,
	hideLabel,
	required,
	prepop,
	prepopData,
	instructionText,
	forceInstructionTooltip,
	disabled,
	helperText,
	optionsType,
	placeholder,
	size,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "dropdown",
					label,
					hideLabel,
					type: "dropdown",
					required,
					disabled,
					size,
					inputSettings: {
						options: optionsType === "Synchronous" ? mockOptions : getOptions,
						placeholder,
					},
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			] as FieldDef[],
		[label, hideLabel, required, disabled, size, optionsType, placeholder, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Dropdown Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			dropdown: { value: "option_1-cat_1", label: "Option 1" },
		},
	}),
	optionsType: "Synchronous",
	size: "sm",
	placeholder: "Choose a movie..",
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	prepopData: {
		name: "Prepopulate Data",
		if: { arg: "prepop" },
	},
	optionsType: {
		name: "Options Type",
		options: ["Synchronous", "Asynchronous"],
		control: { type: "select" },
	},
	size: {
		name: "Size",
		control: { type: "select" },
		options: ["xs", "sm", "md", "lg"],
	},
	placeholder: {
		name: "Placeholder",
	},
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "dropdown",
		label: "Regular example",
		type: "dropdown",
		size: "md",
		inputSettings: {
			options: mockOptions,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "dropdownDB",
		label: "From data base example",
		type: "dropdown",
		size: "md",
		inputSettings: {
			getOptions,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "disabledExample",
		label: "Disabled",
		type: "dropdown",
		disabled: true,
		size: "md",
		inputSettings: {
			options: mockOptions,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "xsSize",
		label: "Size xs",
		type: "dropdown",
		size: "xs",
		inputSettings: {
			options: mockOptions,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "dropdown",
		size: "sm",
		inputSettings: {
			options: mockOptions,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "dropdown",
		size: "md",
		inputSettings: {
			options: mockOptions,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "dropdown",
		size: "lg",
		inputSettings: {
			options: mockOptions,
		},
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
				title="Form title"
				description="Form description"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
