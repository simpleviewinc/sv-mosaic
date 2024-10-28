import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { DataViewColumnDrawerColumnProps } from "./DataViewColumnDrawerTypes";

import { ColumnItem } from "./DataViewColumnDrawer.styled";

function DataViewColumnDrawerColumn({ name, allColumns }: DataViewColumnDrawerColumnProps) {
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
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={style}
			$isDragging={isDragging}
		>
			<DragIndicatorIcon />
			<span>{column.label}</span>
		</ColumnItem>
	);
}

export default DataViewColumnDrawerColumn;
