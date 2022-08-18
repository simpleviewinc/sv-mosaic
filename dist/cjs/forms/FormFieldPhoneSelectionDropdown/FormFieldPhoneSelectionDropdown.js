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
// Components
var react_phone_input_2_1 = __importDefault(require("react-phone-input-2"));
// Types and styles
require("react-phone-input-2/lib/bootstrap.css");
var FormFieldPhoneSelectionDropdown_styled_1 = require("./FormFieldPhoneSelectionDropdown.styled");
var FormFieldPhoneSelectionDropdown = function (props) {
    var _a, _b, _c;
    var fieldDef = props.fieldDef, error = props.error, onChange = props.onChange, onBlur = props.onBlur, value = props.value;
    return !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ? (React.createElement(FormFieldPhoneSelectionDropdown_styled_1.PhoneInputWrapper, { error: !!((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required) && error), onBlur: function (e) { return onBlur && onBlur(e.target.value); } },
        React.createElement(react_phone_input_2_1["default"], { autoFormat: !!((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.autoFormat), country: ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.country) ? fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings.country : "us", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onChange: onChange, placeholder: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder, value: value, inputProps: {
                required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required
            } }))) : (value ? React.createElement(FormFieldPhoneSelectionDropdown_styled_1.StyledDisabledText, null,
        "Phone value: ",
        value) : React.createElement(FormFieldPhoneSelectionDropdown_styled_1.StyledDisabledText, null, "Phone field disabled"));
};
exports["default"] = (0, react_1.memo)(FormFieldPhoneSelectionDropdown);
