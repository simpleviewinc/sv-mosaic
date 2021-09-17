import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from './InstructionText.styled';

interface InstructionText {
  children: ReactNode;
}

const InstructionText = ({
	children,
}: InstructionText): ReactElement => {
	return (
		<InstructionTextWrapper>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

export default InstructionText;
