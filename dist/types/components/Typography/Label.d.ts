import * as React from "react";
import { ReactElement } from "react";
import { TypographyGenericProps } from "./TypographyTypes";
interface LabelProps {
    disabled?: boolean;
    required?: boolean;
    htmlFor?: string;
    children?: React.ReactNode;
    value?: string;
    maxCharacters?: number;
}
declare const Label: (props: LabelProps & TypographyGenericProps) => ReactElement;
export default Label;
