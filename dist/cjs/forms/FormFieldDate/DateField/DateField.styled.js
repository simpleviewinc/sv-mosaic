"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DateTimeInputRow = exports.DateTimePickerWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.DateTimePickerWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
exports.DateTimeInputRow = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n\n  & > :not(:last-child) {\n    margin-right: 60px;\n  }\n"], ["\n  display: flex;\n\n  & > :not(:last-child) {\n    margin-right: 60px;\n  }\n"])));
var templateObject_1, templateObject_2;
