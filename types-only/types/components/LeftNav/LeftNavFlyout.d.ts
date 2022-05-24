import { ReactElement } from "react";
import { LeftNavItemDef } from "./LeftNavTypes";
interface Props {
    parent: LeftNavItemDef;
    anchorEl: HTMLElement;
}
declare function LeftNavFlyout(props: Props): ReactElement;
export default LeftNavFlyout;
