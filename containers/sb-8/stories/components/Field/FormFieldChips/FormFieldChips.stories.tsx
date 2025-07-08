import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "#mosaic/components/Field";
import Form, { useForm } from "#mosaic/components/Form";
import { commonFieldControls, renderButtons } from "@utils";
import { getOptions, mockOptions } from "#mosaic/mock";

export default {
	title: "FormFields/FormFieldChips",
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
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					label,
					hideLabel,
					helperText,
					instructionText,
					forceInstructionTooltip,
					required,
					disabled,
					name: "chip",
					type: "chip",
					inputSettings: {
						options: optionsType === "Synchronous" ? mockOptions : getOptions,
					},
				},
			] as FieldDef[],
		[label, hideLabel, helperText, instructionText, forceInstructionTooltip, required, disabled, optionsType],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Chips Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			chip: { value: "option_1-cat_1", label: "Option 1" },
		},
	}),
	optionsType: "Synchronous",
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
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
						options: mockOptions,
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
						options: mockOptions,
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
						options: mockOptions,
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
						options: getOptions,
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
