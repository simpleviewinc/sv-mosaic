"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledHelperText = exports.StyledCheckbox = exports.StyledFormControlLabel = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var theme_1 = __importDefault(require("../../theme"));
exports.StyledFormControlLabel = (0, styled_components_1["default"])(FormControlLabel_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.MuiFormControlLabel-root {\n    margin-left: 0px;\n    margin-right: 0px;\n    align-items: flex-start;\n\tcolor:  ", ";\n  }\n\n  & > span.checked,\n  & > span.MuiCheckbox-indeterminate {\n    color: ", ";\n    opacity: ", ";\n  }\n\n  & .MuiFormControlLabel-label {\n    font-family: ", ";\n    max-width: 414px;\n    margin-top: 7px;\n  }\n"], ["\n  &.MuiFormControlLabel-root {\n    margin-left: 0px;\n    margin-right: 0px;\n    align-items: flex-start;\n\tcolor:  ", ";\n  }\n\n  & > span.checked,\n  & > span.MuiCheckbox-indeterminate {\n    color: ", ";\n    opacity: ", ";\n  }\n\n  & .MuiFormControlLabel-label {\n    font-family: ", ";\n    max-width: 414px;\n    margin-top: 7px;\n  }\n"])), function (pr) { return pr.disabled ? theme_1["default"].colors.labelDisabled : theme_1["default"].colors.almostBlack; }, theme_1["default"].colors.simplyGold, function (pr) { return (pr.disabled ? "50%" : "100%"); }, theme_1["default"].fontFamily);
exports.StyledCheckbox = (0, styled_components_1["default"])(Checkbox_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &.custom-checkbox {\n    padding: 10px;\n    margin-right: 2px;\n  }\n\n  & > span > svg {\n    font-size: 20px;\n    border-color: ", ";\n  }\n"], ["\n  &.custom-checkbox {\n    padding: 10px;\n    margin-right: 2px;\n  }\n\n  & > span > svg {\n    font-size: 20px;\n    border-color: ", ";\n  }\n"])), theme_1["default"].colors.almostBlack);
exports.StyledHelperText = (0, styled_components_1["default"])(FormHelperText_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &.MuiFormHelperText-root {\n    margin-top: 16px;\n    margin-left: 42px;\n    color: ", ";\n    font-size: 14px;\n  }\n"], ["\n  &.MuiFormHelperText-root {\n    margin-top: 16px;\n    margin-left: 42px;\n    color: ", ";\n    font-size: 14px;\n  }\n"])), theme_1["default"].colors.assistiveText);
var templateObject_1, templateObject_2, templateObject_3;
