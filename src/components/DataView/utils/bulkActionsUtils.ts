import { isArray } from "lodash";
import { ButtonProps } from "@root/components/Button";
import { DataViewAction, DataViewAdditionalAction, DataViewBulkAction } from "../DataViewTypes";
import { MenuItemProps } from "../../MenuItem";
import { DataViewBulkActionsButtonsRowProps } from "../DataViewBulkActionsButtonsRow";
import { DataViewActionsButtonRowProps } from "../DataViewActionsButtonRow";

type RowArgs = { row: DataViewActionsButtonRowProps["originalRowData"] };
type CheckedTrue = { checkedAllPages: true };
type CheckedFalse = { checkedAllPages: false; data: DataViewBulkActionsButtonsRowProps["data"]};
type CheckedArgs = CheckedTrue | CheckedFalse;

type FilterActionArgs = RowArgs | CheckedArgs | { [val: string] : any };
type Action = DataViewAction | DataViewAdditionalAction | DataViewBulkAction | ButtonProps | MenuItemProps;

export const filterAction = (action: Action, args: FilterActionArgs = {}): boolean => {
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
