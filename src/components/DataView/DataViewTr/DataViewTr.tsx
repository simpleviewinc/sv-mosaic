import React from "react";

import Checkbox from "@root/components/Checkbox";
import DataViewTd from "../DataViewTd";
import DataViewActionsButtonRow from "../DataViewActionsButtonRow";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { TableRow } from "./DataViewTr.styled";
import { DataViewTrProps } from "./DataViewTrTypes";
// import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";

// interface DataViewTrProps {
// 	bulkActions: string | any[];
// 	checked: boolean;
// 	onCheckboxClick: React.MouseEventHandler<HTMLButtonElement>;
// 	primaryActions: DataViewAction[];
// 	additionalActions: DataViewAdditionalAction[];
// 	originalRowData: MosaicObject;
// 	columns: any[];
// 	row: {
// 		[x: string]: any;
// 	};
// }

//TODO PROPS
function DataViewTr(props: DataViewTrProps) {
	return (
		<Draggable
			key={props.row.id}
			draggableId={props.row.id}
			index={props.rowIdx}
			isDragDisabled={!props?.onReorder}
		>
			{(provider) => (
				<TableRow {...provider.draggableProps} ref={provider.innerRef} className={props.checked && "checked"}>
					{
						props?.onReorder &&
						<DataViewTd key="_draggable" draggableProvider={provider} paddingRight={true} paddingLeft={true}>
							<DragIndicatorIcon style={{display: "flex"}}/>
						</DataViewTd>
					}
					{
						props?.bulkActions?.length > 0 &&
						<DataViewTd key="_bulk" paddingRight={true} paddingLeft={true}>
							<Checkbox
								checked={props.checked === true}
								onClick={props.onCheckboxClick}
							/>
						</DataViewTd>
					}
					<DataViewTd paddingRight={true} paddingLeft={!!props?.bulkActions?.length}>
						<DataViewActionsButtonRow
							primaryActions={props.primaryActions}
							additionalActions={props.additionalActions}
							originalRowData={props.originalRowData}
						/>
					</DataViewTd>
					{
						props.columns.map(column => {
							return (
								<DataViewTd
									key={column.name}
									className={column.style && column.style.bold && "bold"}
									paddingRight={true}
									expandCell={true}
									bold={column.style && column.style.bold}
									italic={column.style && column.style.italic}
									strikeThrough={column.style && column.style.strikeThrough}
									noWrap={column.style && column.style.noWrap}
									ellipsis={column.style && column.style.ellipsis}
									maxWidth={column.style && column.style.maxWidth}
									textTransform={column.style && column.style.textTransform}
								>
									{props.row[column.name]}
								</DataViewTd>
							);
						})
					}
				</TableRow>
			)}
		</Draggable>
	);
}

export default DataViewTr;
