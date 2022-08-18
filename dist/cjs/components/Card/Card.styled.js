"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledHr = exports.ContentWrapper = exports.BottomActionWrapper = exports.TitleWrapper = exports.TitleBar = exports.CardWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.CardWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tborder: 2px solid ", ";\n\tfont-family: ", ";\n\twidth: 100%;\n"], ["\n\tborder: 2px solid ", ";\n\tfont-family: ", ";\n\twidth: 100%;\n"])), theme_1["default"].colors.gray200, theme_1["default"].fontFamily);
exports.TitleBar = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\talign-items: center;\n  background: ", ";\n\tdisplay: flex;\n\theight: 56px;\n\tjustify-content: space-between;\n\tpadding: 0 16px;\n"], ["\n\talign-items: center;\n  background: ", ";\n\tdisplay: flex;\n\theight: 56px;\n\tjustify-content: space-between;\n\tpadding: 0 16px;\n"])), theme_1["default"].colors.gray200);
exports.TitleWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n"])));
exports.BottomActionWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\talign-items: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n"], ["\n\talign-items: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n"])));
exports.ContentWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tpadding: 0 16px;\n"], ["\n\tpadding: 0 16px;\n"])));
exports.StyledHr = styled_components_1["default"].hr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tborder-top: 1px solid ", ";\n"], ["\n\tborder-top: 1px solid ", ";\n"])), theme_1["default"].colors.gray200);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
