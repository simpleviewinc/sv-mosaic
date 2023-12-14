import SvgIcon from "@mui/material/SvgIcon";
import { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";

/** Simple object with { label, value } strings */
export interface MosaicLabelValue {
	label: string
	value: string
}

/** Javascript object than can have any keys and any data */
export interface MosaicObject<T = unknown> {
	[key: string]: T
}

export interface MosaicCallback {
	(): void
}

export type SvgIconComponent = typeof SvgIcon;

export type MosaicShowResult = boolean;

export type MosaicShowCallback<T = unknown> = T extends object
	? (params: T) => MosaicShowResult
	: () => MosaicShowResult;

export type MosaicShow<T = unknown> = WithArrayOf<MosaicShowResult | MosaicShowCallback<T>>

export type MosaicGridConfig = string[][][];

export type MosaicCSSContainer = {
	name?: keyof typeof CONTAINERS;
	minWidth: keyof typeof BREAKPOINTS
}

// Util
export type PrependDollar<K extends string | number | symbol > =
	K extends string | number ? `$${K}` : never;

export type TransientProps<T, K extends keyof T = keyof T> = {
    [P in K as PrependDollar<P>]: T[P];
};

export type WithArrayOf<T> = T | T[];
