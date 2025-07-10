import React, { forwardRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import type { DataViewTrDndProps, DataViewTrProps } from "./DataViewTrTypes";

import Checkbox from "@root/components/Checkbox";
import DataViewTd from "../DataViewTd";
import DataViewActionsButtonRow from "../DataViewActionsButtonRow";
import { TableRow } from "./DataViewTr.styled";
import Button from "@root/components/Button";
import testIds from "@root/utils/testIds";

const DataViewTrStatic = forwardRef<HTMLTableRowElement, DataViewTrProps>(({
	checked,
	onReorder,
	disabled,
	onCheckboxClick,
	hasActions,
	primaryActions,
	additionalActions,
	actionsHidden,
	originalRowData,
	columns,
	row,
	isDragOverlay,
	style,
	...props
}, ref) => {
	return (
		<TableRow
			style={style}
			className={checked && "checked"}
			ref={ref}
			$isDragOverlay={isDragOverlay}
		>
			{onReorder && (
				<DataViewTd
					key="_draggable"
					data-testid={testIds.DATA_VIEW_CELL_DRAG}
				>
					<Button
						disabled={disabled}
						color="black"
						variant="icon"
						mIcon={DragIndicatorIcon}
						muiAttrs={{ ...props }}
					/>
				</DataViewTd>
			)}
			{onCheckboxClick && (
				<DataViewTd
					key="_bulk"
					data-testid={testIds.DATA_VIEW_CELL_CHECK}
				>
					<Checkbox
						checked={checked === true}
						onClick={onCheckboxClick}
						disabled={disabled}
					/>
				</DataViewTd>
			)}
			{hasActions && (
				<DataViewTd>
					<DataViewActionsButtonRow
						primaryActions={primaryActions}
						additionalActions={additionalActions}
						actionsHidden={actionsHidden}
						disabled={disabled}
						originalRowData={originalRowData}
						activeDisplay="list"
					/>
				</DataViewTd>
			)}
			{columns.map(column => {
				return (
					<DataViewTd
						key={column.name}
						ariaLabel={column.label}
						expandCell={true}
						style={column.style}
					>
						{row[column.name]}
					</DataViewTd>
				);
			})}
		</TableRow>
	);
});

DataViewTrStatic.displayName = "DataViewTrStatic";

export function DataViewTrSortable(props: DataViewTrDndProps) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: props.originalRowData.id });

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

	return (
		<DataViewTrStatic
			{...props}
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={style}
			isDragOverlay={isDragging}
		/>
	);
}

function DataViewTr(props: DataViewTrProps) {
	if (!props.onReorder) {
		return <DataViewTrStatic {...props} />;
	}

	return <DataViewTrSortable {...props} />;
}

export default DataViewTr;
