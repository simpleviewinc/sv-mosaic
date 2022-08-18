"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Checkbox_1 = __importDefault(require("../Checkbox"));
var DataViewTd_1 = __importDefault(require("./DataViewTd"));
var DataViewActionsButtonRow_1 = __importDefault(require("../DataView/DataViewActionsButtonRow"));
function DataViewTr(props) {
    var _a, _b;
    return (react_1["default"].createElement("tr", null,
        ((_a = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
            react_1["default"].createElement(DataViewTd_1["default"], { key: "_bulk" },
                react_1["default"].createElement(Checkbox_1["default"], { checked: props.checked === true, onClick: props.onCheckboxClick })),
        react_1["default"].createElement(DataViewTd_1["default"], { paddingRight: true, paddingLeft: !((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) },
            react_1["default"].createElement(DataViewActionsButtonRow_1["default"], { primaryActions: props.primaryActions, additionalActions: props.additionalActions, originalRowData: props.originalRowData })),
        props.columns.map(function (column) {
            return (react_1["default"].createElement(DataViewTd_1["default"], { key: column.name, className: column.style === "bold" ? "bold" : undefined, paddingRight: true, expandCell: true, bold: column.style && column.style.bold, italic: column.style && column.style.italic, strikeThrough: column.style && column.style.strikeThrough, noWrap: column.style && column.style.noWrap, ellipsis: column.style && column.style.ellipsis, maxWidth: column.style && column.style.maxWidth, textTransform: column.style && column.style.textTransform }, props.row[column.name]));
        })));
}
exports["default"] = DataViewTr;
