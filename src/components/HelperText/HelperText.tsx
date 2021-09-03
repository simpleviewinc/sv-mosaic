import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import {
	ErrorTextWrapper,
	StyledErrorIcon,
	StyledText,
} from './HelperText.styled';

interface HelperTextProps {
  children: ReactNode;
  error?: boolean;
}

const HelperText = ({
	children,
	error = false,
}: HelperTextProps): ReactElement => {
	return error ? (
		<ErrorTextWrapper>
			<StyledErrorIcon data-testid='error-icon-test-id' />
			<StyledText error={error}>{children}</StyledText>
		</ErrorTextWrapper>
	) : (
		<StyledText error={error}>{children}</StyledText>
	);
};

export default HelperText;
