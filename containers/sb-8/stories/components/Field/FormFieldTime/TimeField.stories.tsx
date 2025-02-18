import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { commonFieldControls, renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldTimeField",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "time",
				type: "time",
				label,
				required,
				disabled,
				helperText,
				instructionText,
			},
		],
		[label, required, disabled, helperText, instructionText],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Time Field"
				fields={fields}
				skeleton={skeleton}
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
