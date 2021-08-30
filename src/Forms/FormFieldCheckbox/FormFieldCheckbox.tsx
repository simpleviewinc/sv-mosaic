import * as React from 'react';
import { ReactElement } from 'react';

// Material UI
import { InputLabel } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Types and styles
import { FormFieldCheckboxProps } from './FormFieldCheckboxTypes';
import { CheckboxListProps } from '../../components/CheckboxList';
import {
	StyledCheckboxList,
	StyledText,
	LabelWrapper,
	FormFieldCheckboxWrapper,
	ErrorTextWrapper,
	StyledWrapper,
} from './FormFieldCheckbox.styled';

const FormFieldCheckbox = (
	props: FormFieldCheckboxProps & CheckboxListProps
): ReactElement => {
	const {
		label,
		required,
		disabled,
		error,
		errorText,
		helperText,
		onChange,
		checked,
		options,
	} = props;

	return (
		<StyledWrapper>
			<FormFieldCheckboxWrapper error={error}>
				<LabelWrapper disabled={disabled}>
					<InputLabel required={required}>{label}</InputLabel>
				</LabelWrapper>
				<StyledText>{helperText}</StyledText>
				<StyledCheckboxList
					disabled={disabled}
					checked={checked}
					options={options}
					onChange={onChange}
				/>
				{errorText && error && (
					<ErrorTextWrapper>
						<ErrorOutlineIcon style={{ fontSize: 16, marginRight: '8px' }} />
						<StyledText error={error}>{errorText}</StyledText>
					</ErrorTextWrapper>
				)}
			</FormFieldCheckboxWrapper>
		</StyledWrapper>
	);
};

export default FormFieldCheckbox;
