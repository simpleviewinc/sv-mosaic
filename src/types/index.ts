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
export type MosaicShowCallback<T> = (params: T) => MosaicShowResult;

export type MosaicShow<T = unknown> = MosaicShowResult | MosaicShowCallback<T> | Array<MosaicShowResult | MosaicShowCallback<T>>

export type MosaicGridConfig = string[][][];

export type MosaicCSSContainer = {
	name?: keyof typeof CONTAINERS;
	minWidth: keyof typeof BREAKPOINTS
}

// Util
export type PrependDollar<K extends string | number | symbol > =
	K extends string | number ? `$${K}` : never;

export type StyledProps<T, K extends keyof T> = {
    [P in K as PrependDollar<P>]: T[P];
};
