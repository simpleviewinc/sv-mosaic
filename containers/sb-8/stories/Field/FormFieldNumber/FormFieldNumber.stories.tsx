import * as React from "react";
import { useMemo, ReactElement } from "react";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldNumber",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	size,
	placeholder,
	decimalPlaces,
	prefix,
	suffix,
	sign,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { handleSubmit, state } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "numberfield",
					label,
					type: "number",
					required,
					disabled,
					size,
					inputSettings: {
						placeholder: placeholder === "" ? undefined : placeholder,
						decimalPlaces,
						prefix,
						suffix,
						sign,
					},
					helperText,
					instructionText,
				},
			],
		[
			label,
			required,
			disabled,
			size,
			placeholder,
			helperText,
			instructionText,
			decimalPlaces,
			prefix,
			suffix,
			sign,
		],
	);

	return (
		<>
			<Form
				buttons={renderButtons(handleSubmit)}
				title="Number Field"
				fields={fields}
				{...controller}
				skeleton={skeleton}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	size: "sm",
	placeholder: "placeholder",
	decimalPlaces: -1,
	prefix: "",
	suffix: "",
	sign: "any",
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	size: {
		name: "Size",
		control: { type: "select" },
		options: ["xs", "sm", "md", "lg"],
	},
	placeholder: {
		name: "Placeholder",
	},
	decimalPlaces: {
		name: "Decimal Places",
	},
	prefix: {
		name: "Prefix",
	},
	suffix: {
		name: "Suffix",
	},
	sign: {
		name: "Sign",
		control: { type: "select" },
		options: ["any", "positive", "negative"],
	},
};
