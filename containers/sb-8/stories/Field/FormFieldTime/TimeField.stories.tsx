import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

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
	prepopulate,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const getFormValues = useCallback(async () => {
		return {
			time: prepopulate || undefined,
		};
	}, [prepopulate]);

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
				getFormValues={getFormValues}
				skeleton={skeleton}
			/>
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
	prepopulate: "",
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
	prepopulate: {
		name: "Prepopulate",
	},
};
