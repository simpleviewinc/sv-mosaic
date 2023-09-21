import * as React from "react";
import { ReactElement } from "react";
import { StyledFieldWrapper } from "./FieldWrapper.styled";
import { FieldWrapperProps } from "./FieldWrapperTypes";

const FieldWrapper = ({
	children,
	error = false,
}: FieldWrapperProps): ReactElement => {
	return <StyledFieldWrapper $error={error}>{children}</StyledFieldWrapper>;
};

export default FieldWrapper;
