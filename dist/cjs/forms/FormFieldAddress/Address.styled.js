"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FlexContainer = exports.AddAddressWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.AddAddressWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  min-height: 204px;\n  width: 300px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  min-height: 204px;\n  width: 300px;\n"])), theme_1["default"].colors.gray200);
exports.FlexContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n\n  & > :not(:last-child) {\n    margin-right: 25px;\n  }\n\n  & > * {\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 1440px) {\n    & > :not(:last-child) {\n      margin-right: 80px;\n    }\n  }\n\n  @media (max-width: ", ") {\n    & > :not(:last-child) {\n      margin-bottom: 20px;\n      margin-right: 0px;\n    }\n    display: flex;\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n\n  & > :not(:last-child) {\n    margin-right: 25px;\n  }\n\n  & > * {\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 1440px) {\n    & > :not(:last-child) {\n      margin-right: 80px;\n    }\n  }\n\n  @media (max-width: ", ") {\n    & > :not(:last-child) {\n      margin-bottom: 20px;\n      margin-right: 0px;\n    }\n    display: flex;\n    flex-direction: column;\n  }\n"])), theme_1["default"].breakpoints.mobile);
var templateObject_1, templateObject_2;
