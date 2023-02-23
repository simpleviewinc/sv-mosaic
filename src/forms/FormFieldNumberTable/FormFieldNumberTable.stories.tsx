import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FieldDef } from "@root/components/Field";
import { onCancel, renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";
import { columns, numberTableDefaultValue, rows } from "./numberTableUtils";

export default {
	title: "FormFields/FormFieldNumberTable",
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const { state, dispatch } = useForm();
	const label = text("Label", "Number of Rooms by Type");
	const rowTotalLabel = text("Row total label", "TOTAL");
	const columnTotalLabel = text("Column total label", "No. Rooms");
	const topLeftLabel = text("Top left label", "Day");
	const required = boolean("Required", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "");
	const helperText = text("Helper text", "");

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "numberTable",
				label,
				type: "numberTable",
				required,
				disabled,
				defaultValue: numberTableDefaultValue,
				inputSettings: {
					rowTotalLabel: rowTotalLabel,
					columnTotalLabel: columnTotalLabel,
					topLeftLabel: topLeftLabel,
					rows: rows,
					columns: columns
				},
				helperText,
				instructionText,
			},
		],
		[
			label,
			required,
			disabled,
			instructionText,
			helperText,
			topLeftLabel,
			rowTotalLabel,
			columnTotalLabel,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={text("Form Title", "Form Title")}
				description={text("Form Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};
