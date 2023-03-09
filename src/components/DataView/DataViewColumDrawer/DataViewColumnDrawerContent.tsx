import React, { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CheckboxList from "@root/components/CheckboxList";
import { useMosaicTranslation } from "@root/i18n";
import PageHeader from "../../PageHeader";
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from "react-beautiful-dnd";
import { ButtonProps } from "../../Button";
import { DataViewColumnDrawerContentProps } from "./DataViewColumnDrawerTypes";
import {
	StyledWrapper,
	ColumnTitle,
	ColumnItem,
} from "./DataViewColumnDrawer.styled";

function DataViewColumnDrawerContent(props: DataViewColumnDrawerContentProps) {
	const [state, setState] = useState({
		activeColumns: props.columns.map((val) => val.name),
	});

	const { t } = useMosaicTranslation();

	const saveColumns = function() {
		props.onClose();
		props.onChange(state.activeColumns);
	};

	const onColumnsChange = function(data) {
		setState({
			...state,
			activeColumns: data,
		});
	};

	/**
	 * When a drag has ended the order of the columns are updated.
	 * @param e drag event.
	 */
	const handleDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;

		const activeColumns = [...state.activeColumns];
		const [source_data] = activeColumns.splice(source.index, 1);
		activeColumns.splice(destination.index, 0, source_data);

		setState({
			...state,
			activeColumns,
		});
	};

	const columnOptions = props.allColumns
		.map((column) => {
			return {
				label: column.label,
				value: column.name,
			};
		})
		.sort((a, b) => {
			return a.label.localeCompare(b.label);
		});

	const drawerButton: ButtonProps[] = [
		{
			label: t("mosaic:common.cancel"),
			color: "gray",
			variant: "outlined",
			onClick: props.onClose,
		},
		{
			label: t("mosaic:common.apply"),
			onClick: saveColumns,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<div>
			<PageHeader
				title={t("mosaic:DataView.table_settings")}
				buttons={drawerButton}
			/>
			<StyledWrapper>
				<div className="left">
					<ColumnTitle>{t("mosaic:DataView.columns")}</ColumnTitle>
					<CheckboxList
						options={columnOptions}
						checked={state.activeColumns}
						onChange={onColumnsChange}
					/>
				</div>
				<div className="right">
					<ColumnTitle>{t("mosaic:DataView.column_order")}</ColumnTitle>
					<DragDropContext onDragEnd={handleDragEnd}>
						<Droppable droppableId="droppable-columns">
							{(provider) => (
								<div ref={provider.innerRef} {...provider.droppableProps} className='droppable-columns'>
									{state.activeColumns.map((name, i) => {
										const column = props.allColumns.find(
											(val) => val.name === name
										);

										return (
											<Draggable
												key={`${column.name}-${i}`}
												draggableId={`${column.name}-${i}`}
												index={i}
											>
												{(provided) => (
													<ColumnItem
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<DragIndicatorIcon />
														<span>{column.label}</span>
													</ColumnItem>
												)}
											</Draggable>
										);
									})}
									{provider.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			</StyledWrapper>
		</div>
	);
}

export default DataViewColumnDrawerContent;
