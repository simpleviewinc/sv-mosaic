import * as React from "react";
import { MosaicObject } from "../../types";
import { LeftNavItemDef } from "./LeftNavTypes";
interface Props {
    item: LeftNavItemDef;
    showLabel?: boolean;
    attrs?: MosaicObject;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
