import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DataViewTr from "./DataViewTr";
import theme from "@root/theme";
import { MosaicObject } from "@root/types";
import { DataViewProps } from "./DataViewTypes";

const StyledTBody = styled.tbody`
	& > tr {
		border-bottom: 1px solid ${theme.newColors.grey2["100"]};

		& > td:first-child {
			padding-left: 16px;
		}

		& > td:last-child {
			padding-right: 16px;
		}
	}

	& > tr > td {
		padding: 8px;
	}

	& > tr > td.bold {
		font-weight: 600;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`

interface DataViewTBodyProps {
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: DataViewProps["onCheckChange"];
	transformedData: MosaicObject[];
	data: DataViewProps["data"];
	bulkActions?: DataViewProps["bulkActions"];
	primaryActions?: DataViewProps["primaryActions"];
	additionalActions?: DataViewProps["additionalActions"];
	checked?: DataViewProps["checked"];
	columns: DataViewProps["columns"];
}

function DataViewTBody(props: DataViewTBodyProps) {
	const onCheckboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}

	/**
	 * When a drag has ended the rows are updated
	 * @param e drag event. It will execute the onReorder
	 * callback with the new rows
	 */
	const handleDragEnd =  ({ destination, source }: DropResult) => {
		if (!destination) return;

		const rowsCopy = [...props.data].map(row => row.id) as string[];
		const [source_data] = rowsCopy.splice(source.index, 1);
		rowsCopy.splice(destination.index, 0, source_data);

		props.onReorder(rowsCopy);
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable-rows">
				{(provider) => (
					<StyledTBody ref={provider.innerRef} {...provider.droppableProps}>
						{props.transformedData.map((row, i) => (
							<DataViewTr
								key={i}
								rowIdx={i}
								row={row}
								originalRowData={props.data[i]}
								bulkActions={props.bulkActions}
								primaryActions={props.primaryActions}
								additionalActions={props.additionalActions}
								onCheckboxClick={props.onCheckboxClick ? onCheckboxClick(i) : undefined}
								checked={props.checked ? props.checked[i] : false}
								columns={props.columns}
								onReorder={props.onReorder}
							/>
						))}
						{provider.placeholder}
					</StyledTBody>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default DataViewTBody;
