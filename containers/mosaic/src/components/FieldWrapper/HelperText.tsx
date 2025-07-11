import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import {
	ErrorTextWrapper,
	StyledErrorIcon,
	StyledText,
} from "./HelperText.styled";

interface HelperTextProps {
	children: ReactNode;
	error?: boolean;
}

const HelperText = ({
	children,
	error = false,
}: HelperTextProps): ReactElement => {
	return error ? (
		<ErrorTextWrapper className="Mos-FieldErrorText">
			<StyledErrorIcon $error={!!children} data-testid="error-icon-test-id" />
			<StyledText error={error}>{children}</StyledText>
		</ErrorTextWrapper>
	) : (
		<StyledText className="Mos-FieldHelperText" error={error}>{children}</StyledText>
	);
};

export default HelperText;
