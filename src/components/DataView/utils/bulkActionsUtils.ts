import { isArray } from "lodash";

import { DataViewActionsButtonRowProps } from "../DataViewActionsButtonRow";
import { DataViewAction, DataViewAdditionalAction, DataViewBulkAction, DataViewBulkActionsButtonsRowProps } from "../DataViewTypes";

type RowArgs = { row: DataViewActionsButtonRowProps["originalRowData"] };
type CheckedTrue = { checkedAllPages: true };
type CheckedFalse = { checkedAllPages: false; data: DataViewBulkActionsButtonsRowProps["data"]};
type CheckedArgs = CheckedTrue | CheckedFalse;

type FilterActionArgs = RowArgs | CheckedArgs;
type Action = DataViewAction | DataViewAdditionalAction | DataViewBulkAction;

export const filterAction = (action: Action, args: FilterActionArgs) => {
	if (action.show === undefined) {
		return true;
	} 

	const shows = isArray(action.show) ? action.show : [action.show];

	const isValid = shows.every(show => {
		if (typeof show === "boolean") {
			return show;
		} else if (typeof show === "function") {
			return show(args);
		} else {
			throw new Error(`Action ${action.name}.show must be boolean or a function`);
		}
	});

	return isValid;
};
