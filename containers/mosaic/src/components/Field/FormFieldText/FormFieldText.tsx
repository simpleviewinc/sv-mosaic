import type { ReactElement } from "react";
import type { TextFieldProps } from "@mui/material/TextField";

import React, { memo, useMemo } from "react";
import Skeleton from "@mui/material/Skeleton";

import type { TextFieldData, TextFieldInputSettings } from "./FormFieldTextTypes";
import type { MosaicFieldProps } from "@root/components/Field";

import { StyledAdornment, StyledTextField } from "./FormFieldText.styled";
import testIds from "@root/utils/testIds";

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

	const prefix = fieldDef?.inputSettings?.prefixElement;

	const InputProps = useMemo(() => {
		const props: TextFieldProps["InputProps"] = {
			inputRef,
			inputProps: {
				"aria-label": fieldDef.label,
			},
		};

		if (prefix) {
			props.startAdornment = <StyledAdornment position="start">{prefix}</StyledAdornment>;
		}

		return props;
	}, [inputRef, prefix, fieldDef.label]);

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
				data-testid={testIds.FORM_FIELD_SKELETON}
			/>
		);
	}

	return (
		<StyledTextField
			id={id}
			data-testid="form-field-text-test-id"
			value={value ?? ""}
			onChange={({ target: { value } }) => onChange(value)}
			onBlur={onBlur}
			variant="outlined"
			error={Boolean(error)}
			className={fieldDef?.className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			multiline={fieldDef?.inputSettings?.multiline}
			fieldSize={fieldDef?.size}
			InputProps={InputProps}
			required={fieldDef?.required}
			type={fieldDef?.inputSettings?.type === "number" ? "text" : fieldDef?.inputSettings?.type}
			minRows={fieldDef?.inputSettings?.minRows}
			maxRows={fieldDef?.inputSettings?.maxRows}
			disabled={disabled}
		/>
	);
};

export default memo(TextField);
