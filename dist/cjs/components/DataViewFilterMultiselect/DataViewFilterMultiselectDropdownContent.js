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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var lodash_1 = require("lodash");
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var Help_1 = __importDefault(require("@mui/icons-material/Help"));
var DataViewFilterDropdownButtons_1 = __importDefault(require("../DataViewFilterDropdownButtons"));
var Button_1 = __importDefault(require("../Button"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var Spinner_1 = __importDefault(require("../Spinner"));
var CheckboxList_1 = __importDefault(require("../CheckboxList"));
var theme_1 = __importDefault(require("../../theme"));
var Typography_1 = require("../Typography");
var i18n_1 = require("../../i18n");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& > .topBlock {\n\t\tdisplay: flex;\n\t\theight: 400px;\n\t\twidth: 600px;\n\t}\n\n\t& > .topBlock > .options > .searchBar {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 14px;\n\t\tz-index: 1;\n\t\tbackground: white;\n\t}\n\n\t& > .topBlock > .options > .searchBar > svg {\n\t\tmargin-right: 8px;\n\t\tfont-size: ", ";\n\t}\n\n\t& > .topBlock > .options > .searchBar > .input {\n\t\tfont-family: ", ";\n\t\tline-height: 2rem;\n\t\tfont-size: 16px;\n\t}\n\n\t& > .topBlock > .options {\n\t\toverflow-y: scroll;\n\t\tflex: 2;\n\t\tposition: relative;\n\t\ttransition: opacity .5s;\n\t\tpadding-right: 10px;\n\t}\n\n\t& > .topBlock > .options.disabled {\n\t\topacity: .4;\n\t\tpointer-events: none;\n\t}\n\n\t& > .topBlock > .options .listItem {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\n\t& > .topBlock > .options .listItemIcon {\n\t\tmin-width: auto;\n\t}\n\n\t& > .topBlock > .options > .spinner {\n\t\tmargin-top: 10px;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t& > .topBlock > .options .checked {\n\t\tcolor: ", ";\n\t}\n\n\t& > .topBlock > .selected {\n\t\tpadding: 0px 0px 0px 15px;\n\t\twidth: 200px;\n\t\toverflow-y: auto;\n\t}\n\n\t& .comparisonDropdown {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t& .chip {\n\t\tdisplay: flex;\n\t\tbackground-color: ", "13;\n\t\tmargin-bottom: 4px;\n\t\tjustify-content: space-between;\n\t\tfont-family: ", ";\n\t\theight: 33px;\n\t}\n\n\t& .chip:focus {\n\t\tbackground-color: ", "13;\n\t}\n\n\t& .chip > span {\n\t\tflex: 1;\n\t\tfont-size: 14px;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\tdisplay: block;\n\t}\n"], ["\n\t& > .topBlock {\n\t\tdisplay: flex;\n\t\theight: 400px;\n\t\twidth: 600px;\n\t}\n\n\t& > .topBlock > .options > .searchBar {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 14px;\n\t\tz-index: 1;\n\t\tbackground: white;\n\t}\n\n\t& > .topBlock > .options > .searchBar > svg {\n\t\tmargin-right: 8px;\n\t\tfont-size: ", ";\n\t}\n\n\t& > .topBlock > .options > .searchBar > .input {\n\t\tfont-family: ", ";\n\t\tline-height: 2rem;\n\t\tfont-size: 16px;\n\t}\n\n\t& > .topBlock > .options {\n\t\toverflow-y: scroll;\n\t\tflex: 2;\n\t\tposition: relative;\n\t\ttransition: opacity .5s;\n\t\tpadding-right: 10px;\n\t}\n\n\t& > .topBlock > .options.disabled {\n\t\topacity: .4;\n\t\tpointer-events: none;\n\t}\n\n\t& > .topBlock > .options .listItem {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\n\t& > .topBlock > .options .listItemIcon {\n\t\tmin-width: auto;\n\t}\n\n\t& > .topBlock > .options > .spinner {\n\t\tmargin-top: 10px;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t& > .topBlock > .options .checked {\n\t\tcolor: ", ";\n\t}\n\n\t& > .topBlock > .selected {\n\t\tpadding: 0px 0px 0px 15px;\n\t\twidth: 200px;\n\t\toverflow-y: auto;\n\t}\n\n\t& .comparisonDropdown {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t& .chip {\n\t\tdisplay: flex;\n\t\tbackground-color: ", "13;\n\t\tmargin-bottom: 4px;\n\t\tjustify-content: space-between;\n\t\tfont-family: ", ";\n\t\theight: 33px;\n\t}\n\n\t& .chip:focus {\n\t\tbackground-color: ", "13;\n\t}\n\n\t& .chip > span {\n\t\tflex: 1;\n\t\tfont-size: 14px;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\tdisplay: block;\n\t}\n"])), theme_1["default"].iconFontSize, theme_1["default"].fontFamily, theme_1["default"].colors.blue, theme_1["default"].colors.blue, theme_1["default"].fontFamily, theme_1["default"].colors.blue);
var PopoverP = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin: 0px;\n"], ["\n\tmargin: 0px;\n"])));
var limit = 25;
function DataViewFilterMultiselectDropdownContent(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "value",
                type: "array"
            },
            {
                name: "placeholder",
                type: "string",
                required: false
            },
            {
                name: "comparison",
                type: "string",
                required: true
            },
            {
                name: "comparisons",
                type: "array"
            },
            {
                name: "getOptions",
                type: "function",
                required: true
            },
            {
                name: "selected",
                type: "array",
                required: true
            },
            {
                name: "isOpen",
                type: "boolean",
                required: true
            },
            {
                name: "onClose",
                type: "function",
                required: true
            },
            {
                name: "onApply",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var _a = (0, react_1.useState)({
        options: [],
        selected: props.selected.map(function (val) { return val.value; }),
        hasMore: false,
        skip: 0,
        keyword: undefined,
        comparison: props.comparison,
        loaded: false
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    // we need to combine the options we are querying for and the selected options that are passed in
    // since if they have already selected an item not in the current page, it won't be in the queried options
    var allOptions = __spreadArray(__spreadArray([], props.selected, true), state.options, true);
    // mark the active comparison
    var activeComparison = props.comparisons ? props.comparisons.find(function (val) { return val.value === state.comparison; }) : undefined;
    (0, react_1.useEffect)(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.getOptions({ limit: limit, skip: state.skip })];
                        case 1:
                            options = _a.sent();
                            setState(__assign(__assign({}, state), { options: options.docs, hasMore: options.hasMore === true, skip: state.skip + limit, loaded: true }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    var onClear = function () {
        setState(__assign(__assign({}, state), { selected: [], comparison: "in", keyword: undefined }));
    };
    var onApply = function () {
        props.onApply({
            value: optionsDisabled ? [] : state.selected,
            comparison: state.comparison
        });
    };
    var handleToggle = function (option) { return function () {
        var newSelected = (0, lodash_1.xor)(state.selected, [option.value]);
        setState(__assign(__assign({}, state), { selected: newSelected }));
    }; };
    var loadMore = function (e) {
        // stash the target to prevent issues with React event persistence in our async callback
        var target = e.currentTarget;
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var newOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.getOptions({
                                limit: limit,
                                skip: state.skip,
                                keyword: state.keyword
                            })];
                        case 1:
                            newOptions = _a.sent();
                            setState(__assign(__assign({}, state), { options: __spreadArray(__spreadArray([], state.options, true), newOptions.docs, true), hasMore: newOptions.hasMore === true, skip: state.skip + limit }));
                            // By blurring on the target we prevent the browser from keeping our load more button in view
                            // this ensures that our options scrollable maintains it's previous scroll position
                            target.blur();
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    };
    var debouncedSetKeyword = (0, lodash_1.debounce)(function (value) {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var newOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.getOptions({
                                limit: limit,
                                skip: 0,
                                keyword: value
                            })];
                        case 1:
                            newOptions = _a.sent();
                            setState(__assign(__assign({}, state), { options: newOptions.docs, hasMore: newOptions.hasMore === true, keyword: value === "" ? undefined : value, skip: limit }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, 200);
    var keywordChange = function (e) {
        debouncedSetKeyword(e.target.value);
    };
    var comparisonDropdown;
    if (props.comparisons) {
        var menuItems = props.comparisons.map(function (comparison) {
            return {
                label: comparison.label,
                onClick: function () {
                    // for exists and not_exists we want to clear the value
                    if (["exists", "not_exists"].includes(comparison.value) === true) {
                        setState(__assign(__assign({}, state), { selected: [] }));
                    }
                    setState(__assign(__assign({}, state), { comparison: comparison.value }));
                }
            };
        });
        var popoverP_1 = {
            "In": "The row must match one of selected option.",
            "Not In": "The row must match none of the selected options.",
            "All": "The row must match all of the selected options.",
            "Exists": "The row must have a value for this filter.",
            "Not Exists": "The row must not have a value for this filter."
        };
        comparisonDropdown = (react_1["default"].createElement("div", { className: "comparisonDropdown" },
            react_1["default"].createElement(Typography_1.H3, null, t("mosaic:DataView.comparison")),
            react_1["default"].createElement(ButtonRow_1["default"], null,
                react_1["default"].createElement(Button_1["default"], { label: activeComparison.label, variant: "outlined", color: "black", iconPosition: "right", mIcon: ExpandMore_1["default"], menuItems: menuItems }),
                react_1["default"].createElement(Button_1["default"], { variant: "icon", color: "blue", mIcon: Help_1["default"], popover: react_1["default"].createElement(PopoverP, null, menuItems.map(function (item, id) { return (react_1["default"].createElement("span", { key: id },
                        react_1["default"].createElement("b", null, item.label),
                        " - ",
                        popoverP_1[item.label],
                        react_1["default"].createElement("br", null))); })) }))));
    }
    // if the user has chosen exists or not_exists then we need to disable the left panel since it isn't valid in that case
    var optionsDisabled = ["exists", "not_exists"].includes(state.comparison);
    // we want to avoid showing the list until the dropdown is fully open and the results are loaded from the db
    var showList = props.isOpen && state.loaded;
    var onChange = function (selected) {
        setState(__assign(__assign({}, state), { selected: selected }));
    };
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement("div", { className: "topBlock" },
            react_1["default"].createElement("div", { className: "options ".concat(optionsDisabled ? "disabled" : "") },
                react_1["default"].createElement("div", { className: "searchBar" },
                    react_1["default"].createElement(Search_1["default"], null),
                    react_1["default"].createElement(InputBase_1["default"], { className: "input", placeholder: props.placeholder || t("mosaic:common.keyword___"), autoFocus: true, onChange: keywordChange })),
                !showList &&
                    react_1["default"].createElement(Spinner_1["default"], { className: "spinner" }),
                showList &&
                    react_1["default"].createElement(CheckboxList_1["default"], { checked: optionsDisabled ? [] : state.selected, options: state.options, onChange: onChange }),
                state.hasMore &&
                    react_1["default"].createElement("div", { className: "loadContainer" },
                        react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.load_more___"), color: "blue", variant: "outlined", fullWidth: true, onClick: loadMore }))),
            react_1["default"].createElement("div", { className: "selected" },
                comparisonDropdown,
                !optionsDisabled &&
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Typography_1.H3, null, t("mosaic:DataView.selected_options")),
                        react_1["default"].createElement("div", { className: "chips" }, showList &&
                            state.selected.map(function (value) {
                                var option = allOptions.find(function (val) { return val.value === value; });
                                if (option === undefined) {
                                    return null;
                                }
                                return (react_1["default"].createElement(Chip_1["default"], { className: "chip", key: option.value, label: option.label, onDelete: handleToggle(option) }));
                            }))))),
        react_1["default"].createElement(DataViewFilterDropdownButtons_1["default"], { onApply: onApply, onClear: onClear, onCancel: props.onClose })));
}
exports["default"] = DataViewFilterMultiselectDropdownContent;
var templateObject_1, templateObject_2;
