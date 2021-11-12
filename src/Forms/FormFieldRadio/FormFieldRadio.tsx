import * as React from 'react';
import { HTMLAttributes, ReactElement } from 'react';

// Components
import RadioButton from '@root/components/RadioButton';

// Types and styles
import { FormFieldRadioProps } from './FormFieldRadioTypes';
import { StyledRadioGroup } from './FormFieldRadio.styled';

const FormFieldRadio = (props: FormFieldRadioProps & HTMLAttributes<HTMLInputElement>): ReactElement => {
	const {
		disabled,
		error,
		required,
		onChange,
		inputSettings,
		value,
		onBlur,
	} = props;

	const errorField = error && required;

	const listOfRadios = (
		<>
			{inputSettings?.options.map((option) => (
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
		<StyledRadioGroup
			onChange={(e) => onChange(e.target.value)}
			value={value}
			onBlur={onBlur}
		>
			{listOfRadios}
		</StyledRadioGroup>
	);
};

export default FormFieldRadio;
