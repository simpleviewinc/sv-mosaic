"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Drawer_1 = __importDefault(require("../Drawer"));
var DataViewViewDrawerContent_1 = __importDefault(require("./DataViewViewDrawerContent"));
function DataViewViewDrawer(props) {
    return (react_1["default"].createElement(Drawer_1["default"], { open: props.open, onClose: props.onClose },
        react_1["default"].createElement(DataViewViewDrawerContent_1["default"], { onClose: props.onClose, onSave: props.onSave, onRemove: props.onRemove, onChange: props.onChange, onGetOptions: props.onGetOptions, allowSharedViewSave: props.allowSharedViewSave })));
}
exports["default"] = DataViewViewDrawer;
