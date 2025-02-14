import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";
import { columns, numberTableDefaultValue, rows } from "@root/components/Field/FormFieldNumberTable/numberTableUtils";

export default {
	title: "FormFields/FormFieldNumberTable",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	rowTotalLabel,
	columnTotalLabel,
	topLeftLabel,
	displayColumnsSums,
	displayRowsSums,
	prepop,
	formatOptions,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

	useEffect(() => {
		if (!prepop)
			setFieldValue({
				name: "numberTable",
				value: undefined,
			});
		else
			setFieldValue({
				name: "numberTable",
				value: numberTableDefaultValue,
			});
	}, [prepop]);

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
				title="Number Table Field"
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args,
	rowTotalLabel: "TOTAL",
	columnTotalLabel: "No. Rooms",
	topLeftLabel: "Day",
	displayColumnsSums: true,
	displayRowsSums: true,
	formatOptions: { style: "currency", currency: "USD" },
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	rowTotalLabel: {
		name: "Row Total Label",
	},
	columnTotalLabel: {
		name: "Column Total Label",
	},
	topLeftLabel: {
		name: "Top Left Label",
	},
	displayColumnsSums: {
		name: "Display Columns Sums",
	},
	displayRowsSums: {
		name: "Display Rows Sums",
	},
	formatOptions: {
		name: "Number Format Options",
	},
};
