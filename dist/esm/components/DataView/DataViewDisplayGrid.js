import React from "react";
import { useMemo } from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox";
import DataViewActionsButtonRow from "./DataViewActionsButtonRow";
import theme, { BREAKPOINTS } from "../../theme/theme";
import DataViewBulkActionsButtonsRow from "./DataViewBulkActionsButtonsRow";
import DataViewDisplayGridSortControl from "./DataViewDisplayGridSortControl";
import { transformRows } from "../../utils/dataViewTools";
import DataViewBulkAllBar from "./DataViewBulkAllBar";
const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";
const RESPONSIVE_BREAKPOINT = BREAKPOINTS.topComponent.responsiveView + "px";
const MOBILE_BREAKPOINT = BREAKPOINTS.mobile + "px";
const StyledDiv = styled.div `
	& > .topRow {
		margin-bottom: 4px;
		position: sticky;
		top: 0;
		z-index: 1;
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: ${theme.colors.gray200};
	}

	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 8px;
		grid-row-gap: 20px;

		@media (min-width: ${MOBILE_BREAKPOINT}) {
			grid-template-columns: repeat(2, 1fr);
		};

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		};

		@media (min-width: ${RESPONSIVE_BREAKPOINT}) {
			grid-template-columns: repeat(4, 1fr);
		};

		@media (min-width: 1296px) {
			grid-template-columns: repeat(5, 1fr);
		};

		@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	& > .grid > .cell {
		min-width: 0;
	}

	& > .grid > .cell.checked > .image > .checkboxContainer {
		opacity: 1;
	}

	& > .grid > .cell.checked > .image > .checkboxContainer > .mask {
		opacity: 1;
		border: 2px solid rgba(255, 255, 255, .5);
		margin: 6px;
	}

	& > .grid > .cell > img {
		max-width: 100%;
		min-width: 100%;
	}

	& > .grid > .cell h2 {
		margin: 0;
		font-size: 14px;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .grid > .cell h3 {
		margin: 0;
		font-weight: normal;
		font-size: 12px;
		color: ${theme.colors.gray500};
	}

	& > .grid > .cell .image {
		position: relative;
	}

	& > .grid > .cell > .image > .checkboxContainer {
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		transition: opacity 150ms;
	}

	& > .grid > .cell > .image:hover > .checkboxContainer {
		opacity: 1;
	}

	& > .grid > .cell > .image > .checkboxContainer > .mask {
		position: absolute;
		width: 18px;
		height: 18px;
		left: 4px;
		top: 4px;
		margin: 8px;
		background: white;
		border-radius: 3px;
		opacity: .8;
	}

	& > .grid > .cell .image img {
		width: 100%;
	}

	& > .grid > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}

	& > .grid > .cell > .info > .left {
		min-width: 0;
	}

	& > .grid > .cell > .info > .right {
		flex-shrink: 0;
	}
`;
function DataViewDisplayGrid(props) {
    var _a, _b, _c;
    // TODO VALIDATE PROPS
    if (!props.gridColumnsMap) {
        throw new Error("You must specify gridColumnsMap in order to use the grid view.");
    }
    // execute the transforms in the rows
    const transformedData = useMemo(() => {
        return transformRows(props.data, props.columns);
    }, [props.data, props.columns]);
    const checkboxClick = (i) => () => {
        props.onCheckboxClick(i);
    };
    const allChecked = props.checked.length > 0 && props.checked.every(val => val === true);
    const anyChecked = props.checked.length > 0 && props.checked.some(val => val === true);
    const hasTopRow = (props === null || props === void 0 ? void 0 : props.bulkActions.length) > 0 || props.onSortChange !== undefined;
    const hasSortControl = props.onSortChange !== undefined && props.sort !== undefined;
    // To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
    const showBulkAll = ((_a = props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
        props.rowCount > 0 &&
        props.count > props.rowCount &&
        props.bulkActions.some(action => action.onAllClick !== undefined) &&
        allChecked;
    return (React.createElement(StyledDiv, null,
        hasTopRow &&
            React.createElement("div", { className: "topRow" },
                React.createElement("div", { className: "left" },
                    ((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
                        React.createElement(Checkbox, { checked: allChecked, onClick: props.onCheckAllClick }),
                    ((_c = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _c === void 0 ? void 0 : _c.length) > 0 && anyChecked &&
                        React.createElement(DataViewBulkActionsButtonsRow, { data: props.data, checked: props.checked, bulkActions: props.bulkActions, checkedAllPages: props.checkedAllPages })),
                hasSortControl &&
                    React.createElement("div", { className: "right" },
                        React.createElement(DataViewDisplayGridSortControl, { columns: props.columns, sort: props.sort, onSortChange: props.onSortChange }))),
        showBulkAll &&
            React.createElement("div", { className: "topRowBulkAll" },
                React.createElement(DataViewBulkAllBar, { rowCount: props.rowCount, count: props.count, checkedAllPages: props.checkedAllPages, onCheckAllPagesClick: props.onCheckAllPagesClick })),
        React.createElement("div", { className: "grid" }, transformedData.map((row, i) => {
            var _a;
            const image = row[props.gridColumnsMap.image];
            const primary = row[props.gridColumnsMap.primary];
            const secondary = row[props.gridColumnsMap.secondary];
            return (React.createElement("div", { className: `
									cell
									${props.checked[i] === true ? "checked" : ""}
								`, key: i },
                image &&
                    React.createElement("div", { className: "image" },
                        ((_a = props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                            React.createElement("div", { className: "checkboxContainer" },
                                React.createElement("div", { className: "mask" }),
                                React.createElement(Checkbox, { className: "checkbox", checked: props.checked[i] === true, onClick: checkboxClick(i) })),
                        image),
                React.createElement("div", { className: "info" },
                    React.createElement("div", { className: "left" },
                        primary &&
                            React.createElement("h2", null, primary),
                        secondary &&
                            React.createElement("h3", null, secondary)),
                    React.createElement("div", { className: "right" },
                        React.createElement(DataViewActionsButtonRow, { primaryActions: props.primaryActions, additionalActions: props.additionalActions, originalRowData: row })))));
        }))));
}
export default DataViewDisplayGrid;
