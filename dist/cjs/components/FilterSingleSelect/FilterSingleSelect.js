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
var styled_components_1 = __importDefault(require("styled-components"));
var DataViewPrimaryFilter_1 = __importDefault(require("../DataViewPrimaryFilter"));
var FilterSingleSelectContent_1 = __importDefault(require("./FilterSingleSelectContent"));
var MenuSelect_1 = __importDefault(require("../MenuSelect"));
var StyledWrapper = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
function FilterSingleSelect(props) {
    var _a;
    var _b = (0, react_1.useState)({
        anchorEl: null,
        selected: undefined,
        options: []
    }), state = _b[0], setState = _b[1];
    if (props.args.required && !props.data.value)
        throw new Error("Invalid use-case, a value is required but none was provided");
    var value = props.data.value;
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var selected, options;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.args.getSelected(value)];
                        case 1:
                            selected = _a.sent();
                            return [4 /*yield*/, props.args.getOptions()];
                        case 2:
                            options = _a.sent();
                            setState(__assign(__assign({}, state), { options: options.docs, selected: selected }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (isMounted) {
            fetchData();
        }
        return function () {
            isMounted = false;
        };
    }, [props.data]);
    var onClick = function (evt) {
        setState(__assign(__assign({}, state), { anchorEl: evt.currentTarget }));
    };
    var onClose = function () {
        setState(__assign(__assign({}, state), { anchorEl: null }));
    };
    var valueString;
    if (state.selected !== undefined) {
        valueString = state.selected.label;
    }
    var onChange = function (value) {
        props.onChange({
            value: value === "" ? undefined : value
        });
        onClose();
    };
    return (React.createElement(StyledWrapper, null,
        React.createElement(DataViewPrimaryFilter_1["default"], { label: props.label, value: valueString, type: props.type, onRemove: props.onRemove, onClick: onClick, color: props.args.color }),
        React.createElement(FilterSingleSelectContent_1["default"], { onClose: onClose, anchorEl: state.anchorEl },
            React.createElement(MenuSelect_1["default"], { placeholder: !((_a = props.args) === null || _a === void 0 ? void 0 : _a.required) ? "Any..." : undefined, value: value, options: state.options, onChange: onChange }))));
}
exports["default"] = FilterSingleSelect;
var templateObject_1;
