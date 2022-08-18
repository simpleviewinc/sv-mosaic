"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledLabel = exports.StyledChip = exports.StyledDeletableChip = void 0;
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
var chipFont = "\n  font-size: 14px;\n  font-family: ".concat(theme_1["default"].fontFamily, ";\n  font-weight: ").concat(theme_1["default"].fontWeight.semiBold, ";\n");
exports.StyledDeletableChip = (0, styled_components_1["default"])(Chip_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.MuiChip-root {\n    background-color: ", ";\n    color: ", ";\n    max-width: 186px;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n    padding: 8px 16px;\n  }\n\n  .MuiChip-deleteIcon {\n    color: ", ";\n    margin: 0;\n    height: 14px;\n    width: 14px;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  & .MuiChip-label {\n    ", "\n    line-height: 16px;\n    margin-right: 12px;\n    padding: 0;\n  }\n"], ["\n  &.MuiChip-root {\n    background-color: ", ";\n    color: ", ";\n    max-width: 186px;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n    padding: 8px 16px;\n  }\n\n  .MuiChip-deleteIcon {\n    color: ", ";\n    margin: 0;\n    height: 14px;\n    width: 14px;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  & .MuiChip-label {\n    ", "\n    line-height: 16px;\n    margin-right: 12px;\n    padding: 0;\n  }\n"])), function (pr) { return pr.disabled ?
    theme_1["default"].colors.simplyGoldDisabled
    : theme_1["default"].colors.simplyGold; }, theme_1["default"].colors.almostBlack, function (pr) { return pr.disabled ?
    theme_1["default"].colors.simplyGoldDisabled
    : theme_1["default"].colors.simplyGoldHover; }, theme_1["default"].colors.simplyGold, theme_1["default"].colors.almostBlack, theme_1["default"].colors.almostBlack, chipFont);
exports.StyledChip = (0, styled_components_1["default"])(Chip_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n\n  &.MuiChip-root {\n    background-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n\n    padding: 8px 16px;\n  }\n\n  & .MuiChip-label {\n    ", "\n    line-height: 16px;\n    padding: 0;\n  }\n"], ["\n  color: ", ";\n\n  &.MuiChip-root {\n    background-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n\n    padding: 8px 16px;\n  }\n\n  & .MuiChip-label {\n    ", "\n    line-height: 16px;\n    padding: 0;\n  }\n"])), theme_1["default"].colors.almostBlack, function (pr) {
    if (pr.selected && !pr.disabled) {
        return theme_1["default"].colors.simplyGold;
    }
    else if (pr.selected && pr.disabled) {
        return theme_1["default"].colors.simplyGoldDisabled;
    }
    return theme_1["default"].colors.gray200;
}, function (pr) { return pr.selected ? theme_1["default"].colors.simplyGoldHover : theme_1["default"].colors.simplyGray; }, function (pr) { return pr.selected ? theme_1["default"].colors.simplyGold : theme_1["default"].colors.gray200; }, chipFont);
exports.StyledLabel = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  letter-spacing: 0.7px;\n  margin: 0;\n  max-width: 141px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  letter-spacing: 0.7px;\n  margin: 0;\n  max-width: 141px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
