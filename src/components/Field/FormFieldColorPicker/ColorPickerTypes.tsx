import { FieldDefBase } from "@root/components/Field";

export interface ColorSelectedProps {
	color: any;
	displayColorPicker?: boolean;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type ColorData = string;

export type FieldDefColor = FieldDefBase<"color", unknown, ColorData>;
