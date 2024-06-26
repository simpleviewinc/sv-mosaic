import { CSSProperties } from "react";
import { DataViewProps } from "../DataViewTypes";

export interface DataViewTrProps {
	checked: boolean;
	hasActions: boolean;
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: React.MouseEventHandler<HTMLButtonElement>;
	primaryActions?: DataViewProps["primaryActions"];
	additionalActions?: DataViewProps["additionalActions"];
	actionsHidden?: boolean;
	disabled?: DataViewProps["disabled"];
	originalRowData: DataViewProps["data"][number];
	columns: DataViewProps["columns"];
	row?: { [x: string]: any };
	style?: CSSProperties;
	isDragOverlay?: boolean;
}

export type DataViewTrDndProps = DataViewTrProps;
