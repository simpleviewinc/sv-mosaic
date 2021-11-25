import { ReactElement, ReactNode } from 'react';
import { FieldProps } from '.';
interface FieldWrapperProps extends FieldProps {
    className?: string;
    children: ReactNode;
}
declare const Field: ({ className, children, error, disabled, required, label, helperText, errorText, instructionText, type, }: FieldWrapperProps) => ReactElement;
export default Field;
