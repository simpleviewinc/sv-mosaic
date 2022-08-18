import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Checkbox from "../Checkbox";
import DataViewColumnControl from "./DataViewColumnControl";
import DataViewBulkActionsButtonsRow from "../DataView/DataViewBulkActionsButtonsRow";
import DataViewBulkAllBar from "../DataView/DataViewBulkAllBar";
import theme from "../../theme";
import { useMosaicTranslation } from "../../i18n";
const StyledWrapper = styled.thead `
	text-align: left;
`;
const StyledTh = styled.th `
	font-size: 14px;
	text-align: left;
	font-weight: 400;
	padding: 5px 0px;
	height: 40px;
	color: ${theme.colors.gray700};
	position: sticky;
	top: 0;
	z-index: 2;
	background-color: ${theme.colors.gray200};
	white-space: nowrap;

	${ /* Borders on sticky elements don't carry through, so we put them on the :after element */""}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-bottom: ${theme.colors.gray200};
		pointer-events: none;
	}
	
	& > .columnHeader {
		display: inline-flex;
		align-items: center;
	}

	&.paddingRight {
		padding-right: 12px;
	}

	&.paddingLeft {
		padding-left: 12px;
	}

	&.sortable > .columnHeader {
		cursor: pointer;
	}
	
	& > .columnHeader > .icon {
		visibility: hidden;
		font-size: 18px;
		margin-left: 0.25rem;
		margin-top: 1px;
	}
	
	&.active {
		color: ${theme.colors.gray800};
		font-weight: 700;
	}

	&.active:after {
		border-bottom: 1px solid ${theme.colors.gray800};
	}
	
	&.active > .columnHeader > .icon {
		visibility: visible;
	}
	
	&.active > .columnHeader:hover > .icon {
		color: black;
	}
	
	& > .columnHeader:hover > .icon {
		visibility: visible;
		color: ${theme.colors.gray600};
	}
	
	&.bulk {
		width: 52px;
	}
`;
function flipDir(sort) {
    return sort === "asc" ? "desc" : "asc";
}
function DataViewTHead(props) {
    var _a, _b, _c, _d, _e;
    jsvalidator.validate(props, {
        type: "object",
        schema: [
            {
                name: "checked",
                type: "array",
                required: true
            },
            {
                name: "checkedAllPages",
                type: "boolean",
                required: true
            },
            {
                name: "bulkActions",
                type: "array",
            },
            {
                name: "columns",
                type: "array"
            },
            {
                name: "allColumns",
                type: "array"
            },
            {
                name: "data",
                type: "array"
            },
            {
                name: "sort",
                type: "object"
            },
            {
                name: "rowCount",
                type: "number"
            },
            {
                name: "count",
                type: "number"
            },
            {
                name: "onSortChange",
                type: "function"
            },
            {
                name: "onCheckAllClick",
                type: "function"
            },
            {
                name: "onCheckAllPagesClick",
                type: "function"
            },
            {
                name: "onColumnsChange",
                type: "function"
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    const { t } = useMosaicTranslation();
    const allChecked = props.checked.length > 0 && props.checked.every(val => val === true);
    const anyChecked = props.checked.length > 0 && props.checked.some(val => val === true);
    const columnCount = (((_a = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 ? 1 : 0) + 1 + props.columns.length;
    // To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
    const showBulkAll = ((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
        props.rowCount > 0 &&
        props.count > props.rowCount &&
        props.bulkActions.some(action => action.onAllClick !== undefined) &&
        allChecked;
    return (React.createElement(StyledWrapper, null,
        React.createElement("tr", null,
            ((_c = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _c === void 0 ? void 0 : _c.length) > 0 &&
                React.createElement(StyledTh, { key: "_bulk", className: "bulk" },
                    React.createElement(Checkbox, { checked: allChecked, onClick: props.onCheckAllClick })),
            ((_d = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _d === void 0 ? void 0 : _d.length) > 0 && anyChecked &&
                React.createElement(StyledTh, { key: "_bulk_actions", colSpan: props.columns.length + 1 },
                    React.createElement(DataViewBulkActionsButtonsRow, { data: props.data, checked: props.checked, checkedAllPages: props.checkedAllPages, bulkActions: props.bulkActions })),
            !anyChecked &&
                React.createElement(StyledTh, { key: "_actions", className: `
						paddingRight
						${!((_e = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _e === void 0 ? void 0 : _e.length) ? "paddingLeft" : ""}
					` },
                    props.onColumnsChange !== undefined &&
                        React.createElement(DataViewColumnControl, { onChange: props.onColumnsChange, columns: props.columns, allColumns: props.allColumns }),
                    // We need to indent the actions by 11px to align with the buttons underneath
                    !props.onColumnsChange &&
                        React.createElement("span", { style: { paddingLeft: "11px" } }, t("mosaic:DataView.actions"))),
            !anyChecked &&
                props.columns.map(column => {
                    const onClick = function () {
                        props.onSortChange({
                            name: column.name,
                            dir: clickDir
                        });
                    };
                    let active;
                    let Icon;
                    let clickDir;
                    if (column.sortable) {
                        active = props.sort.name === column.name;
                        Icon = active && props.sort.dir === "desc" ? ArrowDownwardIcon : ArrowUpwardIcon;
                        clickDir = active ? flipDir(props.sort.dir) : "asc";
                    }
                    return (React.createElement(StyledTh, { key: column.name, className: `
									${column.sortable ? "sortable" : ""}
									${active ? "active" : ""}
									paddingRight
								` },
                        React.createElement("span", { className: "columnHeader", onClick: column.sortable ? onClick : undefined },
                            column.label,
                            column.sortable &&
                                React.createElement(Icon, { className: "icon" }))));
                })),
        showBulkAll &&
            React.createElement("tr", null,
                React.createElement("th", { colSpan: columnCount },
                    React.createElement(DataViewBulkAllBar, { rowCount: props.rowCount, count: props.count, checkedAllPages: props.checkedAllPages, onCheckAllPagesClick: props.onCheckAllPagesClick })))));
}
export default DataViewTHead;
