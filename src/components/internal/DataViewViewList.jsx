import React from "react";
import styled from "styled-components";

import GridTHead from "./GridTHead.jsx";
import GridTBody from "./GridTBody.jsx";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

function DataViewViewList(props) {
	// todo validate props
	
	return (
		<StyledTable>
			<GridTHead
				checked={props.checked}
				columns={props.columns}
				allColumns={props.allColumns}
				data={props.data}
				bulkActions={props.bulkActions}
				sort={props.sort}
				onSortChange={props.onSortChange}
				onCheckAllClick={props.onCheckAllClick}
				onColumnsChange={props.onColumnsChange}
			/>
			<GridTBody
				checked={props.checked}
				columns={props.columns}
				data={props.data}
				bulkActions={props.bulkActions}
				additionalActions={props.additionalActions}
				primaryActions={props.primaryActions}
				onCheckboxClick={props.onCheckboxClick}
			/>
		</StyledTable>
	)
}

export default DataViewViewList;