"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledRadioGroup = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
exports.StyledRadioGroup = (0, styled_components_1["default"])(RadioGroup_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: -12px;\n"], ["\n  margin-left: -12px;\n"])));
var templateObject_1;
