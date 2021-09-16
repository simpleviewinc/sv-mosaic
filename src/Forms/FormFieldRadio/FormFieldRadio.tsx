import * as React from 'react';
import { ReactElement } from 'react';

// Components
import RadioButton from '@root/components/RadioButton';
import { Label } from '@root/components/Typography';
import FieldWrapper from '@root/components/FieldWrapper';
import InstructionText from '@root/components/InstructionText';
import InputWrapper from '@root/components/InputWrapper';

// Types and styles
import { FormFieldRadioProps } from './FormFieldRadioTypes';
import { RadioGroupWrapper, StyledRadioGroup } from './FormFieldRadio.styled';
import HelperText from '@root/components/HelperText';

const FormFieldRadio = (props: FormFieldRadioProps): ReactElement => {
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
		<InputWrapper>
			<FieldWrapper error={errorField}>
				<Label disabled={disabled} required={required}>
					{label}
				</Label>
				<RadioGroupWrapper instructionText={instructionText}>
					<StyledRadioGroup onChange={onChange} value={value}>
						{listOfRadios}
					</StyledRadioGroup>
				</RadioGroupWrapper>
				{errorText && errorField && <HelperText error>{errorText}</HelperText>}
			</FieldWrapper>
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
		</InputWrapper>
	);
};

export default FormFieldRadio;
