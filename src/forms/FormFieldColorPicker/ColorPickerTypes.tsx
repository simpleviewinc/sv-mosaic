import { FieldDefBase } from "@root/components/Field";

export interface ColorSelectedProps {
	color: any;
	displayColorPicker?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

export type ColorData = string;

export type FieldDefColor = FieldDefBase<"color", unknown, ColorData>
