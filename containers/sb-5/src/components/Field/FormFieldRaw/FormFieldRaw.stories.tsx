import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";
import { RawValueWrapper } from "@root/components/Field/FormFieldRaw/FormFieldRaw.styled";

export default {
	title: "FormFields/FormFieldRaw",
	decorators: [withKnobs],
} as Meta;

function RawValue() {
	return (
		<RawValueWrapper>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		</RawValueWrapper>
	);
}

async function getFormValues() {
	return {
		raw: <RawValue />,
	};
}

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	const disabled = boolean("Disabled", false);
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "raw",
					label,
					type: "raw",
					required,
					disabled,
					helperText,
					instructionText,
				},
			],
		[required, disabled, label, helperText, instructionText],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				getFormValues={getFormValues}
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
