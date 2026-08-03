import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import {
	StyledErrorIcon,
	StyledWrapper,
} from "./HelperText.styled";
import testIds from "@root/utils/testIds";

interface HelperTextProps {
	children: ReactNode;
	error?: boolean;
}

const HelperText = ({
	children,
	error = false,
}: HelperTextProps): ReactElement => {
	return (
		<StyledWrapper
			$error={error}
			className={error ? "Mos-FieldErrorText" : "Mos-FieldHelperText"}
			data-testid={testIds.FORM_FIELD_ERROR}
		>
			{error && (
				<StyledErrorIcon data-testid="error-icon-test-id" />
			)}
			{children}
		</StyledWrapper>
	);
};

export default HelperText;
