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
var lodash_1 = require("lodash");
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var DataViewFilterDropdown_1 = __importDefault(require("../DataViewFilterDropdown"));
var DataViewFilterMultiselect_1 = require("../DataViewFilterMultiselect");
var Button_1 = __importDefault(require("../Button"));
var theme_1 = __importDefault(require("../../theme"));
var i18n_1 = require("../../i18n");
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-bottom: -4px;\n\n\t& > .filterRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\n\t\t& .filter-value {\n\t\t\tmax-width: 200px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n\n\t& > .filterRow > * {\n\t\tmargin-right: 4px;\n\t\tmargin-bottom: 4px;\n\t}\n"], ["\n\tmargin-bottom: -4px;\n\n\t& > .filterRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\n\t\t& .filter-value {\n\t\t\tmax-width: 200px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n\n\t& > .filterRow > * {\n\t\tmargin-right: 4px;\n\t\tmargin-bottom: 4px;\n\t}\n"])));
function DataViewFilters(props) {
    var _a = (0, i18n_1.useMosaicTranslation)(), t = _a.t, i18n = _a.i18n;
    console.log(i18n, i18n.options);
    var _b = (0, react_1.useState)({
        anchorEl: null,
        dropdownOpen: false
    }), state = _b[0], setState = _b[1];
    var activeFilters = props.activeFilters.value || [];
    var primaryFilters = props.filters.filter(function (val) { return val.type === "primary"; });
    var primaryFilterNames = primaryFilters.map(function (val) { return val.name; });
    var optionalFilters = props.filters.filter(function (val) { return val.type !== "primary"; });
    var active = optionalFilters.filter(function (val) { return activeFilters.includes(val.name); });
    var options = optionalFilters
        .map(function (val) { return ({ label: val.label, value: val.name }); })
        .sort(function (a, b) { return a.label.localeCompare(b.label); });
    var optionsSelected = (0, react_1.useMemo)(function () {
        return options.filter(function (option) { return activeFilters.includes(option.value); });
    }, [options, activeFilters]);
    var onRemove = function (name) { return function () {
        var activeFilters = (0, lodash_1.xor)(props.activeFilters.value, [name]);
        onActiveFiltersChange({ value: activeFilters });
    }; };
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
    var onActiveFiltersChange = function (activeFiltersParam) {
        var filter = (0, lodash_1.pick)(props.filter, __spreadArray(__spreadArray([], primaryFilterNames, true), activeFiltersParam.value, true));
        // we only want to pass a new filter obj if we have actually removed a key from it, to prevent unnecessary re-fetches of data
        var setFilter = Object.keys(filter).join(",") !== Object.keys(props.filter).join(",");
        props.onActiveFiltersChange({
            activeFilters: activeFiltersParam,
            filter: setFilter === true ? filter : props.filter
        });
        onClose();
    };
    var getOptions = function (filter) {
        var regex = new RegExp(filter.keyword, "i");
        var results = options.filter(function (option) { return option.label.match(regex); });
        return {
            docs: results,
            hasMore: false
        };
    };
    return (React.createElement(StyledDiv, null,
        React.createElement("div", { className: "filterRow" },
            primaryFilters.map(function (filter) {
                var Component = filter.component;
                return (React.createElement(Component, { key: filter.name, label: filter.label, type: filter.type, args: filter.args || {}, data: props.filter[filter.name] || {}, onRemove: onRemove(filter.name), onChange: filter.onChange }));
            }),
            optionalFilters.length > 0 &&
                React.createElement(React.Fragment, null,
                    React.createElement(Button_1["default"], { label: t("mosaic:DataView.more"), variant: "text", color: "black", size: "small", iconPosition: "right", mIcon: ExpandMore_1["default"], mIconColor: theme_1["default"].colors.gray600, onClick: onClick }),
                    React.createElement(DataViewFilterDropdown_1["default"], { anchorEl: state.anchorEl, onClose: onClose, onEntered: onEntered, onExited: onExited },
                        React.createElement(DataViewFilterMultiselect_1.DataViewFilterMultiselectDropdownContent, { comparison: "", selected: optionsSelected, getOptions: getOptions, isOpen: state.dropdownOpen, onApply: onActiveFiltersChange, onClose: onClose })))),
        active.length > 0 &&
            React.createElement("div", { className: "filterRow optionalFilters" }, active.map(function (filter) {
                var Component = filter.component;
                var filterData = props.filter[filter.name] || ((filter.comparisonDefault && filter.name === "title_with_comparisons") ? { comparison: filter.comparisonDefault } : {});
                return (React.createElement(Component, { key: filter.name, label: filter.label, type: filter.type, args: filter.args || {}, data: filterData, onRemove: onRemove(filter.name), onChange: filter.onChange }));
            }))));
}
exports["default"] = DataViewFilters;
var templateObject_1;
