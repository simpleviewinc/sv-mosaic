import { MosaicObject, MosaicShow, SvgIconComponent } from "@root/types";

export interface MenuItemProps {
	label: string | JSX.Element;
	color?: "red" | "blue" | "black";
	mIcon?: SvgIconComponent;
	disabled?: boolean;
	selected?: boolean;
	onClick(event?: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>): void;
	attrs?: MosaicObject;
	name?: string;
	show?: MosaicShow;
}
