import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";

// Components
import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";
import { RawValueWrapper } from "@root/components/Field/FormFieldRaw/FormFieldRaw.styled";

export default {
	title: "FormFields/FormFieldRaw",
};

function RawValue() {
	return (
		<RawValueWrapper>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		</RawValueWrapper>
	);
}

async function getFormValues() {
	return {
		raw: <RawValue />,
	};
}

export const Playground = ({
	label,
	required,
	disabled,
	instructionText,
	helperText,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "raw",
					label,
					type: "raw",
					required,
					disabled,
					helperText,
					instructionText,
				},
			],
		[required, disabled, label, helperText, instructionText],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Raw Field"
				fields={fields}
				getFormValues={getFormValues}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args,
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
};
