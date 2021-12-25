import { ReactElement, ReactNode } from 'react';
interface InstructionText {
    children: ReactNode;
    labelMargin?: string;
}
declare const InstructionText: ({ children, labelMargin }: InstructionText) => ReactElement;
export default InstructionText;
