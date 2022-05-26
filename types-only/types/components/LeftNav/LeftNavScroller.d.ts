import * as React from "react";
import { ReactElement } from "react";
import { MosaicObject } from "../../types";
interface Props {
    className?: string;
    children?: React.ReactNode;
    attrs?: MosaicObject;
}
declare function LeftNavScroller(props: Props): ReactElement;
export default LeftNavScroller;
