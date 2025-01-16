import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import { renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions, optionsLibrary } from "@root/mock";

export default {
	title: "FormFields/FormFieldRadio",
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
					name: "radio",
					label,
					type: "radio",
					required,
					disabled,
					inputSettings: {
						options: optionsType === "Synchronous" ? optionsLibrary : getOptions,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[label, required, disabled, instructionText, helperText, optionsType],
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
				title="Radio Field"
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
		radio: { value: "option_1-cat_1", label: "Option 1" },
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
		name: "radio",
		label: "Regular example",
		type: "radio",
		required: false,
		disabled: false,
		inputSettings: {
			options: optionsLibrary,
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
			options: optionsLibrary,
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
