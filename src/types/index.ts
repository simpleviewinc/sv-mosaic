import SvgIcon from "@mui/material/SvgIcon";

/** Simple object with { label, value } strings */
export interface MosaicLabelValue {
	label: string
	value: string
}

/** Javascript object than can have any keys and any data */
export interface MosaicObject {
	[key: string]: unknown
}

export interface MosaicCallback {
	(): void
}

export type SvgIconComponent = typeof SvgIcon;