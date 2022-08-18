"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledErrorIcon = exports.ErrorTextWrapper = exports.StyledText = exports.StyledCheckboxList = exports.FieldWrapper = exports.LabelWrapper = exports.StyledWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Components
var CheckboxList_1 = __importDefault(require("../../components/CheckboxList"));
// Material UI
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var ErrorOutline_1 = __importDefault(require("@mui/icons-material/ErrorOutline"));
// Utils
var theme_1 = __importDefault(require("../../theme/theme"));
exports.StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.LabelWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .MuiInputLabel-root {\n    font-family: inherit;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  .MuiFormLabel-asterisk {\n    color: ", ";\n  }\n"], ["\n  .MuiInputLabel-root {\n    font-family: inherit;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  .MuiFormLabel-asterisk {\n    color: ", ";\n  }\n"])), function (pr) {
    return pr.disabled ? theme_1["default"].colors.labelDisabled : theme_1["default"].colors.almostBlack;
}, theme_1["default"].colors.red);
exports.FieldWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 20px;\n  background-color: ", ";\n"], ["\n  font-family: ", ";\n  padding: 20px;\n  background-color: ", ";\n"])), theme_1["default"].fontFamily, function (pr) {
    return pr.error ? theme_1["default"].colors.lightRed : "transparent";
});
exports.StyledCheckboxList = (0, styled_components_1["default"])(CheckboxList_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &.MuiFormGroup-root {\n    margin-left: -12px;\n  }\n\n  .MuiFormControlLabel-label {\n    color: ", ";\n  }\n"], ["\n  &.MuiFormGroup-root {\n    margin-left: -12px;\n  }\n\n  .MuiFormControlLabel-label {\n    color: ", ";\n  }\n"])), theme_1["default"].colors.label);
exports.StyledText = (0, styled_components_1["default"])(FormHelperText_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &.MuiFormHelperText-root {\n    color: ", ";\n    font-size: ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n\n  &.MuiFormHelperText-root.Mui-error {\n    color: ", ";\n  }\n"], ["\n  &.MuiFormHelperText-root {\n    color: ", ";\n    font-size: ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n\n  &.MuiFormHelperText-root.Mui-error {\n    color: ", ";\n  }\n"])), theme_1["default"].colors.assistiveText, function (pr) { return (pr.error ? "12px" : "14px"); }, function (pr) { return (!pr.error ? "8px" : null); }, function (pr) { return (!pr.error ? "8px" : null); }, theme_1["default"].colors.red);
exports.ErrorTextWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  margin-top: 8px;\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  margin-top: 8px;\n"])), theme_1["default"].colors.red);
exports.StyledErrorIcon = (0, styled_components_1["default"])(ErrorOutline_1["default"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t&.MuiSvgIcon-root {\n\t\tfont-size: 16px;\n\t\tmargin-right: 8px;\n\t}\n"], ["\n\t&.MuiSvgIcon-root {\n\t\tfont-size: 16px;\n\t\tmargin-right: 8px;\n\t}\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
