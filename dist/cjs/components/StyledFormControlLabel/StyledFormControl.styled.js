"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var StyledFormControlLabel = (0, styled_components_1["default"])(FormControlLabel_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: ", ";\n\n  &.MuiFormControlLabel-root {\n    margin: 0;\n  }\n\n  .MuiFormControlLabel-label {\n    color: ", ";\n    font-family: ", ";\n    font-size: 16px;\n  }\n\n  .MuiFormControlLabel-label.Mui-disabled {\n    color: ", ";\n  }\n"], ["\n  opacity: ", ";\n\n  &.MuiFormControlLabel-root {\n    margin: 0;\n  }\n\n  .MuiFormControlLabel-label {\n    color: ", ";\n    font-family: ", ";\n    font-size: 16px;\n  }\n\n  .MuiFormControlLabel-label.Mui-disabled {\n    color: ", ";\n  }\n"])), function (pr) { return (pr.disabled ? 0.5 : 1); }, theme_1["default"].colors.label, theme_1["default"].fontFamily, theme_1["default"].colors.label);
exports["default"] = StyledFormControlLabel;
var templateObject_1;
