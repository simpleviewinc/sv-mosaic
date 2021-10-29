import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Material UI
import { InputLabel } from '@material-ui/core';

// Types and styles
import { FormFieldCheckboxProps } from './FormFieldCheckboxTypes';
import { CheckboxListProps } from '../../components/CheckboxList';
import {
	ErrorTextWrapper,
	FieldWrapper,
	LabelWrapper,
	StyledCheckboxList,
	StyledErrorIcon,
	StyledText,
	StyledWrapper,
} from './FormFieldCheckbox.styled';
import Field from '@root/components/Field';

const FormFieldCheckbox = (
	props: FormFieldCheckboxProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		label,
		required,
		disabled,
		error,
		errorText,
		helperText,
		instructionText,
		onChange,
		onBlur,
		inputSettings,
		value
	} = props;

	return (
		// <Field
		// 	label={label}
		// 	required={required}
		// 	disabled={disabled}
		// 	error={error}
		// 	errorText={errorText}
		// 	helperText={helperText}
		// 	instructionText={instructionText}
		// >
		<StyledCheckboxList
			disabled={disabled}
			checked={value}
			options={inputSettings?.options}
			onChange={onChange}
			onBlur={onBlur}
		/>
		// </Field>
	);
};

export default memo(FormFieldCheckbox);
