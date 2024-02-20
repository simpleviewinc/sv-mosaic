import * as React from "react";
import { ReactElement, useEffect, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper, StyledControlWrapper, StyledLabelControlWrapper } from "./Field.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { MosaicFieldProps } from ".";

const Field = ({
	children,
	error,
	fieldDef,
	colsInRow,
	value,
	id,
	methods,
	spacing,
}: MosaicFieldProps<any>): ReactElement => {
	const { mountField } = methods || {};

	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;
	const shouldRenderError = (errorWithMessage || (errorWithMessage && fieldDef?.required) || (typeof error === "boolean" && error === true));

	const hasLabelComponent =
		(fieldDef?.label && fieldDef?.label?.length > 0) ||
		fieldDef?.inputSettings?.maxCharacters ||
		fieldDef?.instructionText;

	useEffect(() => {
		if (!mountField || !fieldDef?.name) {
			return;
		}

		const { unmount } = mountField({
			name: fieldDef.name,
		});

		return unmount;
	}, [mountField, fieldDef?.name]);

	return (
		<StyledFieldContainer id={id} className={fieldDef?.className} style={fieldDef?.style} data-testid="field-test-id">
			<StyledFieldWrapper $error={shouldRenderError} $spacing={spacing}>
				<StyledLabelControlWrapper $fullWidth={fieldDef?.size === "full"}>
					{hasLabelComponent && (
						<Label
							required={fieldDef?.required}
							htmlFor={fieldDef?.name || undefined}
							maxCharacters={fieldDef?.inputSettings?.maxCharacters}
							value={value}
							instructionText={fieldDef?.instructionText}
							colsInRow={colsInRow}
						>
							{fieldDef?.label}
						</Label>
					)}
					<StyledControlWrapper $size={fieldDef?.size}>
						{children}
					</StyledControlWrapper>
				</StyledLabelControlWrapper>
				{shouldRenderError ? (
					<HelperText error={!!error}>
						{typeof error === "string" ? error : undefined}
					</HelperText>
				) : fieldDef?.helperText && (
					<HelperText>{fieldDef?.helperText}</HelperText>
				)}
			</StyledFieldWrapper>
			{fieldDef?.instructionText && (
				<InstructionText colsInRow={colsInRow}>
					{fieldDef.instructionText}
				</InstructionText>
			)}
		</StyledFieldContainer>
	);
};

export default memo(Field);
