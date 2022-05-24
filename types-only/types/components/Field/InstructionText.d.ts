import * as React from "react";
import { ReactNode } from "react";
interface InstructionText {
    children: ReactNode;
    tooltip?: boolean;
    labelMargin?: string;
}
declare const InstructionText: React.ForwardRefExoticComponent<InstructionText & React.RefAttributes<unknown>>;
export default InstructionText;
