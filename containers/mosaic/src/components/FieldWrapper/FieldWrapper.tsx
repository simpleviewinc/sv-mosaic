import * as React from "react";
import { ReactElement, useRef, useMemo, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper, StyledControlWrapper, StyledLabelControlWrapper } from "./FieldWrapper.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import type { FieldDef, MosaicFieldProps } from "../Field";
import Skeleton from "@mui/material/Skeleton";
import { getHtmlText } from "@root/utils/dom/getHtmlText";
import { getTextLength } from "@root/utils/string";
import useRegisterField from "@root/utils/hooks/useRegisterField";

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

function getValueLength(value: any, fieldDef: FieldDef): number {
	if (typeof value === "string") {
		if (fieldDef.type === "textEditor") {
			return getTextLength(getHtmlText(value));
		}

		return getTextLength(value);
	}

	if (Array.isArray(value)) {
		return value.length;
	}

	return 0;
}

function useValueLimit(value: any, fieldDef: FieldDef): [number, number] | undefined {
	return useMemo(() => {
		const limit = getValueLimit(fieldDef);

		if (limit === undefined) {
			return;
		}

		const current = getValueLength(value, fieldDef);

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

const FieldWrapper = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		children,
		error,
		fieldDef,
		colsInRow,
		value,
		id,
		spacing,
		disabled,
		skeleton,
		useRealLabel,
	} = props;

	const fieldRef = useRef<HTMLDivElement | undefined>();

	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;
	const shouldRenderError = (errorWithMessage || (errorWithMessage && fieldDef?.required) || (typeof error === "boolean" && error === true));

	const limit = useValueLimit(value, fieldDef);

	const hasLabelComponent =
		(fieldDef?.label && fieldDef?.label?.length > 0) ||
		limit ||
		fieldDef?.instructionText;

	useRegisterField({
		...props,
		fieldRef,
	});

	const hasRealLabel = useRealLabel || typesWithRealLabel.includes(fieldDef?.type);

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
						skeleton ? (
							<Skeleton
								width={92}
								height={28}
								sx={{ marginBottom: "8px" }}
							/>
						) : (
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
						)
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

export default memo(FieldWrapper);
