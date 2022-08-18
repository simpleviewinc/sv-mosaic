"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var DrawerTopBar_1 = __importDefault(require("./DrawerTopBar"));
var DrawerBottom_1 = __importDefault(require("./DrawerBottom"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 600px;\n"], ["\n\twidth: 600px;\n"])));
function DrawerContent(props) {
    return (react_1["default"].createElement(StyledDiv, null,
        react_1["default"].createElement(DrawerTopBar_1["default"], { title: props.title, onSave: props.onSave, onApply: props.onApply, onClose: props.onClose, onCancel: props.onCancel }),
        react_1["default"].createElement(DrawerBottom_1["default"], { background: props.background }, props.children)));
}
exports["default"] = DrawerContent;
var templateObject_1;
