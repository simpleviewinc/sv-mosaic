import React from "react";
import Checkbox from "../Checkbox";
import DataViewTd from "./DataViewTd";
import DataViewActionsButtonRow from "../DataView/DataViewActionsButtonRow";
function DataViewTr(props) {
    var _a, _b;
    return (React.createElement("tr", null,
        ((_a = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
            React.createElement(DataViewTd, { key: "_bulk" },
                React.createElement(Checkbox, { checked: props.checked === true, onClick: props.onCheckboxClick })),
        React.createElement(DataViewTd, { paddingRight: true, paddingLeft: !((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) },
            React.createElement(DataViewActionsButtonRow, { primaryActions: props.primaryActions, additionalActions: props.additionalActions, originalRowData: props.originalRowData })),
        props.columns.map(column => {
            return (React.createElement(DataViewTd, { key: column.name, className: column.style === "bold" ? "bold" : undefined, paddingRight: true, expandCell: true, bold: column.style && column.style.bold, italic: column.style && column.style.italic, strikeThrough: column.style && column.style.strikeThrough, noWrap: column.style && column.style.noWrap, ellipsis: column.style && column.style.ellipsis, maxWidth: column.style && column.style.maxWidth, textTransform: column.style && column.style.textTransform }, props.row[column.name]));
        })));
}
export default DataViewTr;
