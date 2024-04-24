import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldToggle",
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const disabled = boolean("Disabled", false);
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);
	const toggleLabel = text("Toggle label", "Toggle label");

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
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
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
