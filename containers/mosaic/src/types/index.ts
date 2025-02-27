import type { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";
import type { ReactElement, ReactNode } from "react";

/** Simple object with { label, value } strings */
export interface MosaicLabelValue {
	label: string;
	value: string;
}

/** Javascript object than can have any keys and any data */
export type MosaicObject<T = unknown> = Record<string, T>;

export type MosaicCallback = () => void;

// Using a proper type for SvgIconComponent gets VSCode TS
// server into a mess. I've tried
// - `OverridableComponent<IconTypeMap> & { muiName: string }`
// - `typeof SvgIcon`
// And both cause TS analysis to lose it, eventually throwing a
// "Excessive complexity comparing types" error.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SvgIconComponent = any;

export type MosaicToggleResult = boolean;

export type MosaicToggleCallback<T = unknown> = T extends object
	? (params: T) => MosaicToggleResult
	: () => MosaicToggleResult;

export type MosaicToggle<T = unknown> = WithArrayOf<MosaicToggleResult | MosaicToggleCallback<T>>;

export type MosaicGridConfig<T = string> = T[][][];

export interface MosaicCSSContainer {
	name?: keyof typeof CONTAINERS;
	minWidth: keyof typeof BREAKPOINTS;
}

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

	if (!("value" in input) || !("label" in input)) {
		return false;
	}

	return true;
}

export function isReactElement(elem: unknown): elem is ReactElement {
	return typeof elem === "object" && elem !== null && "key" in elem;
}

export function isReactNode(node: unknown): node is ReactNode {
	const type = typeof node;

	return (
		type === "string" ||
		type === "number" ||
		type === "boolean" ||
		node === null ||
		node === undefined ||
		type === "object" && isReactElement(node)
	);
}
