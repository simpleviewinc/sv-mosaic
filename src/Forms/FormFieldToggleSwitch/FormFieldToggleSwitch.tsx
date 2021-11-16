import * as React from 'react';
import { HTMLAttributes, ReactElement } from 'react';

// Components
import HelperText from '@root/components/HelperText';
import ToggleSwitch from '@root/components/ToggleSwitch';
import { Label } from '@root/components/Typography';
import FieldWrapper from '@root/components/FieldWrapper';
import InputWrapper from '@root/components/InputWrapper';
import InstructionText from '@root/components/InstructionText';

// Types and styles
import { FormFieldToggleSwitchProps } from './FormFieldToggleSwitchTypes';
import { ToggleSwitchWrapper } from './FormFieldToggleSwitch.styled';

const FormFieldToggleSwitch = (
	props: FormFieldToggleSwitchProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		disabled,
		required,
		onChange,
		inputSettings,
		value,
		onBlur
	} = props;
	
	return (
		<ToggleSwitch
			disabled={disabled}
			checked={value}
			label={inputSettings?.toggleLabel}
			onChange={onChange}
			onBlur={onBlur}
			required={required}
		/>
	);
};

export default FormFieldToggleSwitch;
