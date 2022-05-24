import * as React from "react";
import { FieldDef } from "@root/components/Field";
interface ColPropsTypes {
    col: (string | FieldDef)[];
    state: any;
    fieldsDef: FieldDef[];
    dispatch: any;
    colsInRow?: number;
}
declare const _default: React.MemoExoticComponent<(props: ColPropsTypes) => JSX.Element>;
export default _default;
