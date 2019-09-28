function transformColumn(row, column) {
	let data = row[column.column || column.name];
	if (data !== undefined && column.transforms !== undefined) {
		for(let [key, transform] of Object.entries(column.transforms)) {
			data = transform(data);
		}
	}
	
	return data;
}

export {
	transformColumn
}