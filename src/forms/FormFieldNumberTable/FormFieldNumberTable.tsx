import * as React from "react";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import {
	NumberTableData,
	NumberTableInputSettings,
} from "./FormFieldNumberTableTypes";
import {
	NumberTableContainer,
	TitleContainer,
	Title,
	TableTitle,
	TableContainer,
	StyledTable,
	Th,
	TrHead,
	TrTotals,
	TdTItle,
	StyledInput,
	TdInput,
	TdTotals,
	TBody,
} from "./FormFieldNumberTable.styled";
import { isEmpty } from "lodash";

const FormFieldRadio = (
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
				for (const column in value[row]) {
					totals[column] = (totals[column] || 0) + (Number(value[row][column] || 0));
				}
			}
		} else {
			inputSettings.columns.forEach(column => {
				totals[column.name] = 0;
			});
		}

		if (!isEmpty(rowTotals)) {
			totals["row"] = Object.values(rowTotals).reduce(
				(acc: number, current: number) => acc + current
			);
		}

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
		const copyValue = { ...value };
		if (e.target.value === "" || e.target.value === "0") {
			copyValue[rowName][colName] = undefined
		} else {
			copyValue[rowName][colName] = e.target.value
		}
		onChange(copyValue);
	};

	return (
		<NumberTableContainer>
			<TitleContainer>
				<Title>Number of Rooms</Title>
			</TitleContainer>
			<TableContainer>
				<TableTitle>Number of Rooms by Type</TableTitle>
				<StyledTable>
					<thead>
						<TrHead>
							<Th>{inputSettings.topLeftLabel}</Th>
							{inputSettings?.columns.map((column, index) => (
								<Th key={`${column.name}-${index}`}>{column.title}</Th>
							))}
							<Th>{inputSettings.columnTotalLabel || "Total"}</Th>
						</TrHead>
					</thead>
					<TBody>
						{inputSettings.rows.map((row) => (
							<tr key={`row-${row.name}`}>
								<TdTItle key={`${row.name}`}>{row.title}</TdTItle>
								{inputSettings.columns.map((column) => {
									const strValue = value?.[row.name]?.[column.name] ?? "";
									const numberValue = isNaN(Number(strValue)) ? 0 : Number(strValue);
									rowTotals[row.name] = (rowTotals[row.name] || 0) + numberValue;

									return (
										<TdInput key={`${row.name}-${column.name}`}>
											<StyledInput
												inputProps={{ "data-testid": `${row.name}-${column.name}` }}
												placeholder="0"
												value={strValue}
												onChange={(e) => onChangeCell(e, row.name, column.name)}
												disabled={fieldDef.disabled}
											/>
										</TdInput>
									);
								})}
								<TdTItle key={`totals-${row.name}`}>
									{rowTotals[row.name]}
								</TdTItle>
							</tr>
						))}
						<TrTotals>
							<TdTItle>{inputSettings.rowTotalLabel || "Total"}</TdTItle>
							{Object.keys(columnsTotals).map((column) => (
								<TdTotals key={`column-${column}`}>
									{columnsTotals[column]}
								</TdTotals>
							))}
						</TrTotals>
					</TBody>
				</StyledTable>
			</TableContainer>
		</NumberTableContainer>
	);
};

export default FormFieldRadio;
