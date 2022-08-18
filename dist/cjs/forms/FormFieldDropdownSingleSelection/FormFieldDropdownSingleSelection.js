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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var FormFieldDropdownSingleSelection_styled_1 = require("./FormFieldDropdownSingleSelection.styled");
// Components
var InputWrapper_1 = __importDefault(require("../../components/InputWrapper"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var DropdownSingleSelection = function (props) {
    var _a, _b, _c;
    var fieldDef = props.fieldDef, error = props.error, onChange = props.onChange, onBlur = props.onBlur, value = props.value;
    var _d = (0, react_1.useState)(false), isOpen = _d[0], setIsOpen = _d[1];
    var _e = (0, react_1.useState)(null), dropDownValue = _e[0], setDropDownValue = _e[1];
    var renderInput = function (params) {
        var _a;
        return (React.createElement(InputWrapper_1["default"], null,
            React.createElement(TextField_1["default"], __assign({}, params, { "data-testid": "textfield-test-id", variant: "outlined", placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required }))));
    };
    var handleOpen = function () {
        setIsOpen(!isOpen);
    };
    var onDropDownChange = function (option) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setDropDownValue(option);
                    _a = onChange;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, onChange(option === null || option === void 0 ? void 0 : option.value)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    return [2 /*return*/];
            }
        });
    }); };
    var selectedOption = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options.find(function (option) {
        return option.value === value;
    });
    var isOptionEqualToValue = function (option, value) {
        if (value.value === "") {
            return true;
        }
        return option.value === value.value;
    };
    var CustomPopper = function (props) {
        return React.createElement(FormFieldDropdownSingleSelection_styled_1.StyledPopper, __assign({ value: value === "" }, props));
    };
    return (React.createElement(React.Fragment, null, !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ?
        React.createElement(FormFieldDropdownSingleSelection_styled_1.SingleDropdownWrapper, { innerWidth: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size },
            React.createElement(FormFieldDropdownSingleSelection_styled_1.StyledAutocomplete, { value: { label: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label, value: value }, onOpen: handleOpen, onClose: handleOpen, "data-testid": "autocomplete-test-id", options: (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.options, getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) ? option.label : ""; }, isOptionEqualToValue: isOptionEqualToValue, onChange: function (_event, option) { return onDropDownChange(option); }, error: ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required) && error) ? error : undefined, renderInput: renderInput, PopperComponent: CustomPopper, popupIcon: React.createElement(ExpandMore_1["default"], null), onBlur: function (e) { return onBlur && onBlur(e.target.value); }, open: isOpen }))
        :
            React.createElement(FormFieldDropdownSingleSelection_styled_1.StyledDisabledDropdownText, { "data-testid": "disabled-text-test-id" }, (!dropDownValue || (dropDownValue === null || dropDownValue === void 0 ? void 0 : dropDownValue.label.trim()) === "") ?
                (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder : dropDownValue.label)));
};
exports["default"] = (0, react_1.memo)(DropdownSingleSelection);
