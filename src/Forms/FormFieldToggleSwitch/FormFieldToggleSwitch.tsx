import * as React from 'react';
import { ReactElement } from 'react';

// Components
import HelperText from '@root/components/HelperText';
import ToggleSwitch from '@root/components/ToggleSwitch';
import { Label } from '@root/components/Typography';
import FieldWrapper from '@root/components/FieldWrapper';
import InstructionText from '@root/components/InstructionText';

// Types and styles
import { FormFieldToggleSwitchProps } from './FormFieldToggleSwitchTypes';
import { ToggleSwitchWrapper } from './FormFieldToggleSwitch.styled';

const FormFieldToggleSwitch = (
	props: FormFieldToggleSwitchProps
): ReactElement => {
	const {
		checked,
		disabled,
		error,
		errorText,
		instructionText,
		label,
		required,
		onChange,
		toggleLabel,
	} = props;

	const errorField = error && required;

	return (
		<FieldWrapper error={errorField}>
			<Label disabled={disabled} required={required}>
				{label}
			</Label>
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
			<ToggleSwitchWrapper instructionText>
				<ToggleSwitch
					disabled={disabled}
					checked={checked}
					label={toggleLabel}
					onChange={onChange}
					required={required}
				/>
			</ToggleSwitchWrapper>
			{errorText && errorField && <HelperText error>{errorText}</HelperText>}
		</FieldWrapper>
	);
};

export default FormFieldToggleSwitch;
