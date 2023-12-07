import React, { forwardRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import theme from "@root/theme";
import Checkbox from "@root/components/Checkbox";

import DataViewTd from "../DataViewTd";
import DataViewActionsButtonRow from "../DataViewActionsButtonRow";
import { TableRow, TableRowDragHandle } from "./DataViewTr.styled";
import { DataViewTrDndProps, DataViewTrProps } from "./DataViewTrTypes";

const DataViewTrStatic = forwardRef<HTMLTableRowElement, DataViewTrProps>(({
	checked,
	onReorder,
	disabled,
	onCheckboxClick,
	hasActions,
	primaryActions,
	additionalActions,
	originalRowData,
	columns,
	row,
	isDragOverlay,
	...props
}, ref) => {

	return (
		<TableRow
			style={props.style}
			className={checked && "checked"}
			ref={ref}
			$isDragOverlay={isDragOverlay}
		>
			{onReorder && (
				<DataViewTd key="_draggable">
					<TableRowDragHandle {...props} style={{display: "flex", color: disabled ? theme.colors.blackDisabled : theme.newColors.almostBlack["100"]}}/>
				</DataViewTd>
			)}
			{onCheckboxClick && (
				<DataViewTd key="_bulk">
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
						bold={column.style && column.style.bold}
						italic={column.style && column.style.italic}
						strikeThrough={column.style && column.style.strikeThrough}
						noWrap={column.style && column.style.noWrap}
						ellipsis={column.style && column.style.ellipsis}
						maxWidth={column.style && column.style.maxWidth}
						textTransform={column.style && column.style.textTransform}
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
		isDragging
	} = useSortable({id: props.originalRowData.id as string});

	const style = {
		transform: CSS.Translate.toString(transform),
		transition
	}

	return (
		<DataViewTrStatic
			{...props}
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={style}
			isDragOverlay={isDragging}
		/>
	)
}

function DataViewTr(props: DataViewTrProps) {
	if (!props.onReorder) {
		return <DataViewTrStatic {...props} />
	}

	return <DataViewTrSortable {...props} />
}

export default DataViewTr;
