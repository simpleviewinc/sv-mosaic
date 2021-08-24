import * as React from "react";
import { ReactElement } from "react";
interface Props {
    open: boolean;
    onClose(): void;
    children?: React.ReactNode;
}
/** Renders the drawer used in all variants of the LeftNav. */
declare function LeftNavDrawer(props: Props): ReactElement;
export default LeftNavDrawer;
