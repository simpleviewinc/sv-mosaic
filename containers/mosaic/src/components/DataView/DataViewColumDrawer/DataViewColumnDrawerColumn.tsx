import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ClearIcon from "@mui/icons-material/Clear";

import type { DataViewColumnDrawerColumnProps } from "./DataViewColumnDrawerTypes";

import { ColumnDraggable, ColumnItem, ColumnItemLabel } from "./DataViewColumnDrawer.styled";
import Button from "@root/components/Button";

function DataViewColumnDrawerColumn({ name, allColumns, onRemove }: DataViewColumnDrawerColumnProps) {
	const column = allColumns.find((c) => c.name === name);

	if (!column) {
		throw new Error(`Column "${name}" not found in column list: ${allColumns.map(({ name }) => name).join(", ")}`);
	}

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: column.name });

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

	return (
		<ColumnItem
			ref={setNodeRef}
			style={style}
			$isDragging={isDragging}
		>
			<ColumnDraggable
				{...attributes}
				{...listeners}
			>
				<DragIndicatorIcon />
				<ColumnItemLabel>{column.label}</ColumnItemLabel>
			</ColumnDraggable>
			<Button
				variant="icon"
				color="gray"
				mIcon={ClearIcon}
				tooltip="Remove Column"
				onClick={() => onRemove(name)}
			/>
		</ColumnItem>
	);
}

export default DataViewColumnDrawerColumn;
