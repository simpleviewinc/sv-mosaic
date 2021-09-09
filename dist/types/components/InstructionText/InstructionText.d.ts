import { ReactElement, ReactNode } from 'react';
interface InstructionText {
    children: ReactNode;
    error?: boolean;
    position?: 'top' | 'right';
}
declare const InstructionText: ({ children, error, position, }: InstructionText) => ReactElement;
export default InstructionText;
