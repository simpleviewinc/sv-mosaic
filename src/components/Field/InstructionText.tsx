import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from './InstructionText.styled';

interface InstructionText {
  children: ReactNode;
	labelMargin?: string;
}

const InstructionText = ({
	children,
	labelMargin
}: InstructionText): ReactElement => {
	return (
		<InstructionTextWrapper labelMargin={labelMargin}>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
};

export default InstructionText;
