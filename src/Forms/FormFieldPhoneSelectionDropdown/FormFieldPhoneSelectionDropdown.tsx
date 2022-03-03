import * as React from 'react';
import { ReactElement, memo } from 'react';

// Components
import PhoneInput from 'react-phone-input-2';

// Types and styles
import 'react-phone-input-2/lib/bootstrap.css';
import { PhoneSelectionDef } from './FormFieldPhoneSelectionDropdownTypes';
import {
	PhoneInputWrapper,
	StyledDisabledText,
} from './FormFieldPhoneSelectionDropdown.styled';
import { MosaicFieldProps } from '@root/components/Field';

const FormFieldPhoneSelectionDropdown = (
	props: MosaicFieldProps<PhoneSelectionDef, string>
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	return !fieldDef?.disabled ? (
		<PhoneInputWrapper
			error={!!(fieldDef?.required && error)}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
		>
			<PhoneInput
				autoFormat={!!fieldDef?.inputSettings?.autoFormat}
				country={fieldDef?.inputSettings?.country ? fieldDef?.inputSettings.country : 'us'}
				disabled={fieldDef?.disabled}
				onChange={onChange}
				placeholder={fieldDef?.inputSettings?.placeholder}
				value={value}
				inputProps={{
					required: fieldDef?.required,
				}}
			/>
		</PhoneInputWrapper>
	) : (
		value ? <StyledDisabledText>Phone value: {value}</StyledDisabledText> : <StyledDisabledText>Phone field disabled</StyledDisabledText>
	);
};
export default memo(FormFieldPhoneSelectionDropdown);
