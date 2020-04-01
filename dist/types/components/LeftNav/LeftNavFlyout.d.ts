/// <reference types="react" />
import { LeftNavItemDef } from "./LeftNavTypes";
interface Props {
    parent: LeftNavItemDef;
    anchorEl: HTMLElement;
}
declare function LeftNavFlyout(props: Props): JSX.Element;
export default LeftNavFlyout;
