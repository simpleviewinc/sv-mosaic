import * as React from 'react';
import { ReactElement } from 'react';
interface LabelProps {
    disabled?: boolean;
    required?: boolean;
    htmlFor?: string;
    children?: React.ReactNode;
    value?: string;
    maxCharacters?: number;
}
declare const Label: (props: LabelProps) => ReactElement;
export default Label;
