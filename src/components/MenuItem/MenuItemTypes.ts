import { MosaicObject, SvgIconComponent } from "@root/types";
import { ActionAdditional } from "../DataView";

export interface MenuItemProps {
	label: string | JSX.Element;
	color?: "red" | "blue" | "black";
	mIcon?: SvgIconComponent;
	disabled?: boolean;
	selected?: boolean;
	onClick(event?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
	attrs?: MosaicObject;
	name?: string;
	show?: ActionAdditional["show"];
}
