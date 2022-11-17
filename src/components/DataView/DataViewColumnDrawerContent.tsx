import React, { useState } from "react";
import styled from "styled-components";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import theme from "@root/theme";
import CheckboxList from "@root/components/CheckboxList";
import { useMosaicTranslation } from "@root/i18n";
import DrawerHeader from "../DrawerHeader";
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from "react-beautiful-dnd";
import { DataViewProps } from "./DataViewTypes";
import { ButtonProps } from "../Button";

const ColumnTitle = styled.h2`
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 20px;
  font-weight: ${theme.fontWeight.normal};
  line-height: 24px;
  margin: 0 0 24px 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  & > .left {
    border-right: 2px solid ${theme.newColors.grey2["100"]};
    flex: 1;
    padding: 0 32px 0 40px;
    width: 265px;
  }

  & > .left .listItem {
    margin: 3px 0px;
    background: white;
  }

  & > .right {
    flex: 1;
		margin: 0 44px 0 32px;
    width: 280px;
  }
`;

const ColumItem = styled.div`
	display: flex;
	margin-bottom: 27.5px;

	span {
		margin-left: 23px;
	}

	.MuiSvgIcon-root {
		color: ${theme.newColors.grey3["100"]};
	}
`;

interface DataViewColumnDrawerContentProps {
  columns?: DataViewProps["columns"];
  onClose?: () => void;
  onChange?: DataViewProps["onColumnsChange"];
  allColumns?: DataViewProps["columns"];
}

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
			<DrawerHeader
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
								<div ref={provider.innerRef} {...provider.droppableProps}>
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
													<ColumItem
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<DragIndicatorIcon />
														<span>{column.label}</span>
													</ColumItem>
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
