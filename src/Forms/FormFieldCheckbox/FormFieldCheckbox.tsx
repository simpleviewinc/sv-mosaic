import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Types and styles
import { FormFieldCheckboxProps } from './FormFieldCheckboxTypes';
import { StyledCheckboxList } from './FormFieldCheckbox.styled';

const FormFieldCheckbox = (
	props: FormFieldCheckboxProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		disabled,
		onChange,
		onBlur,
		inputSettings,
		value
	} = props;

	return (
		<StyledCheckboxList
			disabled={disabled}
			checked={value}
			options={inputSettings?.options}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
};

export default memo(FormFieldCheckbox);
