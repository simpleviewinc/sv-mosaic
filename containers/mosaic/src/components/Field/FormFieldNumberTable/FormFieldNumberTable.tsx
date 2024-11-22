import * as React from "react";
import type { ChangeEvent, ReactElement } from "react";
import { useEffect, useRef, useState, memo } from "react";

// Types and styles
import type { MosaicFieldProps } from "@root/components/Field";
import type {
	NumberTableData,
	NumberTableInputSettings,
} from "./FormFieldNumberTableTypes";
import {
	StyledTable,
	Th,
	TrHead,
	TrTotals,
	TdTitle,
	Td,
	TdTotals,
	TBody,
	RowTitle,
	RowSubtitle,
} from "./FormFieldNumberTable.styled";
import { isValidRowCol } from "./numberTableUtils";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import { FormFieldNumberTableSkeleton } from "./FormFieldNumberTableSkeleton";

const FormFieldNumberTable = (
	props: MosaicFieldProps<
		"numberTable",
		NumberTableInputSettings,
		NumberTableData
	>,
): ReactElement => {
	const { fieldDef, onChange, value, disabled, inputRef, skeleton } = props;

	const { inputSettings } = fieldDef;
	const { displaySumColumn = true, displaySumRow = true } = inputSettings;

	const [columnsTotals, setColumnsTotals] = useState({});
	const cellRefs = useRef<(HTMLInputElement | null)[][]>([]);

	const rowTotals = {};

	/**
   * Computes the sums for each column by creating an
   * object like: [colName]: totalSum.
   */
	useEffect(() => {
		const totals = {};
		if (value) {
			for (const row in value) {
				if (!isValidRowCol(row, inputSettings.rows)) {
					continue;
				}
				for (const column in value[row]) {
					if (!isValidRowCol(column, inputSettings.columns)) {
						continue;
					}
					totals[column] = (totals[column] || 0) + (Number(value[row][column] || 0));
				}
			}
		} else {
			inputSettings.columns.forEach(column => {
				totals[column.name] = 0;
			});
		}

		if (displaySumColumn) {
			totals["mos_col_totals"] = Object.values(totals).reduce(
				(acc: number, current: number) => acc + current,
			);
			setColumnsTotals(totals);
		}
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
		colName: string,
	) => {
		const typedValue = e.target.value?.trim() === "" ? undefined : e.target.value;
		let copyValue = { ...value };
		if (copyValue[rowName]) {
			copyValue[rowName][colName] = typedValue;
		} else {
			copyValue = {
				...copyValue,
				[rowName]: {
					[colName]: typedValue,
				},
			};
		}

		if (typedValue === undefined) {
			if (Object.values(copyValue[rowName]).every(col => col === undefined)) {
				copyValue = {
					...copyValue,
					[rowName]: undefined,
				};
			}

			if (Object.values(copyValue).every(row => row === undefined)) {
				copyValue = undefined;
			}
		}

		onChange(copyValue);
	};

	/**
	 * @param value to be formmated
	 * @returns the formatted value if formatOptions are
	 * specified, otherwise returns the original value
	 */
	const formatValue = (value: number) => {
		if (value) {
			return new Intl.NumberFormat(
				navigator.language,
				inputSettings.numberFormatOptions,
			).format(value);
		}

		return value;
	};

	const onKeyDown = (e: any, row: number, col: number) => {
		switch (e.keyCode) {
		case 37: //Left
			if (e.target.selectionStart === 0 && col > 0)
				cellRefs.current[row][col - 1].focus();
			break;
		case 38: //Up
			if (row > 0)
				cellRefs.current[row - 1][col].focus();
			break;
		case 39: //Right
			if (e.target.selectionStart === e.target.value?.length && col < inputSettings.columns.length - 1)
				cellRefs.current[row][col + 1].focus();
			break;
		case 40: //Down
			if (row < inputSettings.rows.length - 1)
				cellRefs.current[row + 1][col].focus();
			break;
		default:
			break;
		}

	};

	if (skeleton) {
		return <FormFieldNumberTableSkeleton />;
	}

	return (
		<StyledTable>
			<thead>
				<TrHead>
					<Th>{inputSettings.topLeftLabel}</Th>
					{inputSettings.columns.map((column, index) => (
						<Th key={`${column.name}-${index}`}>{column.title}</Th>
					))}
					{displaySumRow && (
						<Th>{inputSettings.columnTotalLabel || "Total"}</Th>
					)}
				</TrHead>
			</thead>
			<TBody>
				{inputSettings.rows.map((row, rowIdx) => (
					<tr key={`row-${row.name}`}>
						<Td key={`${row.name}`}>
							<RowTitle>{row.title}</RowTitle>
							{row?.subtitle && <RowSubtitle>{row.subtitle}</RowSubtitle>}
						</Td>
						{inputSettings.columns.map((column, colIdx) => {
							const strValue = value?.[row.name]?.[column.name] ?? "";

							if (displaySumRow) {
								const numberValue = isNaN(Number(strValue)) ? 0 : Number(strValue);
								rowTotals[row.name] = (rowTotals[row.name] || 0) + numberValue;
							}

							return (
								<Td key={`${row.name}-${column.name}`}>
									<StyledTextField
										inputProps={{ "data-testid": `${row.name}-${column.name}` }}
										placeholder="0"
										value={strValue}
										onChange={(e) => onChangeCell(e, row.name, column.name)}
										fieldSize="90px"
										disabled={disabled}
										inputRef={(el) => {
											if (cellRefs?.current) {
												cellRefs.current[rowIdx] = cellRefs.current[rowIdx] || [];
												cellRefs.current[rowIdx][colIdx] = el;
											}

											if (!rowIdx && !colIdx && inputRef) {
												inputRef.current = el;
											}
										}}
										onKeyDown={(e) => onKeyDown(e, rowIdx, colIdx)}
									/>
								</Td>
							);
						})}
						{displaySumRow && (
							<TdTitle key={`totals-${row.name}`}>
								{formatValue(rowTotals[row.name])}
							</TdTitle>
						)}
					</tr>
				))}
				{displaySumColumn && (
					<TrTotals>
						<TdTitle>{inputSettings.rowTotalLabel || "Total"}</TdTitle>
						{inputSettings.columns.map((column) => (
							<TdTotals key={`column-${column.name}`}>
								{formatValue(columnsTotals[column.name]) || 0}
							</TdTotals>
						))}
						{displaySumRow && (
							<TdTotals className="totals-row">{formatValue(columnsTotals["mos_col_totals"]) || 0}</TdTotals>
						)}
					</TrTotals>
				)}
			</TBody>
		</StyledTable>
	);
};

export default memo(FormFieldNumberTable);
