import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

// Components
import Form from "../Form/Form";

// Utils
import { FieldDef } from "@root/components/Field";
import { ImageUploadDef } from ".";
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldImageUpload",
	decorators: [withKnobs],
};

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const handleSetFocus = () => {
	alert("Set focus is called");
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Image Upload Label");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const showMenu = boolean("Show menu", true);
	const withSetFocusCallback = boolean("With set focus callback", true);

	const fields = useMemo(
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
		[required, disabled, showMenu, instructionText, helperText, label]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
				JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};

const kitchenSinkFields = [
	{
		name: "imageUploadWithMenu",
		label: "Image Upload with menu options",
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

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(kitchenSinkFields);
	}, [kitchenSinkFields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " +
			JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={"Form Title"}
				description={"This is a description example"}
				state={state}
				fields={kitchenSinkFields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
