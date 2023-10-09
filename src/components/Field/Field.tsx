import * as React from "react";
import { ReactElement, useEffect, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper, StyledControlWrapper } from "./Field.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { MosaicFieldProps } from ".";
import { formActions } from "../Form";

const Field = ({
	children,
	error,
	fieldDef,
	colsInRow,
	value,
	id,
	dispatch
}: MosaicFieldProps<any>): ReactElement => {
	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;
	const shouldRenderError = (errorWithMessage || (errorWithMessage && fieldDef?.required) || (typeof error === "boolean" && error === true));

	const hasLabelComponent =
		(fieldDef?.label && fieldDef?.label?.length > 0) ||
		fieldDef?.inputSettings?.maxCharacters ||
		fieldDef?.instructionText;

	useEffect(() => {
		if (!dispatch || !fieldDef?.name) {
			return;
		}

		dispatch(formActions.mountField({name: fieldDef?.name}));
		return () => dispatch(formActions.unmountField({name: fieldDef?.name}))
	}, [dispatch, fieldDef?.name]);

	return (
		<StyledFieldContainer id={id} className={fieldDef?.className} style={fieldDef?.style} data-testid="field-test-id">
			<StyledFieldWrapper $error={shouldRenderError} >
				{hasLabelComponent && (
					<Label
						required={fieldDef?.required}
						htmlFor={fieldDef?.name || undefined}
						maxCharacters={fieldDef?.inputSettings?.maxCharacters}
						value={value}
						instructionText={fieldDef?.instructionText}
					>
						{fieldDef?.label}
					</Label>
				)}
				<StyledControlWrapper $size={fieldDef?.size}>
					{children}
				</StyledControlWrapper>
				{shouldRenderError ? (
					<HelperText error={!!error}>
						{typeof error === "string" ? error : undefined}
					</HelperText>
				) : fieldDef?.helperText && (
					<HelperText>{fieldDef?.helperText}</HelperText>
				)}
			</StyledFieldWrapper>
			{fieldDef?.instructionText && colsInRow === 1 && (
				<InstructionText>
					{fieldDef.instructionText}
				</InstructionText>
			)}
		</StyledFieldContainer>
	);
};

export default memo(Field);
