"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// React
var React = __importStar(require("react"));
var react_1 = require("react");
// Components
var Chip_1 = __importDefault(require("../../components/Chip"));
var FormFieldChipSingleSelect_styled_1 = require("./FormFieldChipSingleSelect.styled");
var FormFieldChipSingleSelect = function (props) {
    var fieldDef = props.fieldDef, error = props.error, onChange = props.onChange, onBlur = props.onBlur, value = props.value;
    var required = (fieldDef || null).required;
    var _a = (0, react_1.useState)(fieldDef.inputSettings && __spreadArray([], fieldDef.inputSettings.options, true)), internalOptions = _a[0], setInternalOptions = _a[1];
    var _b = (0, react_1.useState)(false), prepopulated = _b[0], setPrepouplated = _b[1];
    (0, react_1.useEffect)(function () {
        if (value && !prepopulated) {
            findSelectedOption(__spreadArray([], internalOptions, true).find(function (o) { return o.value === value; }));
            setPrepouplated(true);
        }
    }, [value, prepopulated]);
    var findSelectedOption = function (option) {
        var newOptions = __spreadArray([], internalOptions, true);
        newOptions = newOptions.map(function (o) { return ((o === null || o === void 0 ? void 0 : o.value) === (option === null || option === void 0 ? void 0 : option.value) ? __assign(__assign({}, o), { selected: required && o.selected ? o.selected : !o.selected }) : __assign(__assign({}, o), { selected: o.selected = false })); });
        var selectedOption = newOptions.find(function (o) { return o.selected === true; });
        setInternalOptions(newOptions);
        return selectedOption;
    };
    var updateSelectedOption = function (option) {
        var selectedOption = findSelectedOption(option);
        setPrepouplated(true);
        onChange((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || undefined);
    };
    var errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(FormFieldChipSingleSelect_styled_1.StyledChipGroup, { error: (errorWithMessage || (errorWithMessage && required)), onBlur: onBlur }, internalOptions.map(function (option) { return React.createElement(Chip_1["default"], { key: option.value, label: option.label, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, selected: option.selected, onClick: function () { return updateSelectedOption(option); } }); })));
};
exports["default"] = FormFieldChipSingleSelect;
