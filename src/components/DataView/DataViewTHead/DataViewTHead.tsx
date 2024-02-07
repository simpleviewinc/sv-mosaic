import React from "react";
import styled from "styled-components";

import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";

import Checkbox from "@root/components/Checkbox";
import DataViewBulkActionsButtonsRow from "../DataViewBulkActionsButtonsRow";
import DataViewBulkAllBar from "../DataViewBulkAllBar";

import theme from "@root/theme";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewTHeadProps } from "./DataViewTHeadTypes";

const StyledWrapper = styled.thead`
	text-align: left;

	.row-header {
		th:first-child {
			padding-left: 16px;
		}

		th:last-child {
			padding-right: 16px;
		}
	}
`;

const StyledTh = styled.th`
	background-color: ${theme.newColors.grey2["100"]};
	color: ${theme.newColors.almostBlack["100"]};
	font-size: 14px;
	font-weight: 510;
	height: 40px;
	padding: 8px;
	position: sticky;
	text-align: left;
	top: 0;
	white-space: nowrap;
	z-index: 2;

	${/* Borders on sticky elements don't carry through, so we put them on the :after element */""}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
	}

	& > .columnHeader {
		display: inline-flex;
		align-items: center;
	}

	&.sortable > .columnHeader {
		cursor: pointer;
	}

	& > .columnHeader > .icon {
		visibility: hidden;
		height: 24px;
		width: 24px;
		margin-left: 12px;
		transform: rotate(90deg);
	}

	&.active {
		color: ${theme.newColors.almostBlack["100"]};
		font-weight: 510;
	}

	&.active > .columnHeader > .icon {
		visibility: visible;
	}

	&.active > .columnHeader:hover > .icon {
		color: black;
	}

	& > .columnHeader:hover > .icon {
		visibility: visible;
		color: ${theme.newColors.grey3["100"]};
	}

	&.bulk {
		width: 52px;
	}
`;

function flipDir(sort) {
	return sort === "asc" ? "desc" : "asc";
}

function DataViewTHead(props: DataViewTHeadProps) {

	const { t } = useMosaicTranslation();

	const columnCount = (props.bulkActions?.length > 0 ? 1 : 0) + 1 + props.columns.length;

	return (
		<StyledWrapper>
			<tr className="row-header">
				{
					props.onReorder &&
					<StyledTh key="_draggable" className="bulk">
					</StyledTh>
				}
				{
					props.onCheckAllClick &&
					<StyledTh key="_bulk" className="bulk" colSpan={(props.bulkActions?.length <= 0 && props.anyChecked) ? props.columns.length + 2 : 1}>
						<Checkbox
							checked={props.allChecked}
							indeterminate={!props.allChecked && props.anyChecked}
							onClick={props.onCheckAllClick}
							disabled={props.disabled}
						/>
					</StyledTh>
				}
				{
					props.bulkActions?.length > 0 && props.anyChecked &&
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
					!props.anyChecked && props.hasActions &&
					<StyledTh key="_actions">
						<span className="columnHeader">{t("mosaic:DataView.actions")}</span>
					</StyledTh>
				}
				{
					!props.anyChecked &&
					props.columns.map(column => {
						const onClick = function() {
							props.onSortChange({
								name : column.name,
								dir : clickDir,
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
				props.showBulkAll &&
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
	);
}

export default DataViewTHead;
