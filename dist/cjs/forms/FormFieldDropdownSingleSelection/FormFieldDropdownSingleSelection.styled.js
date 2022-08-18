"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledPopper = exports.SingleDropdownWrapper = exports.StyledDisabledDropdownText = exports.StyledAutocomplete = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
var theme_2 = require("../../theme");
// Components
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var Popper_1 = __importDefault(require("@mui/material/Popper"));
exports.StyledAutocomplete = (0, styled_components_1["default"])(Autocomplete_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .MuiFormControl-root .MuiInputBase-root {\n    background-color: ", ";\n  }\n\n  & .MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline {\n    border: ", ";\n    border-radius: 0px;\n  }\n\n  &\n    .MuiFormControl-root\n    .MuiInputBase-root.Mui-focused\n    .MuiOutlinedInput-notchedOutline {\n    border: solid 1px ", ";\n  }\n\n  .MuiAutocomplete-clearIndicator {\n    margin-right: 20px;\n  }\n\n  &.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*=\"MuiOutlinedInput-root\"] {\n    padding-right: 88px;\n  }\n\n  .MuiAutocomplete-popupIndicator, .MuiAutocomplete-popupIndicatorOpen {\n    color: ", ";\n\n    &:before {\n      background: none;\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 4px;\n      left: -12px;\n      right: -12px;\n      bottom: 4px;\n      border-right: ", ";\n      border-left: ", ";\n    }\n  }\n"], ["\n  & .MuiFormControl-root .MuiInputBase-root {\n    background-color: ", ";\n  }\n\n  & .MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline {\n    border: ", ";\n    border-radius: 0px;\n  }\n\n  &\n    .MuiFormControl-root\n    .MuiInputBase-root.Mui-focused\n    .MuiOutlinedInput-notchedOutline {\n    border: solid 1px ", ";\n  }\n\n  .MuiAutocomplete-clearIndicator {\n    margin-right: 20px;\n  }\n\n  &.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*=\"MuiOutlinedInput-root\"] {\n    padding-right: 88px;\n  }\n\n  .MuiAutocomplete-popupIndicator, .MuiAutocomplete-popupIndicatorOpen {\n    color: ", ";\n\n    &:before {\n      background: none;\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 4px;\n      left: -12px;\n      right: -12px;\n      bottom: 4px;\n      border-right: ", ";\n      border-left: ", ";\n    }\n  }\n"])), theme_1["default"].colors.gray100, function (pr) {
    return pr.error ? theme_1["default"].borders.error : theme_1["default"].borders.fieldGray;
}, theme_1["default"].colors.gray800, function (pr) { return (pr.error ? theme_1["default"].colors.red : theme_1["default"].colors.almostBlack); }, function (pr) { return pr.open ? theme_1["default"].borders.fieldGray : ""; }, function (pr) { return !pr.open ? theme_1["default"].borders.fieldGray : ""; });
exports.StyledDisabledDropdownText = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n  margin-top: 15px;\n"], ["\n  font-size: 16px;\n  color: ", ";\n  margin-top: 15px;\n"])), theme_1["default"].colors.assistiveText);
exports.SingleDropdownWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n\n  .MuiFormControl-fullWidth {\n    height: 51px;\n    width: ", ";\n  }\n\n  .MuiAutocomplete-paper {\n    width: ", "\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n\n  .MuiFormControl-fullWidth {\n    height: 51px;\n    width: ", ";\n  }\n\n  .MuiAutocomplete-paper {\n    width: ", "\n  }\n"])), function (pr) { return (pr.innerWidth ? pr.innerWidth : theme_2.Sizes.sm); }, function (pr) { return pr.innerWidth === theme_2.Sizes.xs ? theme_2.Sizes.sm : pr.innerWidth; });
exports.StyledPopper = (0, styled_components_1["default"])(Popper_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  z-index: 999999999 !important;\n  .MuiAutocomplete-listbox .MuiAutocomplete-option {\n    font-family: ", ";\n    font-size: 14px;\n    min-height: 40px;\n    color: ", ";\n\t\tbackground-color: white;\n\n    &[aria-selected='true'] {\n\t\t\tcolor: ", ";\n\t\t\tfont-weight: ", ";\n\t\t\tbackground-color: white;\n    }\n\n\t\t&[aria-selected=\"true\"].Mui-focused {\n\t\t\tbackground-color: ", ";\n\t\t}\n  }\n"], ["\n  z-index: 999999999 !important;\n  .MuiAutocomplete-listbox .MuiAutocomplete-option {\n    font-family: ", ";\n    font-size: 14px;\n    min-height: 40px;\n    color: ", ";\n\t\tbackground-color: white;\n\n    &[aria-selected='true'] {\n\t\t\tcolor: ", ";\n\t\t\tfont-weight: ", ";\n\t\t\tbackground-color: white;\n    }\n\n\t\t&[aria-selected=\"true\"].Mui-focused {\n\t\t\tbackground-color: ", ";\n\t\t}\n  }\n"])), theme_1["default"].fontFamily, theme_1["default"].colors.gray700, function (_a) {
    var value = _a.value;
    return value ? theme_1["default"].colors.gray700 : theme_1["default"].colors.black;
}, function (_a) {
    var value = _a.value;
    return value ? null : theme_1["default"].fontWeight.semiBold;
}, theme_1["default"].colors.grayHover);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
