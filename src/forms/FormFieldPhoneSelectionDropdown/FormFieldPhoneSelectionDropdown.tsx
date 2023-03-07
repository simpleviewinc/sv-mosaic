import * as React from "react";
import { ReactElement, memo, useState } from "react";

// Components
import PhoneInput, { CountryData } from "react-phone-input-2";

// Types and styles
import "react-phone-input-2/lib/bootstrap.css";
import { PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneSelectionDropdownTypes";
import {
	PhoneInputWrapper,
	StyledDisabledText,
} from "./FormFieldPhoneSelectionDropdown.styled";
import { MosaicFieldProps } from "@root/components/Field";

const FormFieldPhoneSelectionDropdown = (
	props: MosaicFieldProps<"phone", PhoneSelectionInputSettings, PhoneDropdownData>
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	const [dialCode, setDialCode] = useState("");

	const onPhoneChange = (phoneValue: string, data: CountryData) => {
		onChange(phoneValue);

		if(phoneValue === data.dialCode) {
			onChange(undefined);
			setDialCode(data.dialCode);
		}
	}

	return !fieldDef?.disabled ? (
		<PhoneInputWrapper
			error={!!(fieldDef?.required && error)}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
		>
			<PhoneInput
				autoFormat={!!fieldDef?.inputSettings?.autoFormat}
				country={fieldDef?.inputSettings?.country ? fieldDef?.inputSettings.country : "us"}
				disabled={fieldDef?.disabled}
				onChange={onPhoneChange}
				value={value || dialCode}
				countryCodeEditable={false}
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
