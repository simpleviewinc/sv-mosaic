import * as React from "react";
import styled from "styled-components";

import DataViewTHead from "./DataViewTHead";
import DataViewTBody from "./DataViewTBody";
import { DataViewProps } from "./DataViewTypes";
import { useMemo } from "react";
import { transformRows } from "@root/utils/dataViewTools";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

interface DataViewDisplayListProps {
	activeColumns?: DataViewProps["activeColumns"];
	columns?: DataViewProps["columns"];
	data?: DataViewProps["data"];
	onReorder?: DataViewProps["onReorder"];
	checked?: DataViewProps["checked"];
	checkedAllPages?: DataViewProps["checkedAllPages"];
	bulkActions?: DataViewProps["bulkActions"];
	sort?: DataViewProps["sort"];
	count?: DataViewProps["count"];
	rowCount?: number;
	onSortChange?: DataViewProps["onSortChange"];
	onCheckAllClick?: () => void;
	onCheckAllPagesClick?: () => void;
	onColumnsChange?: DataViewProps["onColumnsChange"];
	additionalActions?: DataViewProps["additionalActions"];
	primaryActions?: DataViewProps["primaryActions"];
	onCheckboxClick?: () => void;
	activeColumnObjs?: DataViewProps["columns"];
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
}

function DataViewDisplayList(props: DataViewDisplayListProps) {
	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.activeColumnObjs);
	}, [props.data, props.activeColumnObjs]);

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
			/>
			<DataViewTBody
				checked={props.checked}
				columns={props.activeColumnObjs}
				data={props.data}
				transformedData={transformedData}
				bulkActions={props.bulkActions}
				additionalActions={props.additionalActions}
				primaryActions={props.primaryActions}
				onCheckboxClick={props.onCheckboxClick}
				onReorder={props.onReorder}
			/>
		</StyledTable>
	)
}

export default DataViewDisplayList;
