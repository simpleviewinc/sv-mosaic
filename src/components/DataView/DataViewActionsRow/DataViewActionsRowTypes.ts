import { DataViewDisplay, DataViewProps } from "../DataViewTypes";

export interface DataViewActionsRowProps {
	display: string;
	displayControlEnabled: boolean;
	displayOptionsFull: DataViewDisplay[];
	limit?: DataViewProps["limit"];
	limitOptions?: DataViewProps["limitOptions"];
	onLimitChange?: DataViewProps["onLimitChange"];
	onDisplayChange?: DataViewProps["onDisplayChange"];
	onSkipChange?: DataViewProps["onSkipChange"];
	skip?: DataViewProps["skip"];
	count?: DataViewProps["count"];
	onColumnsChange?: DataViewProps["onColumnsChange"];
	activeColumnObjs: DataViewProps["columns"];
	allColumns?: DataViewProps["columns"];
}
