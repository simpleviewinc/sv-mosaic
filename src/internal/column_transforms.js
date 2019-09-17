function dateFormat(data, args) {
	return `${data.getMonth()}-${data.getDate()}-${data.getFullYear()}`;
}

export {
	dateFormat
}