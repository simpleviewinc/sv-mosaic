"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledRadioButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var theme_1 = __importDefault(require("../../theme"));
exports.StyledRadioButton = (0, styled_components_1["default"])(Radio_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.MuiRadio-colorPrimary {\n    color: ", ";\n\n    &.Mui-checked {\n      color: ", ";\n    }\n  }\n\n  &.MuiRadio-colorPrimary,\n  &.MuiRadio-colorPrimary.Mui-checked {\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  &.MuiRadio-root {\n    margin-right: 2px;\n    padding: 10px;\n  }\n\n  & svg {\n    height: 20px;\n    width: 20px;\n  }\n"], ["\n  &.MuiRadio-colorPrimary {\n    color: ", ";\n\n    &.Mui-checked {\n      color: ", ";\n    }\n  }\n\n  &.MuiRadio-colorPrimary,\n  &.MuiRadio-colorPrimary.Mui-checked {\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  &.MuiRadio-root {\n    margin-right: 2px;\n    padding: 10px;\n  }\n\n  & svg {\n    height: 20px;\n    width: 20px;\n  }\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].colors.simplyGold, theme_1["default"].colors.grayHover);
var templateObject_1;
