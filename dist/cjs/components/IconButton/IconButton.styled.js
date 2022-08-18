"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledIconButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.StyledIconButton = (0, styled_components_1["default"])(IconButton_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.MuiIconButton-root {\n    padding: 4px;\n\n    &.Mui-disabled {\n      color: ", ";\n      opacity: 0.5;\n    }\n  }\n\n  svg {\n    font-size: 24px;\n  }\n\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  &.MuiIconButton-root {\n    padding: 4px;\n\n    &.Mui-disabled {\n      color: ", ";\n      opacity: 0.5;\n    }\n  }\n\n  svg {\n    font-size: 24px;\n  }\n\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].colors.gray600, theme_1["default"].colors.almostBlack);
var templateObject_1;
