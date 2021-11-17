import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

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
import Field from '@root/components/Field';

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
