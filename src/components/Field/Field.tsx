import * as React from "react";
import { ReactElement, useEffect, useRef, useMemo, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper, StyledControlWrapper, StyledLabelControlWrapper } from "./Field.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { FieldDef, MosaicFieldProps } from ".";

function getValueLimit(def: FieldDef): number | undefined {
	if (!def || !def.inputSettings) {
		return;
	}

	if (def.type === "text" || def.type === "textEditor") {
		return def.inputSettings.maxCharacters;
	}

	if (def.type === "advancedSelection") {
		if (def.inputSettings.selectLimit < 2) {
			return;
		}

		return def.inputSettings.selectLimit;
	}
}

function useValueLimit(value: any, fieldDef: FieldDef): [number, number] | undefined {
	return useMemo(() => {
		const limit = getValueLimit(fieldDef);

		if (limit === undefined) {
			return;
		}

		const current = typeof value === "string" ?
			// Unfortunately, if it's a string it could be a rich text
			// editor field that contains some HTML. It's meh.
			value.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").length :
			Array.isArray(value) ?
				value.length :
				0;

		return [current, limit];
	}, [fieldDef, value]);
}

const typesWithRealLabel: FieldDef["type"][] = [
	"color",
	"date",
	"dropdown",
	"phone",
	"text",
	/**
	 * I can't work out a way to add an ID to Jodit's
	 * embedded contenteditable element..
	 */
	// "textEditor",
	"time",
];

const Field = ({
	children,
	error,
	fieldDef,
	colsInRow,
	value,
	id,
	methods,
	spacing,
	inputRef,
	disabled,
}: MosaicFieldProps<any>): ReactElement => {
	const { mountField } = methods || {};
	const fieldRef = useRef<HTMLDivElement | undefined>();

	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;
	const shouldRenderError = (errorWithMessage || (errorWithMessage && fieldDef?.required) || (typeof error === "boolean" && error === true));

	const limit = useValueLimit(value, fieldDef);

	const hasLabelComponent =
		(fieldDef?.label && fieldDef?.label?.length > 0) ||
		limit ||
		fieldDef?.instructionText;

	useEffect(() => {
		if (!mountField || !fieldDef?.name) {
			return;
		}

		const { unmount } = mountField({
			name: fieldDef.name,
			fieldRef: fieldRef.current,
			inputRef: inputRef?.current,
		});

		return unmount;
	}, [mountField, fieldDef.name, inputRef]);

	const hasRealLabel = typesWithRealLabel.includes(fieldDef?.type);

	return (
		<StyledFieldContainer
			id={id}
			className={fieldDef?.className}
			style={fieldDef?.style}
			data-testid="field-test-id"
			ref={fieldRef}
			aria-disabled={disabled}
		>
			<StyledFieldWrapper $error={shouldRenderError} $spacing={spacing}>
				<StyledLabelControlWrapper $fullWidth={fieldDef?.size === "full"}>
					{hasLabelComponent && (
						<Label
							required={fieldDef?.required}
							limit={limit}
							value={value}
							instructionText={fieldDef?.instructionText}
							colsInRow={colsInRow}
							name={fieldDef.name}
							as={hasRealLabel ? "label" : "div"}
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
