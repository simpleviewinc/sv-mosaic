import { get } from "lodash";

function transform_dateFormat() {
	return function(dateStr) {
		const data = new Date(dateStr);
		return `${data.getMonth()}-${data.getDate()}-${data.getFullYear()}`;
	}
}

function transform_get(path) {
	return function(data) {
		return get(data, path);
	}
}

export {
	transform_dateFormat,
	transform_get
}