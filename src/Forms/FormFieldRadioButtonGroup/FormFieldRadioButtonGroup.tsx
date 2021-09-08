import * as React from 'react';
import { ReactElement } from 'react';

// Components
import RadioButton from '@root/components/RadioButton';
import { Label } from '@root/components/Typography';

// Types and styles
import { FormFieldRadioGroupProps } from './FormFieldRadioButtonGroupTypes';
import {
	FieldWrapper,
	StyledInstructionText,
	StyledRadioGroup
} from './FormFieldRadioButtonGroup.styled';
import HelperText from '@root/components/HelperText';

const FormFieldRadioGroup = (props: FormFieldRadioGroupProps): ReactElement => {
	const {
		disabled,
		error,
		errorText,
		instructionText,
		label,
		required,
		onChange,
		options,
		value,
	} = props;

	const errorField = error && required;

	const listOfRadios = (
		<>
			{options.map((option) => (
				<RadioButton
					disabled={disabled}
					key={option.label}
					label={option.label}
					value={option.value}
				/>
			))}
		</>
	);

	return (
		<FieldWrapper error={errorField}>
			<Label disabled={disabled} required={required}>
				{label}
			</Label>
			{instructionText && <StyledInstructionText>{instructionText}</StyledInstructionText>}
			<StyledRadioGroup onChange={onChange} value={value}>{listOfRadios}</StyledRadioGroup>
			{errorText && errorField && <HelperText error>{errorText}</HelperText>}
		</FieldWrapper>
	);
};

export default FormFieldRadioGroup;
