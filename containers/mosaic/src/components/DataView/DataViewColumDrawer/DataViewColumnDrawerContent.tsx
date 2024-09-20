import React, { useState } from "react";
import CheckboxList from "@root/components/CheckboxList";
import { useMosaicTranslation } from "@root/i18n";
import PageHeader from "../../PageHeader";
import type { ButtonProps } from "../../Button";
import type { DataViewColumnDrawerContentProps } from "./DataViewColumnDrawerTypes";
import {
	StyledWrapper,
	ColumnTitle,
} from "./DataViewColumnDrawer.styled";
import DataViewColumnDrawerColumns from "./DataViewColumnDrawerColumns";

function DataViewColumnDrawerContent(props: DataViewColumnDrawerContentProps) {
	const [state, setState] = useState({
		activeColumns: props.columns.map((val) => val.name),
		checkedOptions: props.columns.map(col => ({ label: col.label, value: col.name })),
	});

	const { t } = useMosaicTranslation();

	const saveColumns = function() {
		props.onClose();
		props.onChange(state.activeColumns);
	};

	const onColumnsChange = function(data) {
		setState({
			...state,
			activeColumns: data.map(d => d.value),
			checkedOptions: data,
		});
	};

	/**
	 * When a drag has ended the order of the columns are updated.
	 * @param e drag event.
	 */
	// const handleDragEnd = ({ destination, source }: DropResult) => {
	// 	if (!destination) return;

	// 	const activeColumns = [...state.activeColumns];
	// 	const [source_data] = activeColumns.splice(source.index, 1);
	// 	activeColumns.splice(destination.index, 0, source_data);

	// 	setState({
	// 		...state,
	// 		activeColumns,
	// 	});
	// };

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
				onBack={props.onClose}
				backLabel={t("mosaic:DataView.cancel_table_settings")}
			/>
			<StyledWrapper>
				<div className="left">
					<ColumnTitle>{t("mosaic:DataView.columns")}</ColumnTitle>
					<CheckboxList
						options={columnOptions}
						checked={state.checkedOptions}
						onChange={onColumnsChange}
					/>
				</div>
				<div className="right">
					<ColumnTitle>{t("mosaic:DataView.column_order")}</ColumnTitle>
					<DataViewColumnDrawerColumns
						activeColumns={state.activeColumns}
						onReorder={(activeColumns) => setState({ ...state, activeColumns })}
						allColumns={props.allColumns}
					/>
				</div>
			</StyledWrapper>
		</div>
	);
}

export default DataViewColumnDrawerContent;
