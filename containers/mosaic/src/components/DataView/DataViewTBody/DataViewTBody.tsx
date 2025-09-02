import React, { forwardRef, memo } from "react";
import styled from "styled-components";

import type { DataViewTBodyProps } from "./DataViewTBodyTypes";

import DataViewTr from "../DataViewTr";
import testIds from "@root/utils/testIds";

const StyledTBody = styled.tbody`
	& > tr {
		& > td:first-child {
			padding-left: 16px;
		}

		& > td:last-child {
			padding-right: 16px;
		}

		&:last-child > td {
			border-bottom: 0;
		}
	}

	& > tr > td {
		padding: 8px;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`;

const DataViewTBody = forwardRef<HTMLTableSectionElement, DataViewTBodyProps>((props, ref) => (
	<StyledTBody
		ref={ref}
		data-testid={testIds.DATA_VIEW_TBODY}
	>
		{props.transformedData.map((row, i) => (
			<DataViewTr
				key={row.id}
				row={row}
				originalRowData={props.data[i]}
				primaryActions={props.rowActions?.[row.id]?.primary}
				additionalActions={props.rowActions?.[row.id]?.additional}
				actionsHidden={props.actionsHidden}
				disabled={props.disabled}
				onCheckboxClick={props.onCheckboxClick ? () => props.onCheckboxClick(i) : undefined}
				checked={props.checked ? props.checked[i] : false}
				columns={props.columns}
				onReorder={props.onReorder}
				hasActions={props.hasActions}
			/>
		))}
	</StyledTBody>
));

DataViewTBody.displayName = "DataViewTBody";

export default memo(DataViewTBody);
