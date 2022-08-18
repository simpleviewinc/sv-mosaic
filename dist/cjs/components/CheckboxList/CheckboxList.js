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
var lodash_1 = require("lodash");
var Checkbox_1 = __importDefault(require("../Checkbox"));
var reactTools_1 = require("../../utils/reactTools");
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var CheckboxList = function (props) {
    var _a;
    var checkedRef = (0, reactTools_1.useStateRef)(props.checked);
    var handleToggle = (0, react_1.useCallback)(function (value) { return function () {
        // toggle the item in the array
        var newChecked = (0, lodash_1.xor)(checkedRef.current, [value]);
        // TODO: Review with Owen
        //props.onChange(newChecked.length > 0 ? newChecked : undefined);
        props.onChange(newChecked);
    }; }, [checkedRef, props.onChange]);
    var callbacks = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = props === null || props === void 0 ? void 0 : props.options) === null || _a === void 0 ? void 0 : _a.map(function (option) { return handleToggle(option.value); });
    }, [props.options, handleToggle]);
    return (React.createElement(FormGroup_1["default"], { className: "".concat(props.className, " listItem"), onBlur: props.onBlur, style: props.style }, (_a = props === null || props === void 0 ? void 0 : props.options) === null || _a === void 0 ? void 0 : _a.map(function (option, i) {
        var _a, _b;
        var checked = ((_a = props === null || props === void 0 ? void 0 : props.checked) === null || _a === void 0 ? void 0 : _a.length) > 0 ? ((_b = props.checked) === null || _b === void 0 ? void 0 : _b.filter(function (o) { return o === option.value; }).length) > 0 : false;
        return (React.createElement(Checkbox_1["default"], { className: checked ? "checked" : "", checked: checked, label: option.label, disabled: props.disabled, key: "".concat(option.value, "-").concat(i), onClick: callbacks[i] }));
    })));
};
exports["default"] = CheckboxList;
