import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldPhoneSelectionDropdown",
	decorators: [withKnobs],
};

export const Playground = () : ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const autoFormat = boolean("Autoformat", true);
	const country = text("Country code (e.g., us, mx, etc.)", "");
	const label = text("Label", "Label");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "phone",
					label,
					type: "phone",
					required,
					disabled,
					inputSettings: {
						autoFormat,
						country,
					},
					helperText,
					instructionText,
				},
			],
		[disabled, required, autoFormat, country, label, helperText, instructionText],
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
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					name: "phone",
					label: "Regular example",
					type: "phone",
					required: false,
					disabled: false,
					helperText: "Helper text",
					instructionText: 'Default contry code is "us"',
				},
				{
					name: "countryCode",
					label: "With a country code provided",
					type: "phone",
					required: false,
					disabled: false,
					inputSettings: {
						country: "ar",
					},
					helperText: "Helper text",
					instructionText: 'The country code of "ar" was provided',
				},
				{
					name: "autoformatEnabled",
					label: "Autoformat enabled",
					type: "phone",
					required: false,
					disabled: false,
					inputSettings: {
						autoFormat: true,
						country: "us",
					},
					helperText: "Helper text",
					instructionText: "Type a phone number to see the format",
				},
			],
		[],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form Title"
				description="Form description"
				fields={fields}
			/>
		</>
	);
};
