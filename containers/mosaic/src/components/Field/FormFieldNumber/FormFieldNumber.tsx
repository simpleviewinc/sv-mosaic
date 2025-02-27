import type { ReactElement, ChangeEvent } from "react";
import type { TextFieldProps } from "@mui/material/TextField";

import React, { memo, useMemo, useState, useRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";

// Types and styles
import type { NumberFieldData, NumberFieldInputSettings } from "./FormFieldNumberTypes";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import Skeleton from "@mui/material/Skeleton";
import Tooltip, { useTooltip } from "@root/components/Tooltip";

const NumberField = (
	props: MosaicFieldProps<"number", NumberFieldInputSettings, NumberFieldData>,
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		disabled,
		inputRef,
		id,
		skeleton,
	} = props;

	const [errorFlash, setErrorFlash] = useState(false);
	const errorFlashTimer = useRef<ReturnType<typeof setTimeout>>();

	const { tooltipProps, anchorProps } = useTooltip();

	const decimalPlaces = fieldDef?.inputSettings?.decimalPlaces ?? -1;
	const prefix = fieldDef?.inputSettings?.prefix;
	const suffix = fieldDef?.inputSettings?.suffix;
	const sign = fieldDef?.inputSettings?.sign ?? "any";

	const errorFlashParts = [
		"Must be a",
		sign !== "any" && sign,
		decimalPlaces ? "numerical value" : "whole number",
		decimalPlaces > 0 && `with a maximum of ${decimalPlaces} decimal place${decimalPlaces > 1 ? "s" : ""}`,
	].filter(Boolean).join(" ") + ".";

	const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		const regexParts = [
			"^",
			// Sign
			sign === "any" && "(-|\\+)?",
			sign === "negative" && "-",
			sign === "positive" && "\\+?",
			// Integral number
			"(?!\\.)\\d*",
		];

		if (decimalPlaces) {
			regexParts.push(
				// Decimal point
				"\\.?",
				// Fractional number
				"\\d",
				decimalPlaces > 0 ? `{0,${decimalPlaces}}` : "*",
			);
		}

		regexParts.push("$");

		const regex = new RegExp(regexParts.filter(Boolean).join(""));

		if (value && !value.match(regex)) {

			setErrorFlash(true);

			if (errorFlashTimer.current) {
				clearTimeout(errorFlashTimer.current);
			}

			errorFlashTimer.current = setTimeout(() => setErrorFlash(false), 3000);
			return;
		}

		setErrorFlash(false);
		onChange && onChange(value === "" ? undefined : value);
	};

	const onFieldBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value === "-" || value === "+") {
			onChange("");
		}

		if (value && value[value.length - 1] === ".") {
			onChange(value.substring(0, value.length - 1));
		}

		setErrorFlash(false);
		onBlur && onBlur(value === "" ? undefined : value);
		fieldDef?.onBlurCb && fieldDef?.onBlurCb(value);
	};

	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;

	const InputProps = useMemo(() => {
		const props: TextFieldProps["InputProps"] = {
			inputRef,
			inputProps: {
				inputMode: "numeric",
				"aria-label": fieldDef.label,
				...anchorProps,
			},
		};

		if (prefix) {
			props.startAdornment = <InputAdornment position="start">{prefix}</InputAdornment>;
		}

		if (suffix) {
			props.endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>;
		}

		return props;
	}, [anchorProps, inputRef, prefix, suffix, fieldDef.label]);

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
			/>
		);
	}

	return (
		<>
			<StyledTextField
				id={id}
				data-testid="form-field-number-test-id"
				value={value ?? ""}
				onChange={onFieldChange}
				onBlur={onFieldBlur}
				variant="outlined"
				error={Boolean(errorFlash) || (errorWithMessage || (errorWithMessage && fieldDef?.required))}
				className={fieldDef?.className}
				placeholder={fieldDef?.inputSettings?.placeholder}
				fieldSize={fieldDef?.size}
				InputProps={InputProps}
				required={fieldDef?.required}
				type="text"
				disabled={disabled}
			/>
			<Tooltip {...tooltipProps} open={Boolean(errorFlash)} maxWidth={150}>
				{errorFlashParts}
			</Tooltip>
		</>
	);
};

export default memo(NumberField);
