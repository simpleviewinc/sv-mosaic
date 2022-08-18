"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Drawer_1 = __importDefault(require("../Drawer"));
var DataViewColumnDrawerContent_1 = __importDefault(require("./DataViewColumnDrawerContent"));
function DataViewColumnDrawer(props) {
    return (react_1["default"].createElement(Drawer_1["default"], { open: props.open, onClose: props.onClose },
        react_1["default"].createElement(DataViewColumnDrawerContent_1["default"], { columns: props.columns, allColumns: props.allColumns, onChange: props.onChange, onClose: props.onClose })));
}
exports["default"] = DataViewColumnDrawer;
