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
var React = __importStar(require("react"));
var react_1 = require("react");
var Button_1 = __importDefault(require("../../components/Button"));
var Form_1 = __importStar(require("../../components/Form"));
var AdvancedSelection_styled_1 = require("./AdvancedSelection.styled");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var ChipList_1 = __importDefault(require("./ChipList"));
var LoadMoreButton_1 = __importDefault(require("./LoadMoreButton"));
var lodash_1 = __importDefault(require("lodash"));
var AdvancedSelectionDrawer = function (props) {
    var _a, _b, _c, _d, _e;
    var value = props.value, fieldDef = props.fieldDef, onChange = props.onChange, isModalOpen = props.isModalOpen, isMobileView = props.isMobileView, handleClose = props.handleClose, handleUnsavedChanges = props.handleUnsavedChanges, dialogOpen = props.dialogOpen, handleDialogClose = props.handleDialogClose;
    var _f = (0, react_1.useState)([]), options = _f[0], setOptions = _f[1];
    var _g = (0, react_1.useState)([]), filteredOptions = _g[0], setFilteredOptions = _g[1];
    var _h = (0, react_1.useState)(true), canLoadMore = _h[0], setCanLoadMore = _h[1];
    var _j = (0, react_1.useState)({ prev: "options", "new": "options" }), filter = _j[0], setFilter = _j[1];
    var _k = (0, Form_1.useForm)(), state = _k.state, dispatch = _k.dispatch;
    (0, react_1.useEffect)(function () {
        var _a;
        if (state.data.checkboxList !== undefined) {
            handleUnsavedChanges(!lodash_1["default"].isEqual(__spreadArray([], value, true), (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.checkboxList));
        }
    }, [state.data.checkboxList, value]);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        if (value.length > 0 && isModalOpen) {
            isMounted && dispatch(Form_1.formActions.setFieldValue({
                name: "checkboxList",
                value: value
            }));
        }
        return function () {
            isMounted = false;
        };
    }, [value, isModalOpen]);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        var setInternalOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getOptions)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getMoreOptions()];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.checkboxOptions) {
                            setOptions(options.concat((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.checkboxOptions));
                        }
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        if (isMounted) {
            setInternalOptions();
        }
        return function () {
            isMounted = false;
        };
    }, [
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.checkboxOptions,
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.getOptions,
        (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.getOptionsLimit
    ]);
    var getMoreOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var searchInput_1, newOptions;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    if (!((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getOptions)) return [3 /*break*/, 5];
                    searchInput_1 = (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.searchInput;
                    newOptions = [];
                    if (!(filter.prev === filter["new"])) return [3 /*break*/, 2];
                    return [4 /*yield*/, ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.getOptions({
                            offset: filteredList ? filteredList.length : 0,
                            limit: ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.getOptionsLimit) ? +((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.getOptionsLimit) + 1 : null,
                            filter: (searchInput_1 === null || searchInput_1 === void 0 ? void 0 : searchInput_1.length) > 0 ? searchInput_1 : undefined
                        }))];
                case 1:
                    newOptions = _k.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, ((_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.getOptions({
                        offset: 0,
                        limit: ((_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.getOptionsLimit) ? +((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.getOptionsLimit) + 1 : null,
                        filter: (searchInput_1 === null || searchInput_1 === void 0 ? void 0 : searchInput_1.length) > 0 ? searchInput_1 : undefined
                    }))];
                case 3:
                    newOptions = _k.sent();
                    _k.label = 4;
                case 4:
                    if (newOptions.length > +((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.getOptionsLimit)) {
                        newOptions.pop();
                        setCanLoadMore(true);
                    }
                    else {
                        setCanLoadMore(false);
                    }
                    if (filter.prev === "filter" && filter["new"] === "options") {
                        setOptions(newOptions);
                    }
                    if (filter.prev === "options" && filter["new"] === "options") {
                        setOptions(options.concat(newOptions));
                    }
                    if (filter.prev === "options" && filter["new"] === "filter") {
                        setFilteredOptions(newOptions);
                    }
                    if (filter.prev === "filter" && filter["new"] === "filter") {
                        setFilteredOptions(filteredOptions.concat(newOptions));
                    }
                    _k.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getMoreOptionsDebounced = lodash_1["default"].debounce(getMoreOptions, 300);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        isMounted && getMoreOptionsDebounced();
        return function () {
            isMounted = false;
            getMoreOptionsDebounced.cancel();
        };
    }, [filter]);
    (0, react_1.useEffect)(function () {
        var _a;
        var isMounted = true;
        if (isMounted) {
            var searchInput_2 = (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.searchInput;
            if (searchInput_2 && (searchInput_2 === null || searchInput_2 === void 0 ? void 0 : searchInput_2.length) > 0) {
                setFilter({ prev: filter["new"], "new": "filter" });
            }
            else {
                setFilter({ prev: filter["new"], "new": "options" });
            }
        }
        return function () {
            isMounted = false;
        };
    }, [(_d = state === null || state === void 0 ? void 0 : state.data) === null || _d === void 0 ? void 0 : _d.searchInput]);
    var loadMoreOptions = function () {
        setFilter({ prev: filter["new"], "new": filter["new"] });
    };
    var filteredList = (0, react_1.useMemo)(function () {
        var _a;
        var searchInput = (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.searchInput;
        if (searchInput) {
            var trimmedFilter_1 = searchInput === null || searchInput === void 0 ? void 0 : searchInput.trim().toLowerCase();
            return filteredOptions.filter(function (option) { return searchInput === "" || option.label.toLowerCase().includes(trimmedFilter_1); });
        }
        return options;
    }, [
        options,
        filteredOptions,
        (_e = state === null || state === void 0 ? void 0 : state.data) === null || _e === void 0 ? void 0 : _e.searchInput,
    ]);
    var searchInput = (0, react_1.useCallback)(function (props) {
        var _a;
        var searchKeyword = props.value.trim();
        /**
         * Handler for the input element
         * @param e input change event
         */
        var onInputChange = function (e) {
            dispatch(Form_1.formActions.setFieldValue({
                name: "searchInput",
                value: e.target.value
            }));
        };
        /**
         * Adds an options to the list.
         */
        var createOption = function () { return __awaiter(void 0, void 0, void 0, function () {
            var canBeCreated, newOptionValue, newOption;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        canBeCreated = searchKeyword.length > 0;
                        if (!canBeCreated) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.createNewOption(searchKeyword))];
                    case 1:
                        newOptionValue = _b.sent();
                        newOption = {
                            label: searchKeyword,
                            value: newOptionValue
                        };
                        setFilteredOptions(__spreadArray(__spreadArray([], filteredOptions, true), [newOption], false));
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        return (React.createElement(AdvancedSelection_styled_1.InputWrapper, { isMobileView: isMobileView },
            React.createElement(AdvancedSelection_styled_1.StyledInput, { type: 'text', placeholder: 'Search...', onChange: onInputChange, value: props.value ? props.value : "", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled }),
            props.value && ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.createNewOption) && (React.createElement(Button_1["default"], { label: 'Create', variant: 'text', color: 'teal', disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, mIcon: Add_1["default"], onClick: createOption }))));
    }, [fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, options]);
    var deleteSelectedOption = function (newOptions) {
        dispatch(Form_1.formActions.setFieldValue({
            name: "checkboxList",
            value: newOptions
        }));
    };
    var fields = (0, react_1.useMemo)(function () {
        var _a, _b;
        return [
            {
                name: "listOfChips",
                type: ChipList_1["default"],
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                inputSettings: {
                    getSelected: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
                    isModalOpen: isModalOpen,
                    isMobileView: isMobileView,
                    selectedOptions: (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.checkboxList,
                    deleteSelectedOption: deleteSelectedOption
                }
            },
            {
                name: "searchInput",
                type: searchInput
            },
            {
                name: "checkboxList",
                type: "checkbox",
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                style: {
                    height: "353px",
                    overflowY: "auto",
                    flexWrap: "nowrap",
                    width: "100%"
                },
                size: "100%",
                inputSettings: {
                    options: filteredList
                }
            },
            {
                name: "loadMoreButton",
                type: LoadMoreButton_1["default"],
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                inputSettings: {
                    canLoadMore: canLoadMore,
                    getMoreOptions: loadMoreOptions,
                    parentInputSettings: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings
                }
            },
        ];
    }, [
        filteredList,
        searchInput,
        fieldDef,
        canLoadMore,
        getMoreOptions,
        isModalOpen,
        isMobileView,
    ]);
    /**
     * Modal is closed when the Save button is clicked.
     */
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var valid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(Form_1.formActions.submitForm())];
                case 1:
                    valid = (_a.sent()).valid;
                    if (!valid)
                        return [2 /*return*/];
                    return [4 /*yield*/, onChange(state.data.checkboxList)];
                case 2:
                    _a.sent();
                    handleClose(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var buttons = [
        {
            label: "Cancel",
            onClick: function () { return handleClose(); },
            color: "gray",
            variant: "outlined"
        },
        {
            label: "Save",
            onClick: onSubmit,
            color: "yellow",
            variant: "contained"
        }
    ];
    return (React.createElement(Form_1["default"], { title: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label, buttons: buttons, type: 'drawer', state: state, dispatch: dispatch, fields: fields, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }));
};
exports["default"] = (0, react_1.memo)(AdvancedSelectionDrawer);
