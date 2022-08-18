"use strict";
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
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var FormFieldTextArea_styled_1 = require("./FormFieldTextArea.styled");
var TextArea = function (props) {
    var _a, _b, _c;
    var fieldDef = props.fieldDef, error = props.error, onChange = props.onChange, onBlur = props.onBlur, value = props.value;
    var errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(FormFieldTextArea_styled_1.StyledTextArea, { id: fieldDef.name, value: value, onChange: function (e) { return onChange && onChange(e.target.value); }, onBlur: function (e) { return onBlur && onBlur(e.target.value); }, variant: 'outlined', error: (errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required))), className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, multiline: true, fieldSize: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, inputProps: { maxLength: ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.maxCharacters) > 0 ? (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.maxCharacters : null }, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required }));
};
exports["default"] = (0, react_1.memo)(TextArea);
