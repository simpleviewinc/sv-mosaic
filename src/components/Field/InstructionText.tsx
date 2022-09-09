import * as React from "react";
import { ReactElement, ReactNode, forwardRef } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionText {
	children: ReactNode;
	tooltip?: boolean;
}

const InstructionText = forwardRef((props: InstructionText, ref): ReactElement => {
	const { children, tooltip} = props;
	return (
		<InstructionTextWrapper
			className={`instruction-text-${!tooltip ? "right" : "tooltip"}`}
			ref={ref}
		>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
});

InstructionText.displayName = "InstructionText";

export default InstructionText;
