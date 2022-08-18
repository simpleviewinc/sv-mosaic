"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Drawer_1 = __importDefault(require("../Drawer"));
var DataViewViewSaveDrawerContent_1 = __importDefault(require("./DataViewViewSaveDrawerContent"));
function DataViewViewSaveDrawer(props) {
    return (react_1["default"].createElement(Drawer_1["default"], { open: props.open, onClose: props.onClose },
        react_1["default"].createElement(DataViewViewSaveDrawerContent_1["default"], { data: props.data, onClose: props.onClose, onSave: props.onSave, allowSharedViewSave: props.allowSharedViewSave })));
}
exports["default"] = DataViewViewSaveDrawer;
