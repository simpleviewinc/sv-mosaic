import * as React from "react";
import styled from "styled-components";
import {
	closestCenter,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors
} from "@dnd-kit/core";
import {
	restrictToVerticalAxis,
	restrictToFirstScrollableAncestor
} from "@dnd-kit/modifiers";
import {
	arrayMove,
	sortableKeyboardCoordinates,
	SortableContext,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";

import DataViewTHead from "../DataViewTHead";
import DataViewTBody from "../DataViewTBody";
import { useMemo } from "react";
import { transformRows } from "@root/utils/dataViewTools";
import { DataViewDisplayListProps } from "./DataViewDisplayListTypes";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`

function DataViewDisplayList(props: DataViewDisplayListProps) {
	const { primaryActions, additionalActions } = props;
	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.activeColumnObjs);
	}, [props.data, props.activeColumnObjs]);

	const hasActions = useMemo(
		() =>
			(additionalActions && additionalActions.length > 0) ||
			(primaryActions && primaryActions.length > 0),
		[additionalActions, primaryActions]
	);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			const ids = props.data.map(({ id }) => String(id));

			props.onReorder(arrayMove(
				ids,
				ids.indexOf(active.id),
				ids.indexOf(over.id)
			));
		}
	}

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			autoScroll={{layoutShiftCompensation: false}}
			modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
		>
			<SortableContext
				items={transformedData.map(item => item.id as string)}
				strategy={verticalListSortingStrategy}
			>
				<StyledTable>
					<DataViewTHead
						checked={props.checked}
						checkedAllPages={props.checkedAllPages}
						columns={props.activeColumnObjs}
						allColumns={props.columns}
						data={props.data}
						bulkActions={props.bulkActions}
						sort={props.sort}
						count={props.count}
						rowCount={props.rowCount}
						onSortChange={props.onSortChange}
						onCheckAllClick={props.onCheckAllClick}
						onCheckAllPagesClick={props.onCheckAllPagesClick}
						onColumnsChange={props.onColumnsChange}
						onReorder={props?.onReorder}
						allChecked={props.allChecked}
						anyChecked={props.anyChecked}
						showBulkAll={props.showBulkAll}
						hasActions={hasActions}
						disabled={props.disabled}
					/>
					<DataViewTBody
						checked={props.checked}
						columns={props.activeColumnObjs}
						data={props.data}
						hasActions={hasActions}
						transformedData={transformedData}
						bulkActions={props.bulkActions}
						additionalActions={props.additionalActions}
						disabled={props.disabled}
						primaryActions={props.primaryActions}
						onCheckboxClick={props.onCheckboxClick}
						onReorder={props.onReorder}
					/>
				</StyledTable>
			</SortableContext>
		</DndContext>
	)
}

export default DataViewDisplayList;
