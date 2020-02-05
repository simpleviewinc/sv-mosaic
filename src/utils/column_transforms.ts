import { get } from "lodash";
import { createElement } from "react";

import Image from "../components/internal/Image.jsx";

export function transform_dateFormat() {
	return function(dateStr: string): string {
		const data = new Date(dateStr);
		return `${data.getMonth()}-${data.getDate()}-${data.getFullYear()}`;
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