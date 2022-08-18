import * as React from "react";
import { FieldDef } from "@root/components/Field";
interface SectionPropTypes {
    title: string;
    sectionIdx: number;
    description: string | JSX.Element;
    fieldsDef: FieldDef[];
    rows: string[][][];
    dispatch: any;
    state: any;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<SectionPropTypes & React.RefAttributes<unknown>>>;
export default _default;
