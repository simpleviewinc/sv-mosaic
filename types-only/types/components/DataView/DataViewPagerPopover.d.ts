import * as React from "react";
import { DataViewOnSkipChange } from "./DataViewTypes";
interface Props {
    currentPage: number;
    totalPages: number;
    limit: number;
    onSkipChange: DataViewOnSkipChange;
}
declare function DataViewPagerPopover(props: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DataViewPagerPopover>;
export default _default;
