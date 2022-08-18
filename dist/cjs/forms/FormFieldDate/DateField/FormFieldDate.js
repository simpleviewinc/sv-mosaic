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
// Components
var DatePicker_1 = __importDefault(require("../DatePicker"));
var TimePicker_1 = __importDefault(require("../TimePicker"));
// Styles
var DateField_styled_1 = require("./DateField.styled");
var DatePicker_styled_1 = require("../DatePicker/DatePicker.styled");
var FormFieldDate = function (props) {
    var _a, _b;
    var fieldDef = props.fieldDef, onChange = props.onChange, value = props.value, onBlur = props.onBlur, error = props.error;
    var _c = fieldDef || {}, required = _c.required, disabled = _c.disabled;
    var _d = (0, react_1.useState)(null), dateInput = _d[0], setDateInput = _d[1];
    var _e = (0, react_1.useState)(null), timeInput = _e[0], setTimeInput = _e[1];
    (0, react_1.useEffect)(function () {
        if (value && !dateInput && !timeInput) {
            setDateInput(formatDate(value));
            setTimeInput(formatDate(value));
        }
    }, [value, dateInput, timeInput]);
    var formatDate = function (dateValue) {
        var stringDate = dateValue.toISOString();
        var _a = stringDate.split("T"), date = _a[0], time = _a[1];
        var _b = date.split("-"), year = _b[0], month = _b[1], day = _b[2];
        var _c = time.split(":"), hours = _c[0], minutes = _c[1];
        return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
    };
    var handleValue = function (position, date) {
        var _a, _b;
        var newValue = value || undefined;
        var year = 0;
        var month = 0;
        var day = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        position === 0 ? setDateInput(date) : setTimeInput(date);
        if (!isNaN(date === null || date === void 0 ? void 0 : date.valueOf())) {
            if (position === 0) {
                year = date.getFullYear();
                month = date.getMonth();
                day = date.getDate();
                hours = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getHours()) || 0;
                minutes = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getMinutes()) || 0;
                seconds = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getSeconds()) || 0;
            }
            else {
                year = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getFullYear()) || new Date().getFullYear();
                month = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getMonth()) || new Date().getMonth();
                day = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getDate()) || new Date().getDate();
                hours = date.getHours();
                minutes = date.getMinutes();
                seconds = date.getSeconds();
            }
            if (required && ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.showTime)) {
                if ((position === 0 && timeInput) || (position === 1 && dateInput)) {
                    newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
                }
            }
            else {
                newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
            }
        }
        else {
            if (!required && ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.showTime)) {
                if ((position === 0 && !timeInput) || (position === 1 && !dateInput)) {
                    newValue = undefined;
                }
            }
            else
                newValue = undefined;
        }
        return newValue;
    };
    var handleOnChange = function (position, date) { return __awaiter(void 0, void 0, void 0, function () {
        var newValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newValue = handleValue(position, date);
                    return [4 /*yield*/, onChange(newValue)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(DateField_styled_1.DateTimeInputRow, null, !disabled ? (React.createElement(React.Fragment, null,
        React.createElement(DateField_styled_1.DateTimePickerWrapper, null,
            React.createElement(DatePicker_1["default"], { error: error, onChange: function (date) { return handleOnChange(0, date); }, fieldDef: {
                    name: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name,
                    label: "",
                    type: "",
                    inputSettings: {
                        placeholder: "MM / DD / YYYY"
                    },
                    required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required
                }, value: dateInput, onBlur: onBlur })),
        ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.showTime) &&
            React.createElement(DateField_styled_1.DateTimePickerWrapper, null,
                React.createElement(TimePicker_1["default"], { error: error, onChange: function (date) { return handleOnChange(1, date); }, fieldDef: {
                        name: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name,
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: "00:00 AM/PM"
                        }
                    }, value: timeInput, onBlur: onBlur })))) : (React.createElement(React.Fragment, null,
        React.createElement(DatePicker_styled_1.DisabledDateTimeValue, null, value ? new Date(value).toLocaleDateString("en", { timeZone: "UTC" })
            : "MM / DD / YYYY"),
        ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.showTime) &&
            React.createElement(DatePicker_styled_1.DisabledDateTimeValue, null, value ? new Date(value).toLocaleTimeString("en", { timeStyle: "short", hour12: true, timeZone: "UTC" })
                : "00:00 AM/PM")))));
};
exports["default"] = (0, react_1.memo)(FormFieldDate);
