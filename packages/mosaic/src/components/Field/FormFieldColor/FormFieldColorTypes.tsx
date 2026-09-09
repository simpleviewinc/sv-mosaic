import type { FieldDefBase } from "@root/components/Field";

export interface ColorSelectedProps {
	color: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	id?: string;
	"aria-describedby"?: string;
}

export type ColorData = string;

export type FieldDefColor = FieldDefBase<"color", unknown>;
