import { ReactElement, ReactNode } from 'react';
import { FieldProps } from '.';
interface FieldWrapperProps extends FieldProps {
    children: ReactNode;
}
declare const Field: ({ children, error, disabled, required, label, helperText, errorText, instructionText, }: FieldWrapperProps) => ReactElement;
export default Field;
