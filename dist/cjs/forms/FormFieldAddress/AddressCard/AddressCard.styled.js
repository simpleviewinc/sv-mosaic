"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ButtonsWrapper = exports.AddressTitle = exports.StyledAddressCard = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Utils
var theme_1 = __importDefault(require("../../../theme"));
exports.StyledAddressCard = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  background-color: ", ";\n  font-family: ", ";\n  min-height: 164px;\n  padding: 24px 16px 16px 24px;\n  width: 260px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  background-color: ", ";\n  font-family: ", ";\n  min-height: 164px;\n  padding: 24px 16px 16px 24px;\n  width: 260px;\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].colors.gray100, theme_1["default"].fontFamily);
exports.AddressTitle = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: ", ";\n  margin-bottom: 12px;\n"], ["\n  font-weight: ", ";\n  margin-bottom: 12px;\n"])), theme_1["default"].fontWeight.semiBold);
exports.ButtonsWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: flex-end;\n  display: flex;\n  margin-top: auto;\n\n  button:first-child {\n    border-right: 2px solid ", ";\n    padding-right: 16px;\n  }\n\n  button:last-child {\n    padding-left: 16px;\n  }\n"], ["\n  align-self: flex-end;\n  display: flex;\n  margin-top: auto;\n\n  button:first-child {\n    border-right: 2px solid ", ";\n    padding-right: 16px;\n  }\n\n  button:last-child {\n    padding-left: 16px;\n  }\n"])), theme_1["default"].colors.gray200);
var templateObject_1, templateObject_2, templateObject_3;
