import SvgIcon from "@mui/material/SvgIcon";
import { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";

/** Simple object with { label, value } strings */
export interface MosaicLabelValue {
	label: string;
	value: string;
}

/** Javascript object than can have any keys and any data */
export interface MosaicObject<T = unknown> {
	[key: string]: T;
}

export interface MosaicCallback {
	(): void;
}

export type SvgIconComponent = typeof SvgIcon;

export type MosaicToggleResult = boolean;

export type MosaicToggleCallback<T = unknown> = T extends object
	? (params: T) => MosaicToggleResult
	: () => MosaicToggleResult;

export type MosaicToggle<T = unknown> = WithArrayOf<MosaicToggleResult | MosaicToggleCallback<T>>;

export type MosaicGridConfig<T = string> = T[][][];

export type MosaicCSSContainer = {
	name?: keyof typeof CONTAINERS;
	minWidth: keyof typeof BREAKPOINTS;
};

// Util
export type PrependDollar<K extends string | number | symbol > =
	K extends string | number ? `$${K}` : never;

export type TransientProps<T, K extends keyof T = keyof T> = {
	[P in K as PrependDollar<P>]: T[P];
};

export type WithArrayOf<T> = T | T[];

// Guards
export function isLabelValue(input: unknown): input is MosaicLabelValue {
	if (input === null || typeof input !== "object") {
		return false;
	}

	if (!("value" in input) || !("label" in input)){
		return false;
	}

	return true;
}
