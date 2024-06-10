import { DataViewAction, DataViewAdditionalAction, DataViewProps } from "../DataViewTypes";

export type DataViewControlViewOption = "list" | "grid";

export interface DataViewActionsButtonRowProps {
	primaryActions: DataViewAction[];
	additionalActions: DataViewAdditionalAction[];
	actionsHidden?: boolean;
	disabled?: DataViewProps["disabled"];
	originalRowData: DataViewProps["data"][number];
	activeDisplay?: DataViewControlViewOption;
}
