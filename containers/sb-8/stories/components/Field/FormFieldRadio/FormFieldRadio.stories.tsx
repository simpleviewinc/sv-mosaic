import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions, mockOptions } from "@root/mock";

export default {
	title: "FormFields/FormFieldRadio",
};

export const Playground = ({
	label,
	required,
	prepop,
	prepopData,
	disabled,
	instructionText,
	helperText,
	optionsType,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
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
						options: optionsType === "Synchronous" ? mockOptions : getOptions,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[label, required, disabled, instructionText, helperText, optionsType],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Radio Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			radio: { value: "option_1-cat_1", label: "Option 1" },
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

const kitchenSinkFields: FieldDef[] = [
	{
		name: "radio",
		label: "Regular example",
		type: "radio",
		required: false,
		disabled: false,
		inputSettings: {
			options: mockOptions,
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
			options: mockOptions,
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
