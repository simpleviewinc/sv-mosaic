
import { CSSProperties } from "react";
import { MosaicObject } from "@root/types";
import { DataViewProps } from "../DataViewTypes";

export interface DataViewTrProps {
	checked: boolean;
	hasActions: boolean;
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: React.MouseEventHandler<HTMLButtonElement>;
	primaryActions?: DataViewProps["primaryActions"];
	additionalActions?: DataViewProps["additionalActions"];
	actionsHidden?: boolean;
	disabled?: DataViewProps["disabled"]
	originalRowData: MosaicObject;
	columns: DataViewProps["columns"];
	row?: { [x: string]: any };
	style?: CSSProperties;
	isDragOverlay?: boolean;
}

export type DataViewTrDndProps = DataViewTrProps;
