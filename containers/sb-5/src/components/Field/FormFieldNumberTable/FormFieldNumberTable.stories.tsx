import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { boolean, withKnobs, text, object } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";
import { columns, numberTableDefaultValue, rows } from "@root/components/Field/FormFieldNumberTable/numberTableUtils";

export default {
	title: "FormFields/FormFieldNumberTable",
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;
	const label = text("Label", "Number of Rooms by Type");
	const rowTotalLabel = text("Row total label", "TOTAL");
	const columnTotalLabel = text("Column total label", "No. Rooms");
	const topLeftLabel = text("Top left label", "Day");
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);
	const disabled = boolean("Disabled", false);
	const instructionText = text("Instruction text", "");
	const helperText = text("Helper text", "");
	const displayColumnsSums = boolean("Display columns sums", true);
	const displayRowsSums = boolean("Display rows sums", true);
	const prepopulate = boolean("Prepopulate", true);
	const formatOptions = object("Number format options", { style: "currency", currency: "USD" });

	useEffect(() => {
		if (!prepopulate)
			setFieldValue({
				name: "numberTable",
				value: undefined,
			});
		else
			setFieldValue({
				name: "numberTable",
				value: numberTableDefaultValue,
			});
	}, [prepopulate]);

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "numberTable",
				label,
				type: "numberTable",
				required,
				disabled,
				inputSettings: {
					displaySumColumn: displayColumnsSums,
					displaySumRow: displayRowsSums,
					rowTotalLabel: rowTotalLabel,
					columnTotalLabel: columnTotalLabel,
					topLeftLabel: topLeftLabel,
					rows: rows,
					columns: columns,
					numberFormatOptions: formatOptions,
				},
				helperText,
				instructionText,
			},
		],
		[
			label,
			formatOptions,
			displayColumnsSums,
			displayRowsSums,
			required,
			disabled,
			instructionText,
			helperText,
			topLeftLabel,
			rowTotalLabel,
			columnTotalLabel,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title={text("Form Title", "Form Title")}
				description={text("Form Description", "This is a description example")}
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
};
