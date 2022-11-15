import * as React from "react";
import styled from "styled-components";

import DataViewTHead from "./DataViewTHead";
import DataViewTBody from "./DataViewTBody";
import { DataViewProps } from "./DataViewTypes";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

interface DataViewDisplayListProps {
	activeColumns?: any;
	columns?: any;
	data?: any;
	onReorder?: DataViewProps["onReorder"];
	checked?: any;
	checkedAllPages?: any;
	bulkActions?: any;
	sort?: any;
	count?: any;
	rowCount?: any;
	onSortChange?: any;
	onCheckAllClick?: any;
	onCheckAllPagesClick?: any;
	onColumnsChange?: any;
	additionalActions?: any;
	primaryActions?: any;
	onCheckboxClick?: any;
	transformedData?: any;
	activeColumnObjs?: any;
}

function DataViewDisplayList(props: DataViewDisplayListProps) {
	return (
		<StyledTable>
			<DataViewTHead
				checked={props.checked}
				checkedAllPages={props.checkedAllPages}
				columns={props.activeColumnObjs}
				allColumns={props.columns}
				data={props.transformedData}
				bulkActions={props.bulkActions}
				sort={props.sort}
				count={props.count}
				rowCount={props.rowCount}
				onSortChange={props.onSortChange}
				onCheckAllClick={props.onCheckAllClick}
				onCheckAllPagesClick={props.onCheckAllPagesClick}
				onColumnsChange={props.onColumnsChange}
				onReorder={props?.onReorder}
			/>
			<DataViewTBody
				checked={props.checked}
				columns={props.activeColumnObjs}
				data={props.data}
				transformedData={props.transformedData}
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
