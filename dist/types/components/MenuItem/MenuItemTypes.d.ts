/// <reference types="react" />
import { MosaicMIcon, MosaicObject } from "../../types";
export interface MenuItemProps {
    label: string | JSX.Element;
    color?: "red" | "blue";
    disabled?: boolean;
    selected?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    mIcon?: MosaicMIcon;
    attrs?: MosaicObject;
}
