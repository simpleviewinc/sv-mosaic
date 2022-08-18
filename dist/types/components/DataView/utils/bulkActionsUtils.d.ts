import { ButtonProps } from "@root/components/Button";
import { DataViewActionsButtonRowProps } from "../DataViewActionsButtonRow";
import { DataViewAction, DataViewAdditionalAction, DataViewBulkAction, DataViewBulkActionsButtonsRowProps } from "../DataViewTypes";
import { MenuItemProps } from "../../MenuItem";
declare type RowArgs = {
    row: DataViewActionsButtonRowProps["originalRowData"];
};
declare type CheckedTrue = {
    checkedAllPages: true;
};
declare type CheckedFalse = {
    checkedAllPages: false;
    data: DataViewBulkActionsButtonsRowProps["data"];
};
declare type CheckedArgs = CheckedTrue | CheckedFalse;
declare type FilterActionArgs = RowArgs | CheckedArgs | {
    [val: string]: any;
};
declare type Action = DataViewAction | DataViewAdditionalAction | DataViewBulkAction | ButtonProps | MenuItemProps;
export declare const filterAction: (action: Action, args?: FilterActionArgs) => boolean;
export {};
