import * as React from "react";
import { forwardRef } from "react";
import { InstructionTextWrapper, StyledInstructionText, } from "./InstructionText.styled";
const InstructionText = forwardRef((props, ref) => {
    const { children, tooltip, labelMargin } = props;
    return (React.createElement(InstructionTextWrapper, { labelMargin: labelMargin, className: `instruction-text-${!tooltip ? "right" : "tooltip"}`, ref: ref },
        React.createElement(StyledInstructionText, null, children)));
});
InstructionText.displayName = "InstructionText";
export default InstructionText;
