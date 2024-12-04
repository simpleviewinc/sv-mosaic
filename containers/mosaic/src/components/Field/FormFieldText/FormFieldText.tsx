import * as React from "react";
import type { ReactElement, ChangeEvent } from "react";
import { memo } from "react";

// Material UI
import InputAdornment from "@mui/material/InputAdornment";

// Types and styles
import type { TextFieldData, TextFieldInputSettings } from "./FormFieldTextTypes";
import { StyledTextField } from "./FormFieldText.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import Skeleton from "@mui/material/Skeleton";

const TextField = (
	props: MosaicFieldProps<"text", TextFieldInputSettings, TextFieldData>,
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

	const leadingElement = fieldDef?.inputSettings?.prefixElement
		? {
			startAdornment: (
				<InputAdornment position="start">{fieldDef?.inputSettings?.prefixElement}</InputAdornment>
			),
		}
		: null;

	const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		onChange && onChange(value);
	};

	const onFieldBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		onBlur && onBlur(value === "" ? undefined : value);
		fieldDef?.onBlurCb && fieldDef?.onBlurCb(value);
	};

	const errorWithMessage = typeof error === "string" ? error?.trim().length > 0 : false;

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
		<StyledTextField
			id={id}
			data-testid="form-field-text-test-id"
			value={value ?? ""}
			onChange={onFieldChange}
			onBlur={onFieldBlur}
			variant="outlined"
			error={(errorWithMessage || (errorWithMessage && fieldDef?.required))}
			className={fieldDef?.className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			multiline={fieldDef?.inputSettings?.multiline}
			fieldSize={fieldDef?.size}
			InputProps={{ ...(leadingElement || {}), inputRef }}
			required={fieldDef?.required}
			type={fieldDef?.inputSettings?.type === "number" ? "text" : fieldDef?.inputSettings?.type}
			minRows={fieldDef?.inputSettings?.minRows}
			maxRows={fieldDef?.inputSettings?.maxRows}
			disabled={disabled}
		/>
	);
};

export default memo(TextField);
