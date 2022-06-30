import * as React from "react";
import { ReactElement, memo, ChangeEvent } from "react";

// Material UI
import InputAdornment from "@mui/material/InputAdornment";

// Types and styles
import { TextFieldDef } from "./FormFieldTextTypes";
import { StyledTextField } from "./FormFieldText.styled";
import { MosaicFieldProps } from "@root/components/Field";

const TextField = (
	props: MosaicFieldProps<TextFieldDef, string | number>
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	const leadingElement = fieldDef?.inputSettings?.prefixElement
		? {
			startAdornment: (
				<InputAdornment position='start'>{fieldDef?.inputSettings?.prefixElement}</InputAdornment>
			),
		}
		: null;

	const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value =
			fieldDef?.inputSettings?.type === "number"
				? Number(e.target.value)
				: e.target.value;

		onChange && onChange(value);
	};

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextField
			id={fieldDef?.name}
			value={value}
			onChange={onFieldChange}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && fieldDef?.required))}
			className={fieldDef?.className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			disabled={fieldDef?.disabled}
			multiline={fieldDef?.inputSettings?.multiline}
			fieldSize={fieldDef?.size}
			inputProps={{ maxLength: fieldDef?.inputSettings?.maxCharacters > 0 ? fieldDef?.inputSettings?.maxCharacters : null }}
			InputProps={leadingElement}
			required={fieldDef?.required}
			type={fieldDef?.inputSettings?.type}
		/>
	);
};

export default memo(TextField);
