import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldTimeField",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const label = text("Label", "Time Field Picker");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);
	const populateTime = text("Initial Time", "");

	const getFormValues = useCallback(async () => {
		return {
			time: populateTime || undefined,
		};
	}, [populateTime]);

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
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				getFormValues={getFormValues}
				skeleton={skeleton}
			/>
		</>
	);
};
