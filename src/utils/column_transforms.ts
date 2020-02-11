import { get } from "lodash";
import * as moment_ from "moment";
import { createElement } from "react";

import Image from "../components/internal/Image.jsx";

const moment = moment_;

export function transform_dateFormat() {
	return function(dateStr: string): string {
		return moment(dateStr).format('M-D-YYYY');
	}
}

export function transform_get(path) {
	return function(data) {
		return get(data, path);
	}
}

interface TransformThumbnailProps {
	width: number;
	height: number;
}

export function transform_thumbnail({ width, height }: TransformThumbnailProps) {
	return function(url: string) {
		const newUrl = url.replace(/\/upload\//, `/upload/c_fill,h_${height},w_${width}/`);
		
		const element = createElement(Image, {
			src : newUrl,
			className : "transform_thumbnail"
		}, null);

		return element;
	}
}