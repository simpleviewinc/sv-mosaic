import { ReactElement, ReactNode } from 'react';
interface HelperTextProps {
    children: ReactNode;
    error?: boolean;
}
declare const HelperText: ({ children, error, }: HelperTextProps) => ReactElement;
export default HelperText;
