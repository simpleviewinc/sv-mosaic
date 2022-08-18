import * as React from "react";
import { DataViewBulkAction } from "./DataViewTypes";
interface Props {
    count: number;
    rowCount: number;
    checkedAllPages: boolean;
    onCheckAllPagesClick: DataViewBulkAction["onAllClick"];
}
declare function DataViewBulkAllBar(props: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DataViewBulkAllBar>;
export default _default;
