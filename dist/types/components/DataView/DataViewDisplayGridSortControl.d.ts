import * as React from "react";
import { DataViewColumn, DataViewSort, DataViewOnSortChange } from "./DataViewTypes";
interface Props {
    columns: DataViewColumn[];
    sort: DataViewSort;
    onSortChange: DataViewOnSortChange;
}
declare function DataViewDisplayGridSortControl(props: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DataViewDisplayGridSortControl>;
export default _default;
