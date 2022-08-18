import React from "react";
import Drawer from "../Drawer";
import DataViewViewDrawerContent from "./DataViewViewDrawerContent";
function DataViewViewDrawer(props) {
    return (React.createElement(Drawer, { open: props.open, onClose: props.onClose },
        React.createElement(DataViewViewDrawerContent, { onClose: props.onClose, onSave: props.onSave, onRemove: props.onRemove, onChange: props.onChange, onGetOptions: props.onGetOptions, allowSharedViewSave: props.allowSharedViewSave })));
}
export default DataViewViewDrawer;
