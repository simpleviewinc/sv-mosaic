"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledInputWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledInputWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  & .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {\n    padding: 16px;\n  }\n\n  &\n    .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']\n    .MuiAutocomplete-input:first-child,\n  & .MuiAutocomplete-input,\n  & .MuiOutlinedInput-inputAdornedEnd,\n  & .MuiOutlinedInput-input,\n  & .MuiInputBase-input {\n    padding: 0px;\n  }\n\n  & .MuiOutlinedInput-input {\n    height: 19px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  & .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {\n    padding: 16px;\n  }\n\n  &\n    .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']\n    .MuiAutocomplete-input:first-child,\n  & .MuiAutocomplete-input,\n  & .MuiOutlinedInput-inputAdornedEnd,\n  & .MuiOutlinedInput-input,\n  & .MuiInputBase-input {\n    padding: 0px;\n  }\n\n  & .MuiOutlinedInput-input {\n    height: 19px;\n  }\n"])));
var templateObject_1;
