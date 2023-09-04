import * as React from "react";
import styled from "styled-components";

import DataViewTHead from "../DataViewTHead";
import DataViewTBody from "../DataViewTBody";
import { useMemo } from "react";
import { transformRows } from "@root/utils/dataViewTools";
import { DataViewDisplayListProps } from "./DataViewDisplayListTypes";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

function DataViewDisplayList(props: DataViewDisplayListProps) {
	const { primaryActions, additionalActions } = props;
	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.activeColumnObjs);
	}, [props.data, props.activeColumnObjs]);

	const hasActions = useMemo(
		() =>
			(additionalActions && additionalActions.length > 0) ||
			(primaryActions && primaryActions.length > 0),
		[additionalActions, primaryActions]
	);

	return (
		<StyledTable>
			<DataViewTHead
				checked={props.checked}
				checkedAllPages={props.checkedAllPages}
				columns={props.activeColumnObjs}
				allColumns={props.columns}
				data={props.data}
				bulkActions={props.bulkActions}
				sort={props.sort}
				count={props.count}
				rowCount={props.rowCount}
				onSortChange={props.onSortChange}
				onCheckAllClick={props.onCheckAllClick}
				onCheckAllPagesClick={props.onCheckAllPagesClick}
				onColumnsChange={props.onColumnsChange}
				onReorder={props?.onReorder}
				allChecked={props.allChecked}
				anyChecked={props.anyChecked}
				showBulkAll={props.showBulkAll}
				hasActions={hasActions}
				disabled={props.disabled}
			/>
			<DataViewTBody
				checked={props.checked}
				columns={props.activeColumnObjs}
				data={props.data}
				hasActions={hasActions}
				transformedData={transformedData}
				bulkActions={props.bulkActions}
				additionalActions={props.additionalActions}
				disabled={props.disabled}
				primaryActions={props.primaryActions}
				onCheckboxClick={props.onCheckboxClick}
				onReorder={props.onReorder}
			/>
		</StyledTable>
	)
}

export default DataViewDisplayList;
