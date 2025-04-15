import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ClearIcon from "@mui/icons-material/Clear";

import type { DataViewColumnDrawerColumnProps } from "./DataViewColumnDrawerTypes";

import { ColumnItem, ColumnItemLabel } from "./DataViewColumnDrawer.styled";
import Button from "@root/components/Button";

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
			<ColumnItemLabel>{column.label}</ColumnItemLabel>
			<Button
				variant="icon"
				color="gray"
				mIcon={ClearIcon}
				tooltip="Remove Column"
			/>
		</ColumnItem>
	);
}

export default DataViewColumnDrawerColumn;
