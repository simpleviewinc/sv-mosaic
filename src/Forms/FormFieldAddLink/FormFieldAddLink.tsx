// import * as React from 'react';
// import { HTMLAttributes, ReactElement } from 'react';
// import { TextFieldProps } from '@root/forms/FormFieldText';

// // Styles
// import { StyledSpan, StyledTextField } from './FormFieldAddLink.styled';

// const FormFieldAddLink = (
// 	props: TextFieldProps & HTMLAttributes<HTMLInputElement>
// ): ReactElement => {
// 	const {
// 		disabled,
// 		className,
// 		name,
// 		error,
// 		inputSettings,
// 		required,
// 		onBlur,
// 		onChange,
// 		value,
// 	} = props;

// 	return (
// 		<StyledTextField
// 			className={className}
// 			disabled={disabled}
// 			error={error}
// 			id={name}
// 			inputSettings={{
// 				placeholder: 'www.hello.com',
// 				prefixElement: <StyledSpan>https://</StyledSpan>,
// 				...inputSettings,
// 			}}
// 			required={required}
// 			onBlur={onBlur}
// 			onChange={onChange}
// 			value={value}
// 		/>
// 	);
// };

// export default FormFieldAddLink;
