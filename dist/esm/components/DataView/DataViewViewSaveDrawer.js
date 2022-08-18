import React from "react";
import Drawer from "../Drawer";
import DataViewViewSaveDrawerContent from "./DataViewViewSaveDrawerContent";
function DataViewViewSaveDrawer(props) {
    return (React.createElement(Drawer, { open: props.open, onClose: props.onClose },
        React.createElement(DataViewViewSaveDrawerContent, { data: props.data, onClose: props.onClose, onSave: props.onSave, allowSharedViewSave: props.allowSharedViewSave })));
}
export default DataViewViewSaveDrawer;
