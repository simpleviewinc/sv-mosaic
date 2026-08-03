import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "#mosaic/components/Field";
import Form, { useForm } from "#mosaic/components/Form";
import { commonFieldControls, parseDateControl, renderButtons } from "@utils";

export default {
	title: "FormFields/FormFieldTimeField",
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
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? { ...prepopData, time: parseDateControl(prepopData?.time) } : {} });
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "time",
				type: "time",
				label,
				hideLabel,
				required,
				disabled,
				helperText,
				instructionText,
				forceInstructionTooltip,
			},
		],
		[label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Time Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			time: "11-30",
		},
	}),
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
};
