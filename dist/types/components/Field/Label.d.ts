import { ReactElement, ReactNode } from 'react';
interface LabelProps {
    className?: string;
    disabled?: boolean;
    required?: boolean;
    htmlFor?: string;
    children?: ReactNode;
    value?: string;
    maxCharacters?: number;
    instructionText?: string;
    tooltip?: boolean;
    labelMargin?: string;
}
declare const Label: (props: LabelProps) => ReactElement;
export default Label;
