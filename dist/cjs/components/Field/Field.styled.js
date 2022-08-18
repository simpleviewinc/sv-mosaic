"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledFieldContainer = exports.StyledFieldWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.StyledFieldWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 20px;\n  background-color: ", ";\n  width: ", ";\n"], ["\n  font-family: ", ";\n  padding: 20px;\n  background-color: ", ";\n  width: ", ";\n"])), theme_1["default"].fontFamily, function (pr) {
    return pr.error ? theme_1["default"].colors.lightRed : "transparent";
}, function (pr) { return pr.size ? pr.size : "fit-content"; });
exports.StyledFieldContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n"])));
var templateObject_1, templateObject_2;
