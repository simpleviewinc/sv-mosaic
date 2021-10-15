import * as React from 'react';
import { ReactElement } from 'react';

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
	props: FormFieldCheckboxProps
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
		inputSettings,
	} = props;

	return (
		<Field
			label={label}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			helperText={helperText}
			instructionText={instructionText}
		>
			<StyledCheckboxList
				disabled={disabled}
				checked={inputSettings?.value}
				options={inputSettings?.options}
				onChange={onChange}
			/>
		</Field>
	);
};

export default FormFieldCheckbox;
