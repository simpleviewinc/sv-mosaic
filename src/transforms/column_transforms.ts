import { get, map } from "lodash";
import { format } from "date-fns";
import { createElement, ReactNode } from "react";
import { MosaicObject } from "../types";
import { DataViewColumnTransform } from "../components/DataView";

import Image from "@root/components/Image";

export function transform_boolean(): DataViewColumnTransform<boolean> {
	return function({ data }): string {
		if (data === true) {
			return "Yes";
		} else {
			return "No";
		}
	}
}

export function transform_dateFormat(): DataViewColumnTransform<Date> {
	return function({ data }): string {
		return format(data, "M/d/yyyy");
	}
}

export function transform_get(path: string | string[]): DataViewColumnTransform<MosaicObject> {
	return function({ data }): ReactNode {
		return get(data, path);
	}
}

export function transform_mapGet(path: string | string[]): DataViewColumnTransform<MosaicObject[]> {
	return ({ data }): ReactNode => {
		const results = map(data, (obj) => {
			return get(obj, path);
		});
		
		// filters out undefined, null values
		return results.filter(val => val);
	}
}

export function transform_join(): DataViewColumnTransform<string[]> {
	return ({ data }): string => {
		return data.join(", ");
	}
}

interface TransformThumbnailProps {
	width: number;
	height: number;
}

export function transform_thumbnail({ width, height }: TransformThumbnailProps): DataViewColumnTransform<string> {
	return function({ data }): ReactNode {
		const newUrl = data.replace(/\/upload\//, `/upload/c_fill,h_${height},w_${width}/`);
		
		const element = createElement(Image, {
			src : newUrl,
			className : "transform_thumbnail"
		}, null);

		return element;
	}
}