import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Material UI
import { InputAdornment } from '@material-ui/core';

// Types and styles
import { TextFieldDef } from './FormFieldTextTypes';
import { StyledTextField } from './FormFieldText.styled';
import { MosaicFieldProps } from '@root/components/Field';

const TextField = (
	props: MosaicFieldProps<TextFieldDef> & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		fieldDef,
		// name,
		// inputSettings,
		className,
		// disabled = false,
		error,
		// required,
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

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextField
			id={fieldDef?.name}
			value={value}
			onChange={(e) => onChange && onChange(e.target.value)}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && fieldDef?.required))}
			className={className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			disabled={fieldDef?.disabled}
			multiline={fieldDef?.inputSettings?.multiline}
			size={fieldDef?.inputSettings?.size}
			inputProps={{ maxLength: fieldDef?.inputSettings?.maxCharacters > 0 ? fieldDef?.inputSettings?.maxCharacters : null }}
			InputProps={leadingElement}
			required={fieldDef?.required}
			type={fieldDef?.inputSettings?.type}
		/>
	);
};

export default memo(TextField);
