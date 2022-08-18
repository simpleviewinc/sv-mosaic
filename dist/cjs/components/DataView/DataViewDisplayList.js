"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var DataViewTHead_1 = __importDefault(require("./DataViewTHead"));
var DataViewTBody_1 = __importDefault(require("./DataViewTBody"));
var dataViewTools_1 = require("../../utils/dataViewTools");
var StyledTable = styled_components_1["default"].table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n"], ["\n\twidth: 100%;\n\tborder-collapse: collapse;\n"])));
function DataViewDisplayList(props) {
    // todo validate props
    var activeColumns = (0, react_1.useMemo)(function () {
        return props.activeColumns || props.columns.map(function (val) { return val.name; });
    }, [props.activeColumns, props.columns]);
    // generate an array of columns based on the ones that are marked active
    var activeColumnObjs = (0, react_1.useMemo)(function () {
        return activeColumns.map(function (name) {
            var column = props.columns.find(function (val) { return val.name === name; });
            return column;
        });
    }, [activeColumns, props.columns]);
    // execute the transforms in the rows
    var transformedData = (0, react_1.useMemo)(function () {
        return (0, dataViewTools_1.transformRows)(props.data, activeColumnObjs);
    }, [props.data, activeColumnObjs]);
    return (React.createElement(StyledTable, null,
        React.createElement(DataViewTHead_1["default"], { checked: props.checked, checkedAllPages: props.checkedAllPages, columns: activeColumnObjs, allColumns: props.columns, data: transformedData, bulkActions: props.bulkActions, sort: props.sort, count: props.count, rowCount: props.rowCount, onSortChange: props.onSortChange, onCheckAllClick: props.onCheckAllClick, onCheckAllPagesClick: props.onCheckAllPagesClick, onColumnsChange: props.onColumnsChange }),
        React.createElement(DataViewTBody_1["default"], { checked: props.checked, columns: activeColumnObjs, data: props.data, transformedData: transformedData, bulkActions: props.bulkActions, additionalActions: props.additionalActions, primaryActions: props.primaryActions, onCheckboxClick: props.onCheckboxClick })));
}
exports["default"] = DataViewDisplayList;
var templateObject_1;
