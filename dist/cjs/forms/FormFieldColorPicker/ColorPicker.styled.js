"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Cover = exports.PopOver = exports.ColorDiv = exports.ColorContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.ColorContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: 1px solid ", ";\n  margin-bottom: ", ";\n  opacity: ", ";\n  padding: 10px;\n  width: fit-content;\n"], ["\n  background: ", ";\n  border: 1px solid ", ";\n  margin-bottom: ", ";\n  opacity: ", ";\n  padding: 10px;\n  width: fit-content;\n"])), theme_1["default"].colors.gray100, theme_1["default"].colors.simplyGray, function (pr) { return (pr.displayColorPicker ? "8px" : 0); }, function (pr) { return (pr.disabled ? 0.5 : 1); });
exports.ColorDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  cursor: ", ";\n  height: 31px;\n  pointer-events: ", ";\n  width: 80px;\n"], ["\n  ", "\n  cursor: ", ";\n  height: 31px;\n  pointer-events: ", ";\n  width: 80px;\n"])), function (_a) {
    var color = _a.color;
    if (color.r !== undefined &&
        color.b !== undefined &&
        color.b !== undefined &&
        color.a !== undefined) {
        return "background: rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a, ");");
    }
    else {
        return "background: ".concat(color, ";");
    }
}, function (pr) { return (!pr.disabled ? "pointer" : "auto"); }, function (pr) { return (!pr.disabled ? "auto" : "none"); });
exports.PopOver = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n"], ["\n  position: absolute;\n  z-index: 2;\n"])));
exports.Cover = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n"], ["\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
