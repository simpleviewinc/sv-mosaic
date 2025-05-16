import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "#mosaic/components/Field";
import Form, { useForm } from "#mosaic/components/Form";
import { commonFieldControls, renderButtons } from "@utils";

export default {
	title: "FormFields/FormFieldPhone",
};

export const Playground = ({
	label,
	hideLabel,
	required,
	prepop,
	prepopData,
	disabled,
	instructionText,
	forceInstructionTooltip,
	helperText,
	size,
	country,
	international,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "phone",
					label,
					hideLabel,
					type: "phone",
					required,
					disabled,
					inputSettings: {
						country,
						international,
					},
					helperText,
					size,
					instructionText,
					forceInstructionTooltip,
				},
			],
		[label, hideLabel, required, disabled, country, helperText, size, instructionText, forceInstructionTooltip, international],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Phone Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			phone: "+15205302271",
		},
	}),
	size: undefined,
	country: "",
	international: undefined,
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	size: {
		name: "Size",
		control: { type: "select" },
		options: {
			"Undefined (default: sm)": undefined,
			XSmall: "xs",
			Small: "sm",
			Medium: "md",
			Large: "lg",
			Full: "full",
		},
	},
	country: {
		name: "Initial Country",
	},
	international: {
		name: "International",
		type: { control: "select" },
		options: {
			"Undefined (default: false)": undefined,
			true: true,
			false: false,
		},
	},
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
