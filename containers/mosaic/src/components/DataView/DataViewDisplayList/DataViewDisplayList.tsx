import type { Modifier } from "@dnd-kit/core";

import React, { useCallback, useMemo, useRef } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import styled from "styled-components";

import type { DataViewDisplayListProps } from "./DataViewDisplayListTypes";

import DataViewTHead from "../DataViewTHead";
import DataViewTBody from "../DataViewTBody";
import { transformRows } from "../dataViewTools";
import { restrictToBoundingRect } from "@root/utils/dom/restrictToBoundingRect";
import { sum } from "@root/utils/math/sum";
import testIds from "@root/utils/testIds";

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

function DataViewDisplayList(props: DataViewDisplayListProps) {
	const tBodyRef = useRef<HTMLTableSectionElement>();
	const { rowActions } = props;
	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.activeColumnObjs);
	}, [props.data, props.activeColumnObjs]);

	const hasActions = sum(Object.entries(rowActions).map(([, { primary, additional }]) => primary.length + additional.length)) > 0;

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			const ids = props.data.map(({ id }) => String(id));

			props.onReorder(arrayMove(
				ids,
				ids.indexOf(active.id),
				ids.indexOf(over.id),
			));
		}
	}

	const restrictToTBody = useCallback<Modifier>(({
		draggingNodeRect,
		transform,
	}) => {
		if (!draggingNodeRect || !tBodyRef.current) {
			return transform;
		}

		const rect = tBodyRef.current.getBoundingClientRect();

		if (!rect) {
			return transform;
		}

		return restrictToBoundingRect(
			transform,
			draggingNodeRect,
			rect,
		);
	}, []);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			autoScroll={{ layoutShiftCompensation: false }}
			modifiers={[restrictToVerticalAxis, restrictToTBody]}
		>
			<SortableContext
				items={transformedData.map(item => item.id)}
				strategy={verticalListSortingStrategy}
			>
				<StyledTable
					data-testid={testIds.DATA_VIEW_DISPLAY_LIST}
				>
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
						actionsHidden={props.actionsHidden}
						disabled={props.disabled}
						rowActions={rowActions}
						onCheckboxClick={props.onCheckboxClick}
						onReorder={props.onReorder}
						ref={tBodyRef}
					/>
				</StyledTable>
			</SortableContext>
		</DndContext>
	);
}

export default DataViewDisplayList;
