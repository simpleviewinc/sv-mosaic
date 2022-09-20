import * as React from "react";
import { useMemo } from "react";
import { ImageUploadDef } from ".";
import { FieldDef } from "@root/components/Field";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldImageUpload",
	component: Form,
};

const handleSetFocus = () => {
	alert("Set focus is called");
};

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		disabled,
		required,
		label,
		fields,
		helperText,
		instructionText,
		showMenu,
		withSetFocusCallback,
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "imageUpload",
					label,
					type: "imageUpload",
					required,
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						options: showMenu && menuOptions,
						handleSetFocus: withSetFocusCallback && handleSetFocus,
					},
				},
			] as FieldDef<ImageUploadDef>[],
		[
			required,
			disabled,
			showMenu,
			instructionText,
			helperText,
			label,
			withSetFocusCallback
		]
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
	disabled: false,
	helperText: "Helper text",
	label: "Label",
	instructionText: "Instruction text",
	required: false,
	withSetFocusCallback: false,
	showMenu: true,
};

const kitchenSinkFields = [
	{
		name: "imageUploadWithMenu",
		label: "Image Upload with menu options and without setFocus handler",
		type: "imageUpload",
		required: false,
		disabled: false,
		helperText: "Helper text",
		instructionText: "Instruction text",
		inputSettings: {
			options: menuOptions,
		},
	},
	{
		name: "imageUploadwithSetFocus",
		label: "Image Upload with set focus callback",
		type: "imageUpload",
		required: false,
		disabled: false,
		helperText: "Helper text",
		instructionText: "Instruction text",
		inputSettings: {
			handleSetFocus: handleSetFocus,
		},
	},
	{
		name: "imageUploadDisabled",
		label: "Image Upload disabled",
		type: "imageUpload",
		required: false,
		disabled: true,
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
] as FieldDef<ImageUploadDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};

