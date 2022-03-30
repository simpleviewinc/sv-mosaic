import { ReactElement, ReactNode } from 'react';
interface FieldWrapperProps {
    children: ReactNode;
    error?: boolean;
}
declare const FieldWrapper: ({ children, error, }: FieldWrapperProps) => ReactElement;
export default FieldWrapper;
