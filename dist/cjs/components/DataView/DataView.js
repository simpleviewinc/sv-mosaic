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
var styled_components_1 = __importDefault(require("styled-components"));
var DataViewTitleBar_1 = __importDefault(require("./DataViewTitleBar"));
var DataViewControlDisplay_1 = __importDefault(require("./DataViewControlDisplay"));
var DataViewPager_1 = __importDefault(require("./DataViewPager"));
var DataViewControlLimit_1 = __importDefault(require("./DataViewControlLimit"));
var DataViewFilters_1 = __importDefault(require("./DataViewFilters"));
var theme_1 = __importDefault(require("../../theme"));
var DataViewDisplays_1 = require("./DataViewDisplays");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& > .headerRow {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\t-ms-flex: 0 0 auto;\n\t\t-webkit-flex: 0 0 auto;\n\t\tflex: 0 0 auto;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t& > .headerRow.title {\n\t\tmargin-left: 12px;\n\t}\n\n\t& > .headerRow > .right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\talign-self: flex-end;\n\t}\n\n\t& > .viewContainer {\n\t\toverflow: auto;\n\t}\n\n\t&.loading {\n\t\topacity: .5;\n\t\tpointer-events: none;\n\t}\n\n\t&.sticky {\n\t\theight: 100%;\n\t}\n"], ["\n\tfont-family: ", ";\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& > .headerRow {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\t-ms-flex: 0 0 auto;\n\t\t-webkit-flex: 0 0 auto;\n\t\tflex: 0 0 auto;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t& > .headerRow.title {\n\t\tmargin-left: 12px;\n\t}\n\n\t& > .headerRow > .right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\talign-self: flex-end;\n\t}\n\n\t& > .viewContainer {\n\t\toverflow: auto;\n\t}\n\n\t&.loading {\n\t\topacity: .5;\n\t\tpointer-events: none;\n\t}\n\n\t&.sticky {\n\t\theight: 100%;\n\t}\n"])), theme_1["default"].fontFamily);
function DataView(props) {
    /*
    jsvalidator.validate(props, {
        type : "object",
        schema : [
            {
                name : "title",
                type : "string"
            },
            {
                name : "columns",
                type : "array",
                schema : {
                    type : "object",
                    schema : [
                        {
                            name : "name",
                            type : "string",
                            required : true
                        },
                        {
                            name : "column",
                            type : "string"
                        },
                        {
                            name : "label",
                            type : "string"
                        },
                        {
                            name : "style",
                            type : "object",
                            schema : [
                                { name : "bold", type : "boolean" },
                                { name : "italic", type : "boolean" },
                                { name : "strikeThrough", type : "boolean" },
                                { name : "noWrap", type : "boolean" },
                                { name : "ellipsis", type : "boolean" },
                                { name : "maxWidth", type : "string" },
                                { name : "textTransform", type : "string" }
                            ],
                            allowExtraKeys : false
                        },
                        {
                            name : "sortable",
                            type : "boolean"
                        },
                        {
                            name : "transforms",
                            type : "array",
                            schema : {
                                type : "function"
                            }
                        }
                    ],
                    allowExtraKeys : false
                }
            },
            {
                name : "filters",
                type : "array"
            },
            {
                name : "filter",
                type : "object"
            },
            {
                name : "activeFilters",
                type : "array",
                schema : {
                    type : "string"
                }
            },
            {
                name : "activeColumns",
                type : "array",
                schema : {
                    type : "string"
                }
            },
            {
                name : "primaryActions",
                type : "array"
            },
            {
                name : "bulkActions",
                type : "array"
            },
            {
                name : "additionalActions",
                type : "array"
            },
            {
                name : "buttons",
                type : "array"
            },
            {
                name : "display",
                type : "string"
            },
            {
                name : "savedView",
                type : "object",
                schema : [
                    { name : "id", type : "string" },
                    { name : "label", type : "string" },
                    { name : "type", type : "string", enum : ["default", "shared", "mine"] },
                    { name : "state", type : "object" }
                ],
                allowExtraKeys : false
            },
            {
                name : "displayOptions",
                type : "array"
            },
            {
                name : "data",
                type : "array"
            },
            {
                name : "count",
                type : "number"
            },
            {
                name : "sort",
                type : "object",
                schema : [
                    { name : "name", type : "string" },
                    { name : "dir", type : "string", enum : ["asc", "desc"] }
                ],
                allowExtraKeys : false
            },
            {
                name : "limit",
                type : "number"
            },
            {
                name : "limitOptions",
                type : "array",
                schema : {
                    type : "number"
                }
            },
            {
                name : "skip",
                type : "number"
            },
            {
                name : "loading",
                type : "boolean"
            },
            {
                name : "sticky",
                type : "boolean"
            },
            {
                name : "gridColumnsMap",
                type : "object"
            },
            {
                name : "onSkipChange",
                type : "function"
            },
            {
                name : "onLimitChange",
                type : "function"
            },
            {
                name : "onSortChange",
                type : "function"
            },
            {
                name : "onDisplayChange",
                type : "function"
            },
            {
                name : "onActiveFiltersChange",
                type : "function"
            },
            {
                name : "onColumnsChange",
                type : "function"
            },
            {
                name : "onSavedViewSave",
                type : "function"
            },
            {
                name : "onSavedViewChange",
                type : "function"
            },
            {
                name : "onSavedViewRemove",
                type : "function"
            },
            {
                name : "onSavedViewGetOptions",
                type : "function"
            },
            {
                name: "savedViewAllowSharedViewSave",
                type : "boolean"
            }
        ],
        allowExtraKeys : false,
        throwOnInvalid : true
    });
*/
    // declare the hooks
    var _a = (0, react_1.useState)({
        checked: [],
        checkedAllPages: false
    }), state = _a[0], setState = _a[1];
    // set defaults
    var display = props.display || "list";
    var displayOptions = (0, react_1.useMemo)(function () { return props.displayOptions || [display]; }, [display, props.displayOptions]);
    var displayControlEnabled = props.onDisplayChange !== undefined && displayOptions.length > 1;
    var savedViewEnabled = props.onSavedViewSave !== undefined &&
        props.onSavedViewChange !== undefined &&
        props.onSavedViewGetOptions !== undefined &&
        props.onSavedViewRemove !== undefined &&
        props.savedView !== undefined;
    var onCheckAllClick = function () {
        var allChecked = state.checked.every(function (val) { return val === true; });
        setState(__assign(__assign({}, state), { checked: state.checked.map(function (val) { return !allChecked; }), checkedAllPages: false }));
    };
    var onCheckboxClick = function (i) {
        var newChecked = __spreadArray([], state.checked, true);
        newChecked[i] = !newChecked[i];
        setState(__assign(__assign({}, state), { checked: newChecked, checkedAllPages: false }));
    };
    var onCheckAllPagesClick = function () {
        // if the checkedAllPages was previously clicked we also uncheck all of the checkboxes
        var checked = state.checkedAllPages ? state.checked.map(function (val) { return false; }) : state.checked;
        setState(__assign(__assign({}, state), { checked: checked, checkedAllPages: !state.checkedAllPages }));
    };
    (0, react_1.useEffect)(function () {
        if (props.data && viewContainerRef.current) {
            // on data change scroll to the top
            viewContainerRef.current.scrollTo(0, 0);
        }
    }, [props.data, props.display]);
    (0, react_1.useEffect)(function () {
        setState(__assign(__assign({}, state), { checked: props.data.map(function (val) { return false; }) }));
    }, [props.data]);
    var displayOptionsFull = (0, react_1.useMemo)(function () {
        return displayOptions.map(function (val) {
            if (val === "list") {
                return DataViewDisplays_1.DataViewDisplayList;
            }
            else if (val === "grid") {
                return DataViewDisplays_1.DataViewDisplayGrid;
            }
            else if (typeof val === "string") {
                throw new Error("Unknown view option");
            }
            else {
                return val;
            }
        });
    }, [displayOptions]);
    var activeDisplay = displayOptionsFull.find(function (val) { return val.name === display; });
    if (activeDisplay === undefined) {
        throw new Error("Display '".concat(display, "' is not valid in the passed displayOptions."));
    }
    var Display = activeDisplay.component;
    var savedViewState = {
        limit: props.limit,
        sort: props.sort,
        display: props.display,
        filter: props.filter,
        activeFilters: props.activeFilters,
        activeColumns: props.activeColumns
    };
    var savedViewCallbacks = {
        onSave: props.onSavedViewSave,
        onChange: props.onSavedViewChange,
        onGetOptions: props.onSavedViewGetOptions,
        onRemove: props.onSavedViewRemove
    };
    var limitOptions = (0, react_1.useMemo)(function () {
        return props.limitOptions || [
            25,
            50,
            100
        ];
    }, [props.limitOptions]);
    var viewContainerRef = (0, react_1.useRef)(null);
    return (React.createElement(StyledWrapper, { className: "\n\t\t\t".concat(props.loading ? "loading" : "", "\n\t\t\t").concat(props.sticky ? "sticky" : "", "\n\t\t") },
        React.createElement("div", { className: "headerRow title" },
            React.createElement(DataViewTitleBar_1["default"], { title: props.title, buttons: props.buttons, savedViewEnabled: savedViewEnabled, savedView: props.savedView, savedViewState: savedViewState, savedViewCallbacks: savedViewCallbacks, savedViewAllowSharedViewSave: (props.savedViewAllowSharedViewSave !== undefined) ? props.savedViewAllowSharedViewSave : false })),
        React.createElement("div", { className: "headerRow filters" },
            React.createElement("div", { className: "left" }, props.filters &&
                React.createElement(DataViewFilters_1["default"], { loading: props.loading, filter: props.filter, filters: props.filters, activeFilters: props.activeFilters, onActiveFiltersChange: props.onActiveFiltersChange })),
            React.createElement("div", { className: "right" },
                displayControlEnabled &&
                    React.createElement(DataViewControlDisplay_1["default"], { display: display, displayOptions: displayOptionsFull, onDisplayChange: props.onDisplayChange }),
                props.onLimitChange !== undefined &&
                    React.createElement(DataViewControlLimit_1["default"], { limit: props.limit, options: limitOptions, onLimitChange: props.onLimitChange }),
                props.onSkipChange !== undefined &&
                    React.createElement(DataViewPager_1["default"], { limit: props.limit, skip: props.skip, count: props.count, onSkipChange: props.onSkipChange }))),
        React.createElement("div", { ref: viewContainerRef, className: "\n\t\t\t\t\tviewContainer\n\t\t\t\t" },
            React.createElement(Display, { checked: state.checked, checkedAllPages: state.checkedAllPages, columns: props.columns, bulkActions: props.bulkActions, sort: props.sort, data: props.data, additionalActions: props.additionalActions, primaryActions: props.primaryActions, activeColumns: props.activeColumns, gridColumnsMap: props.gridColumnsMap, limit: props.limit, count: props.count, rowCount: props.data.length, onSortChange: props.onSortChange, onColumnsChange: props.onColumnsChange, onCheckAllClick: onCheckAllClick, onCheckboxClick: onCheckboxClick, onCheckAllPagesClick: onCheckAllPagesClick })),
        props.loading === false && !props.data.length &&
            React.createElement("div", { className: "noResults" },
                React.createElement("p", null, "No results were found."))));
}
exports["default"] = DataView;
var templateObject_1;
