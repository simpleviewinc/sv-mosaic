import { DataViewColumn, DataViewProps } from "../components/DataView";

export function transformColumn(row: DataViewProps["data"][number], column: DataViewColumn): unknown {
	let data = row[column.column || column.name];
	if (data !== undefined && column.transforms !== undefined) {
		for (const transform of column.transforms) {
			if (data !== undefined) {
				data = transform({ data, row });
			}
		}
	}

	return data;
}

export function transformRows(rows: DataViewProps["data"], columns: DataViewColumn[]): DataViewProps["data"] {
	const newRows = rows.map((row) => {
		const newRow = {
			...row,
		};
		columns.forEach(column => {
			newRow[column.name] = transformColumn(row, column);
		});

		return newRow;
	});

	return newRows;
}
