"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TrHead = exports.StyledTr = exports.AddElementContainer = exports.StyledIconButton = exports.Container = exports.AddButton = exports.TdDrag = exports.Td = exports.StyledTable = exports.ThDrag = exports.Th = exports.THead = exports.TableContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importStar(require("../../theme"));
// Components
var Button_1 = __importDefault(require("../../components/Button"));
exports.TableContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  border: 2px solid ", ";\n  border-radius: 2px;\n  max-width: 1080px;\n  padding-top: 16px;\n"], ["\n  background-color: white;\n  border: 2px solid ", ";\n  border-radius: 2px;\n  max-width: 1080px;\n  padding-top: 16px;\n"])), theme_1["default"].colors.gray200);
exports.THead = styled_components_1["default"].thead(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  z-index: 2;\n"], ["\n  position: sticky;\n  top: 0;\n  z-index: 2;\n"])));
exports.Th = styled_components_1["default"].th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: ", ";\n  padding: 16px 30px 16px 8px;\n  text-align: left;\n"], ["\n  color: ", ";\n  font-weight: ", ";\n  padding: 16px 30px 16px 8px;\n  text-align: left;\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].fontWeight.medium);
exports.ThDrag = styled_components_1["default"].th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 1%;\n"], ["\n  width: 1%;\n"])));
exports.StyledTable = styled_components_1["default"].table(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-collapse: collapse;\n  font-family: ", ";\n  width: 100%;\n\n  tr td:nth-child(2) {\n    width: 1%;\n    white-space: nowrap;\n  }\n\n  td:nth-child(3) {\n    color: ", ";\n    font-weight: ", ";\n  }\n"], ["\n  border-collapse: collapse;\n  font-family: ", ";\n  width: 100%;\n\n  tr td:nth-child(2) {\n    width: 1%;\n    white-space: nowrap;\n  }\n\n  td:nth-child(3) {\n    color: ", ";\n    font-weight: ", ";\n  }\n"])), theme_1["default"].fontFamily, theme_1["default"].colors.almostBlack, theme_1["default"].fontWeight.medium);
exports.Td = styled_components_1["default"].td(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 16px 30px 16px 8px;\n  min-width: 72px;\n  width: 312px;\n  max-width: 312px;\n"], ["\n  padding: 16px 30px 16px 8px;\n  min-width: 72px;\n  width: 312px;\n  max-width: 312px;\n"])));
exports.TdDrag = styled_components_1["default"].td(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 16px 14px 16px 8px;\n"], ["\n  padding: 16px 14px 16px 8px;\n"])));
exports.AddButton = (0, styled_components_1["default"])(Button_1["default"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-left: 8px;\n  margin-bottom: 16px;\n"], ["\n  margin-left: 8px;\n  margin-bottom: 16px;\n"])));
exports.Container = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-height: 548px;\n  overflow: auto;\n  width: 100vw;\n  max-width: 1080px;\n"], ["\n  max-height: 548px;\n  overflow: auto;\n  width: 100vw;\n  max-width: 1080px;\n"])));
exports.StyledIconButton = (0, styled_components_1["default"])(Button_1["default"])(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  .MuiIconButton-root {\n    margin-right: 8px;\n  }\n"], ["\n  .MuiIconButton-root {\n    margin-right: 8px;\n  }\n"])));
exports.AddElementContainer = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  padding: 32px 0;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  padding: 32px 0;\n  width: ", ";\n"])), theme_1["default"].colors.gray200, theme_1.Sizes.lg);
exports.StyledTr = styled_components_1["default"].tr(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (pr) {
    return pr.isDragging
        ? "\n        &:active {\n            background-color: ".concat(theme_1["default"].colors.gray200, ";\n        }")
        : "";
});
exports.TrHead = styled_components_1["default"].tr(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), theme_1["default"].colors.gray200);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
