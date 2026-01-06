import React from "react";
import styled from "styled-components";

import type { DataViewTHeadProps } from "./DataViewTHeadTypes";

import Checkbox from "@root/components/Checkbox";
import DataViewBulkActionsButtonsRow from "../DataViewBulkActionsButtonsRow";
import DataViewBulkAllBar from "../DataViewBulkAllBar";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewTh } from "../DataViewTh/DataViewTh";
import { StyledTh } from "../DataViewTh/DataViewTh.styled";

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

function DataViewTHead(props: DataViewTHeadProps) {

	const { t } = useMosaicTranslation();

	const columnCount =
		(props.onReorder ? 1 : 0) +
		(props.onCheckAllClick ? 1 : 0) +
		(props.hasActions ? 1 : 0) +
		props.columns.length;

	return (
		<StyledWrapper>
			<tr className="row-header">
				{props.onReorder && (
					<StyledTh key="_draggable" className="bulk" />
				)}
				{props.onCheckAllClick && (
					<StyledTh key="_bulk" className="bulk" colSpan={(props.bulkActions?.length <= 0 && props.anyChecked) ? props.columns.length + 2 : 1}>
						<Checkbox
							checked={props.allChecked}
							indeterminate={!props.allChecked && props.anyChecked}
							onClick={props.onCheckAllClick}
							disabled={props.disabled}
						/>
					</StyledTh>
				)}
				{props.bulkActions?.length > 0 && props.anyChecked && (
					<StyledTh key="_bulk_actions" colSpan={props.columns.length + 1}>
						<DataViewBulkActionsButtonsRow
							data={props.data}
							checked={props.checked}
							checkedAllPages={props.checkedAllPages}
							bulkActions={props.bulkActions}
						/>
					</StyledTh>
				)}
				{!props.anyChecked && props.hasActions && (
					<StyledTh key="_actions">
						<span className="columnHeader">{t("mosaic:DataView.actions")}</span>
					</StyledTh>
				)}
				{!props.anyChecked && props.columns.map(({ name, label, description, sortable }) => (
					<DataViewTh
						key={name}
						name={name}
						label={label}
						description={description}
						sortable={sortable}
						sorted={props.sort && props.sort.name === name ? props.sort.dir : undefined}
						onSortChange={props.onSortChange}
					/>
				))}
			</tr>
			{props.showBulkAll && (
				<tr>
					<td colSpan={columnCount}>
						<DataViewBulkAllBar
							rowCount={props.rowCount}
							count={props.count}
							checkedAllPages={props.checkedAllPages}
							onCheckAllPagesClick={props.onCheckAllPagesClick}
						/>
					</td>
				</tr>
			)}
		</StyledWrapper>
	);
}

export default DataViewTHead;
