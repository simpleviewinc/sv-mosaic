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
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& {\n\t\tflex: 1;\n\t\tpadding: 12px;\n\t}\n\t\n\t&.background-gray {\n\t\tbackground: #FAFBFC;\n\t}\n"], ["\n\t& {\n\t\tflex: 1;\n\t\tpadding: 12px;\n\t}\n\t\n\t&.background-gray {\n\t\tbackground: #FAFBFC;\n\t}\n"])));
function DrawerBottom(props) {
    return (react_1["default"].createElement(StyledDiv, { className: "\n\t\t\t".concat(props.background ? "background-".concat(props.background) : "", "\n\t\t") }, props.children));
}
exports["default"] = DrawerBottom;
var templateObject_1;
