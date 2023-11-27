import * as React from "react";
import { ReactElement, ReactNode } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionText {
	children: ReactNode;
	colsInRow?: number
}

const InstructionText = (props: InstructionText): ReactElement => {
	const { children, colsInRow } = props;
	return (
		<InstructionTextWrapper $colsInRow={colsInRow}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

InstructionText.displayName = "InstructionText";

export default InstructionText;
