import * as React from "react";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
declare type ResponsiveViewProps = {
    buttons: JSX.Element;
    sections: TopComponentProps["sections"];
    checkbox: JSX.Element;
} & BaseTopComponentProps;
declare const _default: React.MemoExoticComponent<(props: ResponsiveViewProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
