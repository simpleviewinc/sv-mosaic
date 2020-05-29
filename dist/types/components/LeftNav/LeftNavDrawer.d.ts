import * as React from "react";
interface Props {
    open: boolean;
    onClose(): void;
    children?: React.ReactNode;
}
/** Renders the drawer used in all variants of the LeftNav. */
declare function LeftNavDrawer(props: Props): JSX.Element;
export default LeftNavDrawer;
