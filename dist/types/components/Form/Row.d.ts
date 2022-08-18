import { FieldDef } from "@root/components/Field";
import * as React from "react";
interface RowPropTypes {
    row: string[][];
    state: any;
    fieldsDef: FieldDef[];
    dispatch: any;
    rowIdx?: number;
    sectionIdx?: number;
}
declare const _default: React.MemoExoticComponent<(props: RowPropTypes) => JSX.Element>;
export default _default;
