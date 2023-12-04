import React, { useMemo, memo } from "react";
import styled from "styled-components";
import DataViewTr from "../DataViewTr";
import theme from "@root/theme";
import { DataViewTBodyProps, DataViewTBodySortableProps } from "./DataViewTBodyTypes";
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

const StyledTBody = styled.tbody`
	& > tr {
		border-bottom: 1px solid ${theme.newColors.grey2["100"]};

		& > td:first-child {
			padding-left: 16px;
		}

		& > td:last-child {
			padding-right: 16px;
		}
	}

	& > tr > td {
		padding: 8px;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`

function DataViewTBodySortable(props: DataViewTBodySortableProps) {
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
				items={props.transformedData.map(item => item.id as string)}
				strategy={verticalListSortingStrategy}
			>
				{props.children}
			</SortableContext>
		</DndContext>
	)
}

function DataViewTBody(props: DataViewTBodyProps) {
	const children = useMemo(() => (
		<StyledTBody>
			{props.transformedData.map((row, i) => (
				<DataViewTr
					key={row.id as string}
					row={row}
					originalRowData={props.data[i]}
					primaryActions={props.primaryActions}
					additionalActions={props.additionalActions}
					disabled={props.disabled}
					onCheckboxClick={props.onCheckboxClick ? () => props.onCheckboxClick(i) : undefined}
					checked={props.checked ? props.checked[i] : false}
					columns={props.columns}
					onReorder={props.onReorder}
					hasActions={props.hasActions}
				/>
			))}
		</StyledTBody>
	), [
		props.transformedData,
		props.data,
		props.primaryActions,
		props.additionalActions,
		props.disabled,
		props.onCheckboxClick,
		props.checked,
		props.columns,
		props.onReorder,
		props.hasActions
	])

	if (!props.onReorder) {
		return children
	}

	return (
		<DataViewTBodySortable
			data={props.data}
			transformedData={props.transformedData}
			onReorder={props.onReorder}
		>
			{children}
		</DataViewTBodySortable>
	)
}

export default memo(DataViewTBody);
