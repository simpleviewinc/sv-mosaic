import React, { useMemo, useState } from "react";
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
import type { MosaicLabelValue } from "@root/types";

function DataViewColumnDrawerContent(props: DataViewColumnDrawerContentProps) {
	const [activeColumns, setActiveColumns] = useState<string[]>(props.columns.map((val) => val.name));

	const checkedOptions = useMemo(() => activeColumns.reduce<MosaicLabelValue[]>((acc, curr) => {
		const column = props.allColumns.find(({ name }) => name === curr);

		if (!column) {
			return acc;
		}

		return [...acc, { value: column.name, label: column.label }];
	}, []), [activeColumns, props.allColumns]);

	const { t } = useMosaicTranslation();

	const saveColumns = function() {
		props.onClose();
		props.onChange(activeColumns);
	};

	const onColumnsChange = function(data) {
		setActiveColumns(data.map(d => d.value));
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
				onBack={props.onClose}
				backLabel={t("mosaic:DataView.cancel_table_settings")}
			/>
			<StyledWrapper>
				<div className="left">
					<ColumnTitle>{t("mosaic:DataView.columns")}</ColumnTitle>
					<CheckboxList
						options={columnOptions}
						checked={checkedOptions}
						onChange={onColumnsChange}
					/>
				</div>
				<div className="right">
					<ColumnTitle>{t("mosaic:DataView.column_order")}</ColumnTitle>
					<DataViewColumnDrawerColumns
						activeColumns={activeColumns}
						allColumns={props.allColumns}
						onChange={setActiveColumns}
					/>
				</div>
			</StyledWrapper>
		</div>
	);
}

export default DataViewColumnDrawerContent;
