"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledMenu = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
// Material UI
var Menu_1 = __importDefault(require("@mui/material/Menu"));
exports.StyledMenu = (0, styled_components_1["default"])(Menu_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .MuiPaper-root {\n    border: 1px solid ", ";\n    box-shadow: 0px 1px 3px #1a1a1a26;\n    color: ", ";\n\n    & .MuiMenuItem-root {\n      font-family: ", ";\n      font-size: 14px;\n      padding-bottom: 8px;\n      padding-top: 8px;\n    }\n  }\n"], ["\n  & .MuiPaper-root {\n    border: 1px solid ", ";\n    box-shadow: 0px 1px 3px #1a1a1a26;\n    color: ", ";\n\n    & .MuiMenuItem-root {\n      font-family: ", ";\n      font-size: 14px;\n      padding-bottom: 8px;\n      padding-top: 8px;\n    }\n  }\n"])), theme_1["default"].colors.gray200, theme_1["default"].colors.label, theme_1["default"].fontFamily);
var templateObject_1;
