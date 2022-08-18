"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledDialogTitle = exports.StyledDialog = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.StyledDialog = (0, styled_components_1["default"])(Dialog_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nz-index: 99999 !important;\n  font-family: ", ";\n\n  .MuiDialogContent-root {\n    border-bottom: 2px solid ", ";\n  }\n\n  .MuiPaper-rounded {\n    border-radius: 0;\n  }\n\n  .MuiDialogContent-root {\n    padding: 0 80px 40px 80px;\n  }\n\n  .MuiDialogActions-root {\n    padding: 40px 40px;\n  }\n\n  .MuiDialogActions-spacing > :not(:first-child) {\n    margin-left: 20px;\n  }\n"], ["\nz-index: 99999 !important;\n  font-family: ", ";\n\n  .MuiDialogContent-root {\n    border-bottom: 2px solid ", ";\n  }\n\n  .MuiPaper-rounded {\n    border-radius: 0;\n  }\n\n  .MuiDialogContent-root {\n    padding: 0 80px 40px 80px;\n  }\n\n  .MuiDialogActions-root {\n    padding: 40px 40px;\n  }\n\n  .MuiDialogActions-spacing > :not(:first-child) {\n    margin-left: 20px;\n  }\n"])), theme_1["default"].fontFamily, theme_1["default"].colors.gray200);
exports.StyledDialogTitle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: ", ";\n  padding: 80px 80px 32px 80px;  \n"], ["\n  color: ", ";\n  font-size: 20px;\n  font-weight: ", ";\n  padding: 80px 80px 32px 80px;  \n"])), theme_1["default"].colors.almostBlack, theme_1["default"].fontWeight.medium);
var templateObject_1, templateObject_2;
