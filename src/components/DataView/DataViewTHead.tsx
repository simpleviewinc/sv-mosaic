import React from "react";
import styled from "styled-components";
// import jsvalidator from "jsvalidator";

import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";

import Checkbox from "@root/components/Checkbox";
import DataViewColumnControl from "./DataViewColumnControl";
import DataViewBulkActionsButtonsRow from "../DataView/DataViewBulkActionsButtonsRow";
import DataViewBulkAllBar from "../DataView/DataViewBulkAllBar";

import theme from "@root/theme";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewProps } from "./DataViewTypes";

const StyledWrapper = styled.thead`
	text-align: left;
`

const StyledTh = styled.th`
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

	${/* Borders on sticky elements don't carry through, so we put them on the :after element */""}
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
		font-size: 20.58px;
		margin-left: 12px;
		transform: rotate(90deg);
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
`

function flipDir(sort) {
	return sort === "asc" ? "desc" : "asc";
}

interface DataViewTHeadProps {
	checked?: any;
	bulkActions?: any;
	columns?: any;
	onReorder?: DataViewProps["onReorder"];
	rowCount?: any;
	count?: any;
	onCheckAllClick?: any;
	data?: any;
	checkedAllPages?: any;
	onColumnsChange?: any;
	allColumns?: any;
	onSortChange?: any;
	sort?: any;
	onCheckAllPagesClick?: any;
}
// interface DataViewTHeadProps {
// 	checked: any[];
// 	bulkActions: any[];
// 	columns: any[];
// 	rowCount: number;
// 	count: number;
// 	onCheckAllClick: React.MouseEventHandler<HTMLButtonElement>;
// 	data: MosaicObject[];
// 	checkedAllPages: boolean;
// 	onColumnsChange: any;
// 	allColumns: any;
// 	onSortChange: (arg0: { name: any; dir: any; }) => void;
// 	sort: { name: any; dir: string; };
// 	onCheckAllPagesClick: MosaicCallback;
// }

//TODO PROPS
function DataViewTHead(props: DataViewTHeadProps) {
	// jsvalidator.validate(props, {
	// 	type : "object",
	// 	schema : [
	// 		{
	// 			name : "checked",
	// 			type : "array",
	// 			required : true
	// 		},
	// 		{
	// 			name : "checkedAllPages",
	// 			type : "boolean",
	// 			required : true
	// 		},
	// 		{
	// 			name : "bulkActions",
	// 			type : "array",
	// 		},
	// 		{
	// 			name : "columns",
	// 			type : "array"
	// 		},
	// 		{
	// 			name : "allColumns",
	// 			type : "array"
	// 		},
	// 		{
	// 			name : "data",
	// 			type : "array"
	// 		},
	// 		{
	// 			name : "sort",
	// 			type : "object"
	// 		},
	// 		{
	// 			name : "rowCount",
	// 			type : "number"
	// 		},
	// 		{
	// 			name : "count",
	// 			type : "number"
	// 		},
	// 		{
	// 			name : "onSortChange",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "onCheckAllClick",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "onCheckAllPagesClick",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "onColumnsChange",
	// 			type : "function"
	// 		}
	// 	],
	// 	allowExtraKeys : false,
	// 	throwOnInvalid : true
	// });

	const { t } = useMosaicTranslation();

	const allChecked = props.checked.length > 0 && props.checked.every(val => val === true);
	const anyChecked = props.checked.length > 0 && props.checked.some(val => val === true);

	const columnCount = (props?.bulkActions?.length > 0 ? 1 : 0) + 1 + props.columns.length;

	// To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
	const showBulkAll =
		props?.bulkActions?.length > 0 &&
		props.rowCount > 0 &&
		props.count > props.rowCount &&
		props.bulkActions.some(action => action.onAllClick !== undefined) &&
		allChecked
	;

	return (
		<StyledWrapper>
			<tr>
				{
					props?.onReorder &&
					<StyledTh key="_draggable" className="bulk">
					</StyledTh>
				}
				{
					props?.bulkActions?.length > 0 &&
					<StyledTh key="_bulk" className="bulk">
						<Checkbox
							checked={allChecked}
							indeterminate={!allChecked && anyChecked}
							onClick={props.onCheckAllClick}
						/>
					</StyledTh>
				}
				{
					props?.bulkActions?.length > 0 && anyChecked &&
					<StyledTh key="_bulk_actions" colSpan={props.columns.length + 1}>
						<DataViewBulkActionsButtonsRow
							data={props.data}
							checked={props.checked}
							checkedAllPages={props.checkedAllPages}
							bulkActions={props.bulkActions}
						/>
					</StyledTh>
				}
				{
					!anyChecked &&
					<StyledTh key="_actions" className={`
						paddingRight
						${ !props?.bulkActions?.length ? "paddingLeft" : "" }
					`}>
						{
							props.onColumnsChange !== undefined &&
							<DataViewColumnControl
								onChange={props.onColumnsChange}
								columns={props.columns}
								allColumns={props.allColumns}
							/>
						}
						{
							// We need to indent the actions by 11px to align with the buttons underneath
							!props.onColumnsChange &&
							<span style={{paddingLeft: "11px"}}>{t("mosaic:DataView.actions")}</span>
						}
					</StyledTh>
				}
				{
					!anyChecked &&
					props.columns.map(column => {
						const onClick = function() {
							props.onSortChange({
								name : column.name,
								dir : clickDir
							});
						};

						let active;
						let Icon;
						let clickDir;

						if (column.sortable) {
							active = props.sort.name === column.name;
							Icon = active && props.sort.dir === "desc" ? SwitchLeftIcon : SwitchRightIcon;
							clickDir = active ? flipDir(props.sort.dir) : "asc";
						}

						return (
							<StyledTh
								key={column.name}
								className={`
									${column.sortable ? "sortable" : ""}
									${active ? "active" : ""}
									paddingRight
								`}
							>
								<span
									className="columnHeader"
									onClick={column.sortable ? onClick : undefined}
								>
									{column.label}

									{ column.sortable &&
										<Icon className="icon"/>
									}
								</span>
							</StyledTh>
						);
					})
				}
			</tr>
			{
				showBulkAll &&
				<tr>
					<th colSpan={columnCount}>
						<DataViewBulkAllBar
							rowCount={props.rowCount}
							count={props.count}
							checkedAllPages={props.checkedAllPages}
							onCheckAllPagesClick={props.onCheckAllPagesClick}
						/>
					</th>
				</tr>
			}
		</StyledWrapper>
	)
}

export default DataViewTHead;
