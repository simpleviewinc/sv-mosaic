"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledSwitch = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var Switch_1 = __importDefault(require("@mui/material/Switch"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
exports.StyledSwitch = (0, styled_components_1["default"])(Switch_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 2px;\n  && {\n    width: 60px;\n    height: 40px;\n  }\n\n  .MuiSwitch-colorPrimary,\n  .MuiSwitch-colorPrimary.Mui-disabled {\n    color: white;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-checked,\n  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {\n    color: ", ";\n  }\n\n  .MuiSwitch-colorPrimary {\n    padding: 10px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  .MuiSwitch-colorPrimary {\n    &.Mui-checked {\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n\n  .MuiSwitch-track {\n    background-color: ", ";\n    opacity: 1;\n    height: 14px;\n    width: 34px;\n    margin: auto 0px;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {\n    background-color: #fdb92459;\n    opacity: 1;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {\n    background-color: #fdb92459;\n  }\n\n  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {\n    background-color: ", ";\n    opacity: 0.5;\n  }\n"], ["\n  margin-right: 2px;\n  && {\n    width: 60px;\n    height: 40px;\n  }\n\n  .MuiSwitch-colorPrimary,\n  .MuiSwitch-colorPrimary.Mui-disabled {\n    color: white;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-checked,\n  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {\n    color: ", ";\n  }\n\n  .MuiSwitch-colorPrimary {\n    padding: 10px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  .MuiSwitch-colorPrimary {\n    &.Mui-checked {\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n\n  .MuiSwitch-track {\n    background-color: ", ";\n    opacity: 1;\n    height: 14px;\n    width: 34px;\n    margin: auto 0px;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {\n    background-color: #fdb92459;\n    opacity: 1;\n  }\n\n  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {\n    background-color: #fdb92459;\n  }\n\n  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {\n    background-color: ", ";\n    opacity: 0.5;\n  }\n"])), theme_1["default"].colors.simplyGold, theme_1["default"].colors.simplyGrayOpacity, theme_1["default"].colors.simplyGoldOpacity, theme_1["default"].colors.simplyGray, theme_1["default"].colors.simplyGray);
var templateObject_1;
