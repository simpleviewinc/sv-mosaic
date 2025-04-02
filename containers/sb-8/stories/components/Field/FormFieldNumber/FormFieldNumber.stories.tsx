import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { commonFieldControls, renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldNumber",
};

export const Playground = ({
	label,
	required,
	prepop,
	prepopData,
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
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { handleSubmit, state } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "number",
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
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: { number: "-1.337" },
	}),
	size: "sm",
	placeholder: "placeholder",
	decimalPlaces: -1,
	prefix: "",
	suffix: "",
	sign: "any",
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
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
