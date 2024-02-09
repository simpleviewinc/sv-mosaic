import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldImageUpload",
	decorators: [withKnobs],
};

const handleSetFocus = () => {
	alert("Set focus is called");
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Image Upload Label");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const showMenu = boolean("Show menu", true);
	const withSetFocusCallback = boolean("With set focus callback", true);

	const fields = useMemo(
		(): FieldDef[] =>
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
			],
		[required, disabled, showMenu, instructionText, helperText, label],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(methods)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};

const kitchenSinkFields: FieldDef[] = [
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
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(methods)}
				title="Form Title"
				description="This is a description example"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
