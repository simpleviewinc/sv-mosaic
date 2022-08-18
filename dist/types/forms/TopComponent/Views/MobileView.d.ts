import * as React from "react";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
declare type MobileViewProps = {
    onCancel: TopComponentProps["onCancel"];
    checkbox: JSX.Element;
} & BaseTopComponentProps;
declare const _default: React.MemoExoticComponent<(props: MobileViewProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
