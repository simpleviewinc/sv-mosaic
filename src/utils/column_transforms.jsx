import { get } from "lodash";
import moment from "moment";
import React from "react";

import Image from "../components/internal/Image.jsx";

function transform_dateFormat() {
	return function(dateStr) {
		return moment(dateStr).format('M-D-YYYY');
	}
}

function transform_get(path) {
	return function(data) {
		return get(data, path);
	}
}

function transform_thumbnail({ width, height }) {
	return function(url) {
		const newUrl = url.replace(/\/upload\//, `/upload/c_fill,h_${height},w_${width}/`);
		
		return (
			<Image src={newUrl} className="transform_thumbnail" />
		)
	}
}

export {
	transform_dateFormat,
	transform_get,
	transform_thumbnail
}