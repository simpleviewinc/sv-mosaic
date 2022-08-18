import * as React from "react";
import { useContext, useMemo } from "react";
import Drawer from "@mui/material/Drawer";
import { LeftNavContext } from "./LeftNavTypes";
// set aside the drawerProps so they are static and do not change between renders to prevent glitches with material-ui
const drawerProps = {
    anchor: "left",
    variant: "temporary",
    ModalProps: { disableEnforceFocus: true },
    PaperProps: { style: { borderRight: "0px", zIndex: "auto" } }
};
/** Renders the drawer used in all variants of the LeftNav. */
function LeftNavDrawer(props) {
    const leftNavContext = useContext(LeftNavContext);
    const drawerStyle = useMemo(() => ({
        zIndex: leftNavContext.zIndex
    }), [leftNavContext.zIndex]);
    return (React.createElement(Drawer, { ...drawerProps, open: props.open, onClose: props.onClose, style: drawerStyle }, props.children));
}
export default LeftNavDrawer;
