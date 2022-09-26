import * as React from "react";
import { useMemo } from "react";
import FormFieldToggleSwitch, { FormFieldToggleSwitchDef } from ".";
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

export default {
	title: "FormFields/FormFieldToggleSwitch",
	component: FormFieldToggleSwitch,
} as ComponentMeta<typeof FormFieldToggleSwitch>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		required,
		disabled,
		toggleLabel,
		helperText,
		instructionText,
		fields
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "toggleSwitch",
					label: label,
					type: "toggleSwitch",
					required: required,
					disabled: disabled,
					inputSettings: {
						toggleLabel: toggleLabel,
					},
					helperText: helperText,
					instructionText: instructionText,
				},
			] as FieldDef<FormFieldToggleSwitchDef>[],
		[required, disabled, toggleLabel, label, helperText, instructionText]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={"Form Title"}
				description={"This is a description example"}
				state={state}
				fields={fields ? fields : playgroundFields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	disabled: false,
	label: "Label",
	helperText: "Helper Text",
	instructionText: "Instruction Text",
	required: false,
	toggleLabel: "Toggle label",
};


const kitchenSinkFields = [
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
		required: false,
		disabled: false,
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields
}
