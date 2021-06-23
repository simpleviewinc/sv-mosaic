import { get, map } from "lodash";
import { format } from "date-fns";
import { createElement, ReactNode } from "react";
import { MosaicObject } from "../types";

import Image from "../components/internal/Image";

export function transform_boolean() {
	return function({ data }: { data: boolean }): string {
		if (data === true) {
			return "Yes";
		} else {
			return "No";
		}
	}
}

export function transform_dateFormat() {
	return function({ data }: { data: Date }): string {
		return format(data, "M/d/yyyy");
	}
}

export function transform_get(path: string | string[]) {
	return function({ data }: { data : MosaicObject }): ReactNode {
		return get(data, path);
	}
}

export function transform_mapGet(path: string | string[]) {
	return ({ data }: { data: MosaicObject[] }): unknown => {
		const results = map(data, (obj) => {
			return get(obj, path);
		});
		
		// filters out undefined, null values
		return results.filter(val => val);
	}
}

export function transform_join() {
	return ({ data }: { data: string[] }): string => {
		return data.join(", ");
	}
}

interface TransformThumbnailProps {
	width: number;
	height: number;
}

export function transform_thumbnail({ width, height }: TransformThumbnailProps) {
	return function({ data }: { data: string }): ReactNode {
		const newUrl = data.replace(/\/upload\//, `/upload/c_fill,h_${height},w_${width}/`);
		
		const element = createElement(Image, {
			src : newUrl,
			className : "transform_thumbnail"
		}, null);

		return element;
	}
}