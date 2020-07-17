import * as React from "react";
import { CheckboxProps as MUICheckboxProps } from "@material-ui/core/Checkbox";
export interface CheckboxProps {
    checked: boolean;
    className?: string;
    edge?: MUICheckboxProps["edge"];
    onClick?: MUICheckboxProps["onClick"];
}
declare function Checkbox(props: CheckboxProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Checkbox>;
export default _default;
