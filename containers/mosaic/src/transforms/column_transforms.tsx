import get from "lodash/get";
import map from "lodash/map";
import format from "date-fns/format";
import { createElement, ReactNode } from "react";
import { MosaicLabelValue, MosaicObject } from "../types";
import DataView, { DataViewColumn, DataViewColumnTransform } from "../components/DataView";
import Chip from "@root/components/Chip";
import { ChipsWrapper, ColorValue } from "@root/components/Content/Content.styled";
import ColorSelected from "@root/components/Field/FormFieldColor/ColorSelected";
import Image from "@root/components/Image";
import React from "react";
import { DATE_FORMAT_SHORT } from "@root/constants";
import styled from "styled-components";

export function transform_boolean(): DataViewColumnTransform<boolean> {
	return function({ data }): string {
		if (data === true) {
			return "Yes";
		} else {
			return "No";
		}
	};
}

export function transform_dateFormat(): DataViewColumnTransform<Date> {
	return function({ data }): string {
		return format(data, DATE_FORMAT_SHORT);
	};
}

export function transform_get(path: string | string[]): DataViewColumnTransform<MosaicObject> {
	return function({ data }): ReactNode {
		return get(data, path);
	};
}

export function transform_mapGet(path: string | string[]): DataViewColumnTransform<MosaicObject[]> {
	return ({ data }): ReactNode => {
		const results = map(data, (obj) => {
			return get(obj, path);
		});

		// filters out undefined, null values
		return results.filter(val => val);
	};
}

export function transform_join(): DataViewColumnTransform<string[]> {
	return ({ data }): string => {
		return data.join(", ");
	};
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
			className : "transform_thumbnail",
		}, null);

		return element;
	};
}

export function transform_chips(): DataViewColumnTransform<MosaicLabelValue[]> {
	return function Chips({ data }: { data: MosaicLabelValue[] }): ReactNode {
		return (
			<ChipsWrapper>
				{data?.map((chip) => (
					<Chip
						key={`${chip?.label}-${chip?.value}`}
						label={chip?.label}
					/>
				))}
			</ChipsWrapper>
		);
	};
}

export function transform_colorPicker(): DataViewColumnTransform<string> {
	return function Color({ data }: { data: string }): ReactNode {
		return (
			<div>
				<ColorValue>{data}</ColorValue>
				<ColorSelected
					color={data}
				/>
			</div>
		);
	};
}

const DataViewWrapper = styled.div`
	& .viewContainer {
		padding: 0;
	}
`;

export function transform_dataview({ columns }: { columns: DataViewColumn[] }): DataViewColumnTransform {
	return function TransformedDataView({ data }: { data: any }): ReactNode {
		return (
			<DataViewWrapper>
				<DataView
					data={data}
					columns={columns}
				/>
			</DataViewWrapper>
		);
	};
}
