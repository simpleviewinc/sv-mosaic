"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var DataViewTr_1 = __importDefault(require("./DataViewTr"));
var theme_1 = __importDefault(require("../../theme"));
var StyledTBody = styled_components_1["default"].tbody(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& > tr {\n\t\tborder-bottom: ", ";\n\t}\n\t\n\t& > tr > td {\n\t\tpadding: 5px 0px;\n\t}\n\t\n\t& > tr > td.bold {\n\t\tfont-weight: 600;\n\t}\n\t\n\t& > tr > td > div > .transform_thumbnail {\n\t\tdisplay: block;\n\t}\n"], ["\n\t& > tr {\n\t\tborder-bottom: ", ";\n\t}\n\t\n\t& > tr > td {\n\t\tpadding: 5px 0px;\n\t}\n\t\n\t& > tr > td.bold {\n\t\tfont-weight: 600;\n\t}\n\t\n\t& > tr > td > div > .transform_thumbnail {\n\t\tdisplay: block;\n\t}\n"])), theme_1["default"].borders.lightGray);
function DataViewTBody(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "checked",
                type: "array",
                required: true
            },
            {
                name: "columns",
                type: "array",
                required: true
            },
            {
                name: "data",
                type: "array",
                required: true
            },
            {
                name: "transformedData",
                type: "array",
                required: true
            },
            {
                name: "primaryActions",
                type: "array"
            },
            {
                name: "additionalActions",
                type: "array"
            },
            {
                name: "bulkActions",
                type: "array"
            },
            {
                name: "onCheckboxClick",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var onCheckboxClick = function (i) { return function () {
        props.onCheckboxClick(i);
    }; };
    return (react_1["default"].createElement(StyledTBody, null, props.transformedData.map(function (row, i) {
        return (react_1["default"].createElement(DataViewTr_1["default"], { key: i, row: row, originalRowData: props.data[i], bulkActions: props.bulkActions, primaryActions: props.primaryActions, additionalActions: props.additionalActions, onCheckboxClick: onCheckboxClick(i), checked: props.checked[i], columns: props.columns }));
    })));
}
exports["default"] = DataViewTBody;
var templateObject_1;
