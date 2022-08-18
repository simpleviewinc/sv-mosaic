"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledTextArea = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var TextField_1 = __importDefault(require("@mui/material/TextField"));
//Styles & Types
var theme_1 = __importStar(require("../../theme"));
exports.StyledTextArea = (0, styled_components_1["default"])(function (_a) {
    var fieldSize = _a.fieldSize, rest = __rest(_a, ["fieldSize"]);
    return (React.createElement(TextField_1["default"], __assign({}, rest)));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n\n  .MuiInputBase-multiline {\n    align-items: start;\n    background-color: ", ";\n    min-height: ", ";\n    padding: ", ";\n\n    &:hover {\n      background-color: ", "\n    }\n  }\n\n  .MuiOutlinedInput-multiline {\n    font-family: ", ";\n  }\n\n  .MuiFormHelperText-contained {\n    font-family: inherit;\n    margin-top: ", ";\n    margin-left: 0;\n    word-wrap: break-word;\n  }\n\n  .MuiInputBase-input.Mui-disabled {\n    background-color: transparent;\n    color: ", ";\n  }\n\n  .MuiFormHelperText-root {\n    color: ", ";\n  }\n\n  fieldset {\n    border-radius: 0px;\n  }\n\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset {\n      border-color: ", ";\n    }\n  }\n\n  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline,\n  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n    border-color: ", ";\n  }\n"], ["\n  width: ", ";\n\n  .MuiInputBase-multiline {\n    align-items: start;\n    background-color: ", ";\n    min-height: ", ";\n    padding: ", ";\n\n    &:hover {\n      background-color: ", "\n    }\n  }\n\n  .MuiOutlinedInput-multiline {\n    font-family: ", ";\n  }\n\n  .MuiFormHelperText-contained {\n    font-family: inherit;\n    margin-top: ", ";\n    margin-left: 0;\n    word-wrap: break-word;\n  }\n\n  .MuiInputBase-input.Mui-disabled {\n    background-color: transparent;\n    color: ", ";\n  }\n\n  .MuiFormHelperText-root {\n    color: ", ";\n  }\n\n  fieldset {\n    border-radius: 0px;\n  }\n\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset {\n      border-color: ", ";\n    }\n  }\n\n  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline,\n  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n    border-color: ", ";\n  }\n"])), function (pr) { return pr.fieldSize ? pr.fieldSize : theme_1.Sizes.sm; }, function (pr) { return pr.disabled ? "transparent" : theme_1["default"].colors.gray100; }, function (pr) { return pr.disabled ? "fit-content" : "150px"; }, function (pr) { return pr.disabled && 0; }, function (pr) { return pr.disabled ? "transparent" : theme_1["default"].colors.grayHover; }, theme_1["default"].fontFamily, function (pr) { return pr.error ? "9px" : "7px"; }, theme_1["default"].colors.almostBlack, function (pr) { return pr.error ? theme_1["default"].colors.red : theme_1["default"].colors.assistiveText; }, theme_1["default"].colors.almostBlack, function (pr) { return pr.error && !pr.disabled ? theme_1["default"].colors.red : "transparent"; });
var templateObject_1;
