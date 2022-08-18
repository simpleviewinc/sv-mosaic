import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { SectionDef } from "./FormTypes";
interface FormLayoutProps {
    state: any;
    dispatch: any;
    fields: FieldDef[];
    sections: SectionDef[];
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<FormLayoutProps & React.RefAttributes<unknown>>>;
export default _default;
