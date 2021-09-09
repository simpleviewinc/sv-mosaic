import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from './InstructionText.styled';

interface InstructionText {
  children: ReactNode;
  error?: boolean;
  position?: 'top' | 'right';
}

const InstructionText = ({
	children,
	error = false,
	position,
}: InstructionText): ReactElement => {
	return (
		<InstructionTextWrapper position={position} error={error}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

export default InstructionText;
