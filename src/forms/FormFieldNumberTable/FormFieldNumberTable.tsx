import * as React from "react";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import {
	NumberTableData,
	NumberTableInputSettings,
} from "./FormFieldNumberTableTypes";
import {
	StyledTable,
	Th,
	TrHead,
	TrTotals,
	TdTitle,
	StyledInput,
	Td,
	TdTotals,
	TBody,
	RowTitle,
	RowSubtitle,
} from "./FormFieldNumberTable.styled";
import { isValidRowCol } from "./numberTableUtils";

const FormFieldNumberTable = (
	props: MosaicFieldProps<
    "numberTable",
    NumberTableInputSettings,
    NumberTableData
  >
): ReactElement => {
	const { fieldDef, onChange, value } = props;

	const { inputSettings } = fieldDef;
	const rowTotals = {};
	const [columnsTotals, setColumnsTotals] = useState({});

	/**
   * Computes the sums for each column by creating an
   * object like: [colName]: totalSum.
   */
	useEffect(() => {
		const totals = {};
		if (value) {
			for (const row in value) {
				if (!isValidRowCol(row, inputSettings.rows)) {
					throw new Error(`Row ${row} is not defined.`);
				}
				for (const column in value[row]) {
					if (!isValidRowCol(column, inputSettings.columns)) {
						throw new Error(`Column ${column} is not defined.`);
					}
					totals[column] = (totals[column] || 0) + (Number(value[row][column] || 0));
				}
			}
		} else {
			inputSettings.columns.forEach(column => {
				totals[column.name] = 0;
			});
		}

		totals["mos_col_totals"] = Object.values(totals).reduce(
			(acc: number, current: number) => acc + current
		);

		setColumnsTotals(totals);
	}, [value]);

	/**
	 * Updates the value object with the value that is entered at
	 * the cell located at the row and column name given.
	 * @param e Input change event
	 * @param rowName used to identify in which row is located
	 * the cell that is changing
	 * @param colName used to identify in which column is
	 * located the cell that is changing
	 */
	const onChangeCell = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		rowName: string,
		colName: string
	) => {
		const typedValue = e.target.value?.trim() === "" ? undefined : e.target.value;
		let copyValue = { ...value };
		if (copyValue[rowName]) {
			copyValue[rowName][colName] = typedValue;
		} else {
			copyValue = {
				...copyValue,
				[rowName]: {
					[colName]: typedValue
				}
			}
		}

		if (typedValue === undefined) {
			if (Object.values(copyValue[rowName]).every(col => col === undefined)) {
				copyValue = {
					...copyValue,
					[rowName]: undefined
				}
			}

			if (Object.values(copyValue).every(row => row === undefined)) {
				copyValue = undefined;
			}
		}

		onChange(copyValue);
	};

	return (
		<StyledTable>
			<thead>
				<TrHead>
					<Th>{inputSettings.topLeftLabel}</Th>
					{inputSettings.columns.map((column, index) => (
						<Th key={`${column.name}-${index}`}>{column.title}</Th>
					))}
					<Th>{inputSettings.columnTotalLabel || "Total"}</Th>
				</TrHead>
			</thead>
			<TBody>
				{inputSettings.rows.map((row) => (
					<tr key={`row-${row.name}`}>
						<Td key={`${row.name}`}>
							<RowTitle>{row.title}</RowTitle>
							{row?.subtitle && <RowSubtitle>{row.subtitle}</RowSubtitle>}
						</Td>
						{inputSettings.columns.map((column) => {
							const strValue = value?.[row.name]?.[column.name] ?? "";
							const numberValue = isNaN(Number(strValue)) ? 0 : Number(strValue);
							rowTotals[row.name] = (rowTotals[row.name] || 0) + numberValue;

							return (
								<Td key={`${row.name}-${column.name}`}>
									<StyledInput
										inputProps={{ "data-testid": `${row.name}-${column.name}` }}
										placeholder="0"
										value={strValue}
										onChange={(e) => onChangeCell(e, row.name, column.name)}
										disabled={fieldDef.disabled}
									/>
								</Td>
							);
						})}
						<TdTitle key={`totals-${row.name}`}>
							{rowTotals[row.name]}
						</TdTitle>
					</tr>
				))}
				<TrTotals>
					<TdTitle>{inputSettings.rowTotalLabel || "Total"}</TdTitle>
					{inputSettings.columns.map((column) => (
						<TdTotals key={`column-${column.name}`}>
							{columnsTotals[column.name] || 0}
						</TdTotals>
					))}
					<TdTotals>
						{columnsTotals["mos_col_totals"] || 0}
					</TdTotals>
				</TrTotals>
			</TBody>
		</StyledTable>
	);
};

export default FormFieldNumberTable;
