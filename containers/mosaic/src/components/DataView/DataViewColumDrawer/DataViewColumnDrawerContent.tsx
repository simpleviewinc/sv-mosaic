import React, { useMemo, useState } from "react";
import { useMosaicTranslation } from "@root/i18n";
import type { DataViewColumnDrawerContentProps } from "./DataViewColumnDrawerTypes";
import { StyledWrapper } from "./DataViewColumnDrawer.styled";
import DataViewColumnDrawerColumns from "./DataViewColumnDrawerColumns";
import type { MosaicLabelValue } from "@root/types";
import PickerPanel, { PickerPanelActive, PickerPanelSubtitle } from "@root/components/PickerPanel";

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

	const onSave = function() {
		props.onClose();
		props.onChange(activeColumns);
	};

	const onColumnsChange = function(data) {
		setActiveColumns(data.map(d => d.value));
	};

	const options = props.allColumns
		.map((column) => {
			return {
				label: column.label,
				value: column.name,
			};
		})
		.sort((a, b) => {
			return a.label.localeCompare(b.label);
		});

	return (
		<StyledWrapper>
			<PickerPanel
				title={t("mosaic:DataView.column_settings")}
				options={options}
				checked={checkedOptions}
				onChange={onColumnsChange}
				onSave={onSave}
				onCancel={props.onClose}
				onBack={props.onClose}
				activePanel={(
					<PickerPanelActive>
						<PickerPanelSubtitle>{t("mosaic:DataView.column_order")}</PickerPanelSubtitle>
						<DataViewColumnDrawerColumns
							activeColumns={activeColumns}
							allColumns={props.allColumns}
							onChange={setActiveColumns}
						/>
					</PickerPanelActive>
				)}
			/>
		</StyledWrapper>
	);
}

export default DataViewColumnDrawerContent;
