import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldToggleSwitch",
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();

	const disabled = boolean("Disabled", false);
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper Text");
	const instructionText = text("Instruction text", "Instruction text");
	const required = boolean("Required", false);
	const toggleLabel = text("Toggle label", "Toggle label");

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "toggleSwitch",
					label,
					type: "toggleSwitch",
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
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
			/>
		</>
	);
};

const fields: FieldDef[] = [
	{
		name: "toggleSwitchDefault",
		label: "Default example",
		type: "toggleSwitch",
		required: false,
		disabled: false,
		inputSettings: {
			toggleLabel: "Toggle label",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "toggleSwitchDisabled",
		label: "Disabled example",
		type: "toggleSwitch",
		required: false,
		disabled: true,
		inputSettings: {
			toggleLabel: "Toggle label",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "toggleSwitchWithoutLabel",
		label: "Toggle switch without label",
		type: "toggleSwitch",
		required : false,
		disabled: false,
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
];

export const KitchenSink = (): ReactElement => {
	const { state, dispatch } = useForm();

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields}
				dispatch={dispatch}
			/>
		</>
	);
};
