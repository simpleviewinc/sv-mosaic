import * as React from "react";
import { ReactElement, ReactNode } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionTextProps {
	children: ReactNode;
}

const InstructionText = ({
	children,
}: InstructionTextProps): ReactElement => {
	return (
		<InstructionTextWrapper>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

export default InstructionText;
