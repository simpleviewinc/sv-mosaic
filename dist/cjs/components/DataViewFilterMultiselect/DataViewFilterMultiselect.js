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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var DataViewPrimaryFilter_1 = __importDefault(require("../DataViewPrimaryFilter"));
var DataViewFilterMultiselectDropdownContent_1 = __importDefault(require("./DataViewFilterMultiselectDropdownContent"));
var DataViewFilterDropdown_1 = __importDefault(require("../DataViewFilterDropdown"));
var StyledWrapper = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\n"], ["\n\t\n"])));
var validComparisons = [
    { label: "In", value: "in" },
    { label: "Not In", value: "not_in" },
    { label: "All", value: "all" },
    { label: "Exists", value: "exists" },
    { label: "Not Exists", value: "not_exists" }
];
var validComparisonNames = validComparisons.map(function (val) { return val.value; });
var comparisonMap = {
    "in": "",
    not_in: "Not In - ",
    all: "All - "
};
function DataViewFilterMultiselect(props) {
    var _a;
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "label",
                type: "string",
                required: true
            },
            {
                name: "data",
                type: "object",
                schema: [
                    {
                        name: "value",
                        type: "array",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        name: "comparison",
                        type: "string",
                        "enum": validComparisonNames
                    }
                ],
                allowExtraKeys: false,
                required: true
            },
            {
                name: "type",
                type: "string",
                required: true
            },
            {
                name: "args",
                type: "object",
                schema: [
                    {
                        name: "getOptions",
                        type: "function",
                        required: true
                    },
                    {
                        name: "getSelected",
                        type: "function",
                        required: true
                    },
                    {
                        name: "comparisons",
                        type: "array",
                        schema: {
                            type: "string",
                            "enum": validComparisonNames
                        }
                    },
                    {
                        name: "placeholder",
                        type: "string",
                        required: false
                    }
                ],
                allowExtraKeys: false,
                required: true
            },
            {
                name: "onRemove",
                type: "function",
                required: true
            },
            {
                name: "onChange",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var _b = (0, react_1.useState)({
        anchorEl: null,
        selected: [],
        dropdownOpen: false
    }), state = _b[0], setState = _b[1];
    var value = props.data.value || [];
    var comparison = props.data.comparison || "in";
    (0, react_1.useEffect)(function () {
        var isMouting = true;
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var selected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.args.getSelected(value)];
                        case 1:
                            selected = _a.sent();
                            setState(__assign(__assign({}, state), { selected: selected }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (isMouting) {
            fetchData();
        }
        return function () {
            isMouting = false;
        };
    }, [props.data]);
    var onClick = function (event) {
        setState(__assign(__assign({}, state), { anchorEl: event.currentTarget }));
    };
    var onClose = function () {
        setState(__assign(__assign({}, state), { anchorEl: null }));
    };
    var onEntered = function () {
        setState(__assign(__assign({}, state), { dropdownOpen: true }));
    };
    var onExited = function () {
        setState(__assign(__assign({}, state), { dropdownOpen: false }));
    };
    var onApply = function (data) {
        props.onChange(data);
        onClose();
    };
    var valueString;
    if (comparison === "exists") {
        valueString = "EXISTS";
    }
    else if (comparison === "not_exists") {
        valueString = "NOT EXISTS";
    }
    else if (state.selected.length > 0) {
        var tempString = state.selected.slice(0, 2).map(function (val) { return val.label; }).join(", ");
        if (state.selected.length > 2) {
            tempString += " (".concat(state.selected.length - 2, " more)");
        }
        valueString = "".concat(comparisonMap[comparison]).concat(tempString);
    }
    else {
        valueString = "";
    }
    // filter the valid comparisons based on what the developer is allowing
    var activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(function (val) { return props.args.comparisons.includes(val.value); }) : undefined;
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement(DataViewPrimaryFilter_1["default"], { label: props.label, value: valueString, type: props.type, onRemove: props.onRemove, onClick: onClick }),
        react_1["default"].createElement(DataViewFilterDropdown_1["default"], { anchorEl: state.anchorEl, onClose: onClose, onEntered: onEntered, onExited: onExited },
            react_1["default"].createElement(DataViewFilterMultiselectDropdownContent_1["default"], { value: value, comparison: comparison, comparisons: activeComparisons, selected: state.selected, getOptions: props.args.getOptions, isOpen: state.dropdownOpen, onApply: onApply, onClose: onClose, placeholder: (_a = props.args) === null || _a === void 0 ? void 0 : _a.placeholder }))));
}
exports["default"] = DataViewFilterMultiselect;
var templateObject_1;
