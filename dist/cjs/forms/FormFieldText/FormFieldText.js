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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
// Material UI
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var FormFieldText_styled_1 = require("./FormFieldText.styled");
var TextField = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var fieldDef = props.fieldDef, error = props.error, onChange = props.onChange, onBlur = props.onBlur, value = props.value;
    var leadingElement = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.prefixElement)
        ? {
            startAdornment: (React.createElement(InputAdornment_1["default"], { position: 'start' }, (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.prefixElement))
        }
        : null;
    var onFieldChange = function (e) {
        var _a;
        var value = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.type) === "number"
            ? Number(e.target.value)
            : e.target.value;
        onChange && onChange(value);
    };
    var errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(FormFieldText_styled_1.StyledTextField, { id: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name, value: value, onChange: onFieldChange, onBlur: function (e) { return onBlur && onBlur(e.target.value); }, variant: 'outlined', error: (errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required))), className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, placeholder: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, multiline: (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.multiline, fieldSize: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, inputProps: { maxLength: ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.maxCharacters) > 0 ? (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.maxCharacters : null }, InputProps: leadingElement, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required, type: (_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.type }));
};
exports["default"] = (0, react_1.memo)(TextField);
