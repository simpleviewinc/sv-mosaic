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
var ToggleSwitch_styled_1 = require("./ToggleSwitch.styled");
var StyledFormControlLabel_1 = __importDefault(require("../StyledFormControlLabel"));
var ToggleSwitch = function (props) {
    var checked = props.checked, label = props.label, _a = props.labelPlacement, labelPlacement = _a === void 0 ? "end" : _a, _b = props.required, required = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, onChange = props.onChange, onBlur = props.onBlur;
    return (React.createElement(StyledFormControlLabel_1["default"], { label: label, labelPlacement: labelPlacement, disabled: disabled, control: React.createElement(ToggleSwitch_styled_1.StyledSwitch, { onBlur: function (e) { return onBlur && onBlur(e.target.checked); }, checked: !!checked, onChange: function (e) { return onChange && onChange(e.target.checked); }, required: required }) }));
};
exports["default"] = ToggleSwitch;
