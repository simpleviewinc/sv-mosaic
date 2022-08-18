"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.MessageWrapper = exports.StyledCloseIcon = exports.ActionWrapper = exports.ContentWrapper = exports.StyledSnackbar = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.StyledSnackbar = (0, styled_components_1["default"])(Snackbar_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .MuiIconButton-root {\n    height: 24px;\n    width: 24px;\n  }\n\n  &.MuiSnackbar-anchorOriginBottomRight {\n    bottom: 10px;\n  }\n\n  &.MuiSnackbar-root {\n    left: 10px;\n    right: 10px;\n  }\n\n  @media (min-width: ", ") {\n    &.MuiSnackbar-anchorOriginBottomRight {\n      bottom: 40px;\n      left: auto;\n      right: 40px;\n    }\n  }\n"], ["\n  .MuiIconButton-root {\n    height: 24px;\n    width: 24px;\n  }\n\n  &.MuiSnackbar-anchorOriginBottomRight {\n    bottom: 10px;\n  }\n\n  &.MuiSnackbar-root {\n    left: 10px;\n    right: 10px;\n  }\n\n  @media (min-width: ", ") {\n    &.MuiSnackbar-anchorOriginBottomRight {\n      bottom: 40px;\n      left: auto;\n      right: 40px;\n    }\n  }\n"])), theme_1["default"].breakpoints.mobile);
exports.ContentWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: flex-start;\n  background-color: ", ";\n  border-radius: 2px;\n  box-shadow: 0px 2px 6px #1a1a1a40;\n  display: flex;\n  font-family: ", ";\n  max-width: 400px;\n  padding: 16px 16px;\n\n  .MuiSvgIcon-root {\n    color: ", ";\n    font-size: 20px;\n  }\n"], ["\n  align-items: flex-start;\n  background-color: ", ";\n  border-radius: 2px;\n  box-shadow: 0px 2px 6px #1a1a1a40;\n  display: flex;\n  font-family: ", ";\n  max-width: 400px;\n  padding: 16px 16px;\n\n  .MuiSvgIcon-root {\n    color: ", ";\n    font-size: 20px;\n  }\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].fontFamily, theme_1["default"].colors.blueTeal);
exports.ActionWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 16px;\n"], ["\n  margin-top: 16px;\n"])));
exports.StyledCloseIcon = (0, styled_components_1["default"])(Close_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &.MuiSvgIcon-root {\n    color: ", ";\n    font-size: 16px;\n  }\n"], ["\n  &.MuiSvgIcon-root {\n    color: ", ";\n    font-size: 16px;\n  }\n"])), theme_1["default"].colors.simplyGray);
exports.MessageWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 8px;\n\n  p {\n    color: white;\n    margin: 0;\n  }\n"], ["\n  margin-left: 8px;\n\n  p {\n    color: white;\n    margin: 0;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
