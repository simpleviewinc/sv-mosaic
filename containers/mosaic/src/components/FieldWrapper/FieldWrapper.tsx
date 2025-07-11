import * as React from "react";
import type { ReactElement } from "react";
import { useRef, useMemo, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper, StyledControlWrapper, StyledLabelControlWrapper } from "./FieldWrapper.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { type FieldDef, type MosaicFieldProps } from "../Field";
import Skeleton from "@mui/material/Skeleton";
import { classnames, getTextLength } from "@root/utils/string";
import useRegisterField from "@root/utils/hooks/useRegisterField";
import { getHtmlCharacterCount } from "@root/utils/dom/getHtmlCharacterCount";

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
			return getHtmlCharacterCount(value);
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
	"number",
	"phone",
	"text",
	"textEditor",
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
	const shouldRenderError = (errorWithMessage || (errorWithMessage && Boolean(fieldDef?.required)) || (typeof error === "boolean" && error === true));

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
			className={classnames(fieldDef?.className, "Mos-Field", `Mos-Field--${fieldDef.type}`)}
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
								required={(typeof fieldDef.required === "object" && fieldDef.required.asterisk) || Boolean(fieldDef.required)}
								limit={limit}
								value={value}
								instructionText={fieldDef?.instructionText}
								forceInstructionTooltip={fieldDef?.forceInstructionTooltip}
								colsInRow={colsInRow}
								name={fieldDef.name}
								as={hasRealLabel ? "label" : "div"}
								hideLabel={fieldDef.hideLabel}
								isGroup={fieldDef.type === "group"}
							>
								{fieldDef?.label}
							</Label>
						)
					)}
					<StyledControlWrapper
						className="Mos-FieldControl"
						$size={fieldDef?.size}
					>
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
			{fieldDef?.instructionText && !fieldDef?.forceInstructionTooltip && (
				<InstructionText colsInRow={colsInRow}>
					{fieldDef.instructionText}
				</InstructionText>
			)}
		</StyledFieldContainer>
	);
};

export default memo(FieldWrapper);
