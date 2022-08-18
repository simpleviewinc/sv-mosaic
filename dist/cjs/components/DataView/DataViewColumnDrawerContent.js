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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ArrowDownward_1 = __importDefault(require("@mui/icons-material/ArrowDownward"));
var ArrowUpward_1 = __importDefault(require("@mui/icons-material/ArrowUpward"));
var Button_1 = __importDefault(require("../Button"));
var theme_1 = __importDefault(require("../../theme"));
var CheckboxList_1 = __importDefault(require("../CheckboxList"));
var DrawerContent_1 = __importDefault(require("../DrawerContent"));
var i18n_1 = require("../../i18n");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\n\t& > div > h2 {\n\t\t", "\n\t\tpadding-left: 15px;\n\t\tmargin: 0 0 1rem 0;\n\t}\n\n\t& > .left {\n\t\tflex: 1;\n\t\tpadding-right: 20px;\n\t\twidth: 200px;\n\t}\n\n\t& > .left .listItem {\n\t\tmargin: 3px 0px;\n\t\tbackground: white;\n\t}\n\n\t& > .right {\n\t\tflex: 1;\n\t\twidth: 200px;\n\t}\n\n\t& > .right > .item {\n\t\tbackground: white;\n\t\tline-height: 42px;\n\t\tmargin: 3px 0px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tpadding-left: 15px;\n\t}\n\n\t& > .right > .item > .buttons {\n\t\ttext-align: right;\n\t}\n"], ["\n\tdisplay: flex;\n\n\t& > div > h2 {\n\t\t", "\n\t\tpadding-left: 15px;\n\t\tmargin: 0 0 1rem 0;\n\t}\n\n\t& > .left {\n\t\tflex: 1;\n\t\tpadding-right: 20px;\n\t\twidth: 200px;\n\t}\n\n\t& > .left .listItem {\n\t\tmargin: 3px 0px;\n\t\tbackground: white;\n\t}\n\n\t& > .right {\n\t\tflex: 1;\n\t\twidth: 200px;\n\t}\n\n\t& > .right > .item {\n\t\tbackground: white;\n\t\tline-height: 42px;\n\t\tmargin: 3px 0px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tpadding-left: 15px;\n\t}\n\n\t& > .right > .item > .buttons {\n\t\ttext-align: right;\n\t}\n"])), theme_1["default"].h2);
function DataViewColumnDrawerContent(props) {
    var _a = (0, react_1.useState)({
        activeColumns: props.columns.map(function (val) { return val.name; })
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var saveColumns = function () {
        props.onClose();
        props.onChange(state.activeColumns);
    };
    var onColumnsChange = function (data) {
        setState(__assign(__assign({}, state), { activeColumns: data }));
    };
    var orderClick = function (name, num) { return function () {
        // changing the order is actually just swapping one element for another
        // so we find the elements current position and it's new position and swap the two names
        var index = state.activeColumns.indexOf(name);
        var newIndex = index + num;
        var swapValue = state.activeColumns[newIndex];
        state.activeColumns[index] = swapValue;
        state.activeColumns[newIndex] = name;
        setState(__assign(__assign({}, state), { activeColumns: __spreadArray([], state.activeColumns, true) }));
    }; };
    var columnOptions = props.allColumns.map(function (column) {
        return {
            label: column.label,
            value: column.name
        };
    }).sort(function (a, b) {
        return a.label.localeCompare(b.label);
    });
    return (react_1["default"].createElement(DrawerContent_1["default"], { title: t("mosaic:DataView.table_settings"), background: "gray", onApply: saveColumns, onClose: props.onClose, onCancel: props.onClose },
        react_1["default"].createElement(StyledWrapper, null,
            react_1["default"].createElement("div", { className: "left" },
                react_1["default"].createElement("h2", null, t("mosaic:DataView.columns")),
                react_1["default"].createElement(CheckboxList_1["default"], { options: columnOptions, checked: state.activeColumns, onChange: onColumnsChange })),
            react_1["default"].createElement("div", { className: "right" },
                react_1["default"].createElement("h2", null, t("mosaic:DataView.column_order")),
                state.activeColumns.map(function (name, i) {
                    var column = props.allColumns.find(function (val) { return val.name === name; });
                    return (react_1["default"].createElement("div", { className: "item", key: column.name },
                        react_1["default"].createElement("span", null, column.label),
                        react_1["default"].createElement("span", { className: "buttons" },
                            react_1["default"].createElement(Button_1["default"], { mIcon: ArrowDownward_1["default"], variant: "icon", color: "black", disabled: i === state.activeColumns.length - 1, onClick: orderClick(column.name, 1) }),
                            react_1["default"].createElement(Button_1["default"], { mIcon: ArrowUpward_1["default"], variant: "icon", color: "black", disabled: i === 0, onClick: orderClick(column.name, -1) }))));
                })))));
}
exports["default"] = DataViewColumnDrawerContent;
var templateObject_1;
