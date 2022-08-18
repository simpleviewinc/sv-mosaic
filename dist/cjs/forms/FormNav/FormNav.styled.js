"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.IconWrapper = exports.FormNavWrapper = exports.FormNavRow = exports.MainLayout = exports.Section = exports.LinksWrapper = exports.NavItems = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.NavItems = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n  width: 100%;\n  white-space: nowrap;\n\n  @media (min-width: 1718px) {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow-y: scroll;\n  }\n"], ["\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n  width: 100%;\n  white-space: nowrap;\n\n  @media (min-width: 1718px) {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow-y: scroll;\n  }\n"])));
exports.LinksWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 40px;\n\n  &.highlight > a {\n    color: ", ";\n    border-bottom: 4px solid #FCB731;\n    font-weight: ", ";\n  }\n\n  a {\n    color: ", ";\n    display: inline-block;\n    font-family: ", ";\n    font-size: 14px;\n    text-align: center;\n    text-decoration: none;\n    padding-bottom: 12px;\n  }\n\n  @media (min-width: 1718px) {\n    margin-right: 0;\n\n    &.highlight > a {\n      border-bottom: none;\n      border-left: 4px solid #FCB731;\n  \t}\n\n    &.highlight {\n      background-color: ", ";\n    }\n\n    a {\n      border-bottom: 0px;\n      border-left: 4px solid transparent;\n      padding: 16px 0 16px 24px;\n    }\n  }\n"], ["\n  margin-right: 40px;\n\n  &.highlight > a {\n    color: ", ";\n    border-bottom: 4px solid #FCB731;\n    font-weight: ", ";\n  }\n\n  a {\n    color: ", ";\n    display: inline-block;\n    font-family: ", ";\n    font-size: 14px;\n    text-align: center;\n    text-decoration: none;\n    padding-bottom: 12px;\n  }\n\n  @media (min-width: 1718px) {\n    margin-right: 0;\n\n    &.highlight > a {\n      border-bottom: none;\n      border-left: 4px solid #FCB731;\n  \t}\n\n    &.highlight {\n      background-color: ", ";\n    }\n\n    a {\n      border-bottom: 0px;\n      border-left: 4px solid transparent;\n      padding: 16px 0 16px 24px;\n    }\n  }\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].fontWeight.medium, theme_1["default"].colors.gray600, theme_1["default"].fontFamily, theme_1["default"].colors.gray200);
exports.Section = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100vh;\n  padding-top: 130px;\n\n  @media (max-width: 1075px) {\n    padding-top: 210px;\n  }\n"], ["\n  height: 100vh;\n  padding-top: 130px;\n\n  @media (max-width: 1075px) {\n    padding-top: 210px;\n  }\n"])));
exports.MainLayout = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n\n  @media (max-width: 1718px) {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n\n  @media (max-width: 1718px) {\n    flex-direction: column;\n  }\n"])));
exports.FormNavRow = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0px;\n    pointer-events: none;\n    background-image: linear-gradient(to right, #ffffff00 -10%, #ffffff 100%);\n    width: 70px;\n  }\n\n  ", "\n\n  svg {\n    position: relative;\n    z-index: 2;\n  }\n\n  @media (min-width: 1718px) {\n    &:after {\n      content: none;\n    }\n\n    svg {\n      display: none;\n    }\n\n    height: 100%;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0px;\n    pointer-events: none;\n    background-image: linear-gradient(to right, #ffffff00 -10%, #ffffff 100%);\n    width: 70px;\n  }\n\n  ", "\n\n  svg {\n    position: relative;\n    z-index: 2;\n  }\n\n  @media (min-width: 1718px) {\n    &:after {\n      content: none;\n    }\n\n    svg {\n      display: none;\n    }\n\n    height: 100%;\n  }\n"])), function (pr) {
    return pr.scrollX !== 0 &&
        "\n      &:before {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        bottom: 0px;\n        pointer-events: none;\n        background-image: linear-gradient(to left, #ffffff00 -10%, #ffffff 100%);\n        width: 70px;\n      }\n    ";
});
exports.FormNavWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background: white;\n  overflow: hidden;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 106px;\n  width: 100%;\n\n  @media (min-width: 1718px) {\n    height: calc(100vh - 106px);\n    width: 293px;\n    border-right: 2px solid ", ";\n  }\n"], ["\n  background: white;\n  overflow: hidden;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 106px;\n  width: 100%;\n\n  @media (min-width: 1718px) {\n    height: calc(100vh - 106px);\n    width: 293px;\n    border-right: 2px solid ", ";\n  }\n"])), theme_1["default"].colors.gray200);
exports.IconWrapper = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 24px;\n"], ["\n  height: 24px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
