import { DataViewColumn } from "../types/DataViewTypes"

export function transformColumn(row, column: DataViewColumn) {
	let data = row[column.column || column.name];
	if (data !== undefined && column.transforms !== undefined) {
		for(let [key, transform] of Object.entries(column.transforms)) {
			data = transform(data);
		}
	}
	
	return data;
}

export function transformRows(rows, columns: DataViewColumn[]) {
	const newRows = rows.map((row) => {
		const newRow = {
			...row
		};
		columns.forEach(column => {
			newRow[column.name] = transformColumn(row, column);
		});
		
		return newRow;
	});
	
	return newRows;
}