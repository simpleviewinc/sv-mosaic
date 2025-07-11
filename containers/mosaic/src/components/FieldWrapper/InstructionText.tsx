import * as React from "react";
import type { ReactElement, ReactNode } from "react";
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
		<InstructionTextWrapper className="Mos-FieldInstructionText" $colsInRow={colsInRow}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

InstructionText.displayName = "InstructionText";

export default InstructionText;
