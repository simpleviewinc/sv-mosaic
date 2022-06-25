import * as React from "react";
import { DataViewOnSkipChange } from "./DataViewTypes";
interface Props {
    limit: number;
    count: number;
    skip: number;
    onSkipChange: DataViewOnSkipChange;
}
declare function DataViewPager(props: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DataViewPager>;
export default _default;
