import React from "react";
import Drawer from "../Drawer";
import DataViewColumnDrawerContent from "./DataViewColumnDrawerContent";
function DataViewColumnDrawer(props) {
    return (React.createElement(Drawer, { open: props.open, onClose: props.onClose },
        React.createElement(DataViewColumnDrawerContent, { columns: props.columns, allColumns: props.allColumns, onChange: props.onChange, onClose: props.onClose })));
}
export default DataViewColumnDrawer;
