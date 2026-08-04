import React from "react";
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	closestCenter,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
	restrictToParentElement,
	restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

import type { DataViewColumnDrawerColumnsProps } from "./DataViewColumnDrawerTypes";

import DataViewColumnDrawerColumn from "./DataViewColumnDrawerColumn";

function DataViewColumnDrawerColumns({ activeColumns, allColumns, onChange }: DataViewColumnDrawerColumnsProps) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			onChange(arrayMove(
				activeColumns,
				activeColumns.indexOf(active.id),
				activeColumns.indexOf(over.id),
			));
		}
	}

	function onItemRemove(column: string) {
		onChange(activeColumns.filter((item) => item !== column));
	}

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
				autoScroll={{ layoutShiftCompensation: false }}
				modifiers={[restrictToVerticalAxis, restrictToParentElement]}
			>
				<SortableContext
					items={activeColumns}
					strategy={verticalListSortingStrategy}
				>
					{activeColumns.map(column => (
						<DataViewColumnDrawerColumn
							key={column}
							name={column}
							allColumns={allColumns}
							onRemove={onItemRemove}
						/>
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
}

export default DataViewColumnDrawerColumns;
