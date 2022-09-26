import * as React from "react";
import { useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import FormFieldDateField, { DateFieldDef } from ".";
import Form, { useForm } from "@root/components/Form";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

export default {
	title: "FormFields/FormFieldDateField",
	component: FormFieldDateField,
}  as ComponentMeta<typeof FormFieldDateField>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		fields,
		helperText,
		instructionText,
		disabled,
		required,
		showTime,
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "date",
					type: "date",
					label,
					required,
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						showTime,
					},
				},
			] as FieldDef[],
		[label, required, disabled, helperText, instructionText, showTime]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
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
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	showTime: false
};

const helperText = "Helper text";
const instructionText = "Instruction text";

const kitchenSinkFields = [
	{
		name: "singleDate",
		type: "date",
		label: "Single Date Calendar",
		required: false,
		disabled: false,
		helperText,
		instructionText,
		inputSettings: {
			showTime: false,
		},
	},
	{
		name: "disableSingleDate",
		type: "date",
		label: "Disable Single Date Calendar",
		required: false,
		disabled: true,
		helperText,
		instructionText,
		inputSettings: {
			showTime: false,
		},
	},
	{
		name: "dateTime",
		type: "date",
		label: "Date Time Input",
		required: false,
		disabled: false,
		helperText,
		instructionText,
		inputSettings: {
			showTime: true,
		},
	},
	{
		name: "disableDateTime",
		type: "date",
		label: "Disable Date Time Calendar",
		required: false,
		disabled: true,
		helperText,
		instructionText,
		inputSettings: {
			showTime: true,
		},
	},
	{
		name: "requiredDateTime",
		type: "date",
		label: "Required Single Date Calendar",
		required: true,
		disabled: false,
		helperText,
		instructionText,
		inputSettings: {
			showTime: true,
		},
	} as FieldDef<DateFieldDef>,
];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
