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

const FormFieldCheckbox = (
	props: FormFieldCheckboxProps & CheckboxListProps
): ReactElement => {
	const {
		label,
		required,
		disabled,
		error,
		errorText,
		instructionText,
		onChange,
		checked,
		options,
	} = props;

	return (
		<StyledWrapper>
			<FieldWrapper error={error && required}>
				<LabelWrapper disabled={disabled}>
					<InputLabel required={required}>{label}</InputLabel>
				</LabelWrapper>
				<StyledText>{instructionText}</StyledText>
				<StyledCheckboxList
					disabled={disabled}
					checked={checked}
					options={options}
					onChange={onChange}
				/>
				{errorText && error && required && (
					<ErrorTextWrapper>
						<StyledErrorIcon />
						<StyledText error={error}>{errorText}</StyledText>
					</ErrorTextWrapper>
				)}
			</FieldWrapper>
		</StyledWrapper>
	);
};

export default FormFieldCheckbox;
