import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DataViewTr from "./DataViewTr";
import theme from "@root/theme";
import { MosaicObject } from "@root/types";
// import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";

const StyledTBody = styled.tbody`
	& > tr {
		border-bottom: ${theme.borders.lightGray};
	}

	& > tr > td {
		padding: 5px 0px;
	}

	& > tr > td.bold {
		font-weight: 600;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`

interface DataViewTBodyProps {
	onReorder?: (rows: MosaicObject[]) => void;
	onCheckboxClick?: any;
	transformedData?: MosaicObject[];
	data?: any;
	bulkActions?: any;
	primaryActions?: any;
	additionalActions?: any;
	checked?: any;
	columns?: any;
}
// interface DataViewTBodyProps {
// 	onCheckboxClick?: any;
// 	transformedData?: any;
// 	data?: {
// 		[x: string]: MosaicObject;
// 	};
// 	bulkActions?: any;
// 	primaryActions?: DataViewAction[];
// 	additionalActions?: DataViewAdditionalAction[];
// 	checked?: {
// 		[x: string]: boolean;
// 	};
// 	columns?: any;
// }

function DataViewTBody(props: DataViewTBodyProps) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "checked",
				type : "array",
				required : true
			},
			{
				name : "onReorder",
				type : "function",
			},
			{
				name : "columns",
				type : "array",
				required : true
			},
			{
				name : "data",
				type : "array",
				required : true
			},
			{
				name : "transformedData",
				type : "array",
				required : true
			},
			{
				name : "primaryActions",
				type : "array"
			},
			{
				name : "additionalActions",
				type : "array"
			},
			{
				name : "bulkActions",
				type : "array"
			},
			{
				name : "onCheckboxClick",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});

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

		const rowsCopy = [...props.data].map(row => row.id);
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
								onCheckboxClick={onCheckboxClick(i)}
								checked={props.checked[i]}
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
