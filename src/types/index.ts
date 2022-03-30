import { SvgIconProps } from "@material-ui/core/SvgIcon";

/** Simple object with { label, value } strings */
export interface MosaicLabelValue {
	label: string
	value: string
}

/** Javascript object than can have any keys and any data */
export interface MosaicObject {
	[key: string]: unknown
}

export interface MosaicMIcon {
	(props: SvgIconProps): JSX.Element
}

export interface MosaicCallback {
	(): void
}