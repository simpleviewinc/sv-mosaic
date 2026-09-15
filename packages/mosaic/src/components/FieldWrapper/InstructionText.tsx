import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionTextProps {
	children: ReactNode;
	colsInRow?: number;
	id?: string;
}

const InstructionText = (props: InstructionTextProps): ReactElement => {
	const { children, colsInRow, id } = props;
	return (
		<InstructionTextWrapper id={id} className="Mos-FieldInstructionText" $colsInRow={colsInRow}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

export default InstructionText;
