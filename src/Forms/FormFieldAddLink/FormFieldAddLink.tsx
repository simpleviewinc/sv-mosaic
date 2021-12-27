import * as React from 'react';
import { ReactElement } from 'react';
import { TextFieldProps } from '@root/forms/FormFieldText';

// Styles
import { StyledSpan, StyledTextField } from './FormFieldAddLink.styled';

const FormFieldAddLink = (
	props: TextFieldProps
): ReactElement => {

	return (
		<StyledTextField
			prefixElement={<StyledSpan>https://</StyledSpan>}
			placeholder={'www.hello.com'}
			{...props}
		/>
	);
};

export default FormFieldAddLink;
