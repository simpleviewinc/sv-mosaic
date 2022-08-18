"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledInstructionText = exports.InstructionTextWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.InstructionTextWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-left: ", ";\n  height: 51px;\n  margin-left: auto;\n  margin-top: ", ";\n  padding-left: 20px;\n  width: 400px;\n\n  &.instruction-text-right {\n\tdisplay: block;\n\twidth: 400px;\n\tmin-height: 51px;\n\tpadding-left: 10px;\n\tborder-left: 1px solid black;\n\tmargin-left: auto;\n  }\n\n  &.instruction-text-tooltip {\n\topacity: 0;\n\twidth: 0px;\n\tborder: none;\n\tmargin-left: auto;\n  }\n"], ["\n  border-left: ", ";\n  height: 51px;\n  margin-left: auto;\n  margin-top: ", ";\n  padding-left: 20px;\n  width: 400px;\n\n  &.instruction-text-right {\n\tdisplay: block;\n\twidth: 400px;\n\tmin-height: 51px;\n\tpadding-left: 10px;\n\tborder-left: 1px solid black;\n\tmargin-left: auto;\n  }\n\n  &.instruction-text-tooltip {\n\topacity: 0;\n\twidth: 0px;\n\tborder: none;\n\tmargin-left: auto;\n  }\n"])), theme_1["default"].borders.simplyGray, function (pr) { return pr.labelMargin === "16px" ? "52px" : "44px"; });
exports.StyledInstructionText = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  color: ", ";\n  display: -webkit-box;\n  font-family: ", ";\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n"], ["\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  color: ", ";\n  display: -webkit-box;\n  font-family: ", ";\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n"])), theme_1["default"].colors.assistiveText, theme_1["default"].fontFamily);
var templateObject_1, templateObject_2;
