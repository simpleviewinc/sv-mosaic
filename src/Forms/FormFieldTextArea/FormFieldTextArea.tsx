import * as React from "react";
import { ReactElement, memo } from "react";

// Types and styles
import { TextAreaDef } from "./FormFieldTextAreaTypes";
import { StyledTextArea } from "./FormFieldTextArea.styled";
import { MosaicFieldProps } from "@root/components/Field";

const TextArea = (
	props: MosaicFieldProps<TextAreaDef>
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextArea
			id={fieldDef?.inputSettings?.htmlFor}
			value={value}
			onChange={(e) => onChange && onChange(e.target.value)}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && fieldDef?.required))}
			className={fieldDef?.className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			disabled={fieldDef?.disabled}
			multiline
			fieldSize={fieldDef?.size}
			inputProps={{ maxLength: fieldDef?.inputSettings?.maxCharacters > 0 ? fieldDef?.inputSettings?.maxCharacters : null }}
			required={fieldDef?.required}
		/>
	);
};

export default memo(TextArea);
