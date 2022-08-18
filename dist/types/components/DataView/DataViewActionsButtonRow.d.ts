import * as React from "react";
import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";
import { MosaicObject } from "../../types";
export interface DataViewActionsButtonRowProps {
    primaryActions: DataViewAction[];
    additionalActions: DataViewAdditionalAction[];
    originalRowData: MosaicObject;
}
declare function DataViewActionsButtonRow(props: DataViewActionsButtonRowProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DataViewActionsButtonRow>;
export default _default;
