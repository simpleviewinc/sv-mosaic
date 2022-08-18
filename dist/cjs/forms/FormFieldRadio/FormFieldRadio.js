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
// Components
var RadioButton_1 = __importDefault(require("../../components/RadioButton"));
var FormFieldRadio_styled_1 = require("./FormFieldRadio.styled");
var FormFieldRadio = function (props) {
    var _a;
    var fieldDef = props.fieldDef, onChange = props.onChange, value = props.value, onBlur = props.onBlur;
    var listOfRadios = (React.createElement(React.Fragment, null, (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options.map(function (option) { return (React.createElement(RadioButton_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: option.label, label: option.label, value: option.value })); })));
    return (React.createElement(FormFieldRadio_styled_1.StyledRadioGroup, { onChange: function (e) { return onChange && onChange(e.target.value); }, value: value, onBlur: function (e) { return onBlur && onBlur(e.target.value); } }, listOfRadios));
};
exports["default"] = FormFieldRadio;
