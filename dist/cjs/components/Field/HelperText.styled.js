"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledText = exports.StyledErrorIcon = exports.ErrorTextWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var ErrorOutline_1 = __importDefault(require("@mui/icons-material/ErrorOutline"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
// Theme
var theme_1 = __importDefault(require("../../theme"));
exports.ErrorTextWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: 18px;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin-top: 18px;\n"])));
exports.StyledErrorIcon = (0, styled_components_1["default"])(ErrorOutline_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &.MuiSvgIcon-root {\n    font-size: 16px;\n    color: ", ";\n    margin-right: 8px;\n  }\n"], ["\n  &.MuiSvgIcon-root {\n    font-size: 16px;\n    color: ", ";\n    margin-right: 8px;\n  }\n"])), theme_1["default"].colors.red);
exports.StyledText = (0, styled_components_1["default"])(FormHelperText_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &.MuiFormHelperText-root {\n    color: ", ";\n    font-family: ", ";\n    font-size: 12px;\n    margin-top: 18px;\n  }\n\n  &.MuiFormHelperText-root.Mui-error {\n    color: ", ";\n    margin: 0;\n  }\n"], ["\n  &.MuiFormHelperText-root {\n    color: ", ";\n    font-family: ", ";\n    font-size: 12px;\n    margin-top: 18px;\n  }\n\n  &.MuiFormHelperText-root.Mui-error {\n    color: ", ";\n    margin: 0;\n  }\n"])), theme_1["default"].colors.assistiveText, theme_1["default"].fontFamily, theme_1["default"].colors.red);
var templateObject_1, templateObject_2, templateObject_3;
