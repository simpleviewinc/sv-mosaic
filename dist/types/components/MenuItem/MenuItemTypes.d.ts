/// <reference types="react" />
import { MosaicObject, SvgIconComponent } from "@root/types";
import { ActionAdditional } from "../DataView";
export interface MenuItemProps {
    name?: string;
    label: string | JSX.Element;
    color?: "red" | "blue";
    disabled?: boolean;
    selected?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    mIcon?: SvgIconComponent;
    attrs?: MosaicObject;
    show?: ActionAdditional["show"];
}
