"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledDisabledForm = exports.StyledForm = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledForm = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\twidth: 100%;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\twidth: 100%;\n"])));
exports.StyledDisabledForm = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: black;\n\tz-index: 1000;\n\tdisplay: block;\n\tposition: absolute;\n\topacity: 30%;\n"], ["\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: black;\n\tz-index: 1000;\n\tdisplay: block;\n\tposition: absolute;\n\topacity: 30%;\n"])));
var templateObject_1, templateObject_2;
