import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";

// Components
import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import { renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldToggle",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	toggleLabel,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "toggle",
					label,
					type: "toggle",
					required,
					disabled,
					inputSettings: {
						toggleLabel,
					},
					helperText,
					instructionText,
				},
			],
		[required, disabled, toggleLabel, label, helperText, instructionText],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Toggle Field"
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
	toggleLabel: "Toggle Label",
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
