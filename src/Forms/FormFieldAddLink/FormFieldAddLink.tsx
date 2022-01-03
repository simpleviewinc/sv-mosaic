import * as React from 'react';
import { ReactElement } from 'react';
import { TextFieldProps } from '@root/forms/FormFieldText';

// Styles
import { StyledSpan, StyledTextField } from './FormFieldAddLink.styled';

const FormFieldAddLink = (
	props: TextFieldProps
): ReactElement => {
	const { disabled, error, inputSettings, required, onChange, value } = props;

	return (
		<StyledTextField
			disabled={disabled}
			error={error}
			inputSettings={{
				placeholder: 'www.hello.com',
				prefixElement: <StyledSpan>https://</StyledSpan>,
				...inputSettings,
			}}
			required={required}
			onChange={onChange}
			value={value}
		/>
	);
};

export default FormFieldAddLink;
