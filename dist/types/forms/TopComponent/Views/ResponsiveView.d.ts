import * as React from "react";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";
declare type ResponsiveViewProps = {
    sections: TopComponentProps["sections"];
    checkbox: JSX.Element;
    sectionsRefs?: any[];
} & BaseTopComponentProps;
declare const _default: React.MemoExoticComponent<(props: ResponsiveViewProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
