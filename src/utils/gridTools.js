function transformColumn(row, column) {
	let data = row[column.column || column.name];
	if (data !== undefined && column.transforms !== undefined) {
		for(let [key, transform] of Object.entries(column.transforms)) {
			data = transform(data);
		}
	}
	
	return data;
}

function transformRows(rows, columns) {
	const newRows = rows.map((row) => {
		const newRow = {};
		columns.forEach(column => {
			newRow[column.name] = transformColumn(row, column);
		});
		
		return newRow;
	});
	
	return newRows;
}

export {
	transformColumn,
	transformRows
}