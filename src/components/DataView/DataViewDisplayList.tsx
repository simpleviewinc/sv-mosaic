import * as React from "react";
import { useMemo } from "react";
import styled from "styled-components";

import DataViewTHead from "./DataViewTHead";
import DataViewTBody from "./DataViewTBody";
import { transformRows } from "../../utils/dataViewTools";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

interface DataViewDisplayListProps {
	activeColumns?: any;
	columns?: any;
	data?: any;
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
}

function DataViewDisplayList(props: DataViewDisplayListProps) {
	// todo validate props
	const activeColumns = useMemo(() => {
		return props.activeColumns || props.columns.map(val => val.name);
	}, [props.activeColumns, props.columns]);

	// generate an array of columns based on the ones that are marked active
	const activeColumnObjs = useMemo(() => {
		return activeColumns.map(name => {
			const column = props.columns.find(val => val.name === name);
			return column;
		});
	}, [activeColumns, props.columns]);

	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, activeColumnObjs);
	}, [props.data, activeColumnObjs]);

	return (
		<StyledTable>
			<DataViewTHead
				checked={props.checked}
				checkedAllPages={props.checkedAllPages}
				columns={activeColumnObjs}
				allColumns={props.columns}
				data={transformedData}
				bulkActions={props.bulkActions}
				sort={props.sort}
				count={props.count}
				rowCount={props.rowCount}
				onSortChange={props.onSortChange}
				onCheckAllClick={props.onCheckAllClick}
				onCheckAllPagesClick={props.onCheckAllPagesClick}
				onColumnsChange={props.onColumnsChange}
			/>
			<DataViewTBody
				checked={props.checked}
				columns={activeColumnObjs}
				data={props.data}
				transformedData={transformedData}
				bulkActions={props.bulkActions}
				additionalActions={props.additionalActions}
				primaryActions={props.primaryActions}
				onCheckboxClick={props.onCheckboxClick}
			/>
		</StyledTable>
	)
}

export default DataViewDisplayList;
