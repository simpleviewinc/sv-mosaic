import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";

// Components
import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldToggle",
};

export const Playground = ({
	label,
	hideLabel,
	required,
	prepop,
	prepopData,
	disabled,
	instructionText,
	forceInstructionTooltip,
	helperText,
	toggleLabel,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "toggle",
					label,
					hideLabel,
					type: "toggle",
					required,
					disabled,
					inputSettings: {
						toggleLabel,
					},
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			],
		[label, hideLabel, required, disabled, toggleLabel, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Toggle Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			toggle: true,
		},
	}),
	toggleLabel: "Toggle Label",
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	toggleLabel: {
		name: "Toggle Label",
	},
};

const fields: FieldDef[] = [
	{
		name: "toggleDefault",
		label: "Default example",
		type: "toggle",
		required: false,
		disabled: false,
		inputSettings: {
			toggleLabel: "Toggle label",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "toggleDisabled",
		label: "Disabled example",
		type: "toggle",
		required: false,
		disabled: true,
		inputSettings: {
			toggleLabel: "Toggle label",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "toggleWithoutLabel",
		label: "Toggle switch without label",
		type: "toggle",
		required : false,
		disabled: false,
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
				fields={fields}
			/>
		</>
	);
};
