import { ReactElement } from "react";
import { LeftNavItemDef, LeftNavBlockProps } from "./LeftNavTypes";
interface Props {
    items: LeftNavItemDef[];
    showLabel?: boolean;
    openName?: string;
    onOpen: LeftNavBlockProps["onOpen"];
}
/** Renders an array of navigation items. */
declare function LeftNavItems(props: Props): ReactElement;
export default LeftNavItems;
