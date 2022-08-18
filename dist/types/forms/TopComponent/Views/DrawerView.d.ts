import * as React from "react";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
declare type DrawerViewProps = {
    onCancel: TopComponentProps["onCancel"];
} & BaseTopComponentProps;
declare const _default: React.MemoExoticComponent<(props: DrawerViewProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
