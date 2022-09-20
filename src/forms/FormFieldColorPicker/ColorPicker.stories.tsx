import * as React from "react";
import { useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldColorPicker",
	component: Form,
};

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		label,
		disabled,
		required,
		fields,
		helperText,
		instructionText
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "color",
					label,
					type: "color",
					required,
					disabled,
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[label, required, disabled, instructionText, helperText]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<div style={{ height: "100vh" }}>
				<Form
					buttons={renderButtons(dispatch)}
					title="Form Title"
					description="This is a description example"
					state={state}
					fields={fields ? fields : playgroundFields}
					dispatch={dispatch}
					onCancel={onCancel}
				/>
			</div>
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
};

const kitchenSinkFields = [
	{
		name: "color",
		label: "Regular Example",
		type: "color",
		required: false,
		disabled: false,
	},
	{
		name: "colorDisabled",
		label: "Disabled Example",
		type: "color",
		required: false,
		disabled: true,
	},
] as FieldDef[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
