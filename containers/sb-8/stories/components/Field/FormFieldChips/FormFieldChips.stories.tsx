import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "../../../../utils";
import { getOptions } from "@root/mock";

export default {
	title: "FormFields/FormFieldChips",
};

const options = [
	{
		label: "Option 1",
		value: "Option_1",
	},
	{
		label: "Option 2",
		value: "Option_2",
	},
	{
		label: "Option 3",
		value: "Option_3",
	},
];

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	optionsType,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					label,
					helperText,
					instructionText,
					required,
					disabled,
					name: "chip",
					type: "chip",
					inputSettings: {
						options: optionsType === "Synchronous" ? options : getOptions,
					},
				},
			] as FieldDef[],
		[label, helperText, instructionText, required, disabled, optionsType],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Chips Field"
				fields={fields}
				skeleton={skeleton}
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
	optionsType: {
		name: "Options Type",
		options: ["Synchronous", "Asynchronous"],
		control: { type: "select" },
	},
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "chipRegular",
					label: "Regular example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipDisable",
					label: "Disable example",
					type: "chip",
					required: false,
					disabled: true,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipRequired",
					label: "Required example",
					type: "chip",
					required: true,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
				{
					name: "chipDB",
					label: "From data base options example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						getOptions,
					},
					helperText: "Helper text",
					instructionText: "Instruction text",
				},
			],
		[],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Regular Example"
				description="This is a description example"
				fields={fields}
			/>
		</>
	);
};
