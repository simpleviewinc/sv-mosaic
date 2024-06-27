import * as React from "react";
import { ReactElement, ReactNode } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionTextProps {
	children: ReactNode;
	colsInRow?: number;
}

const InstructionText = (props: InstructionTextProps): ReactElement => {
	const { children, colsInRow } = props;
	return (
		<InstructionTextWrapper $colsInRow={colsInRow}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

InstructionText.displayName = "InstructionText";

export default InstructionText;
