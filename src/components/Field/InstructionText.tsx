import * as React from "react";
import { ReactElement, ReactNode } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionText {
	children: ReactNode;
}

const InstructionText = (props: InstructionText): ReactElement => {
	const { children } = props;
	return (
		<InstructionTextWrapper>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

InstructionText.displayName = "InstructionText";

export default InstructionText;
