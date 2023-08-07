import * as React from "react";
import { ReactElement, memo, useState } from "react";

// Components
import PhoneInput, { CountryData } from "react-phone-input-2";

// Types and styles
import "react-phone-input-2/lib/bootstrap.css";
import { PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneSelectionDropdownTypes";
import {
	PhoneInputWrapper,
} from "./FormFieldPhoneSelectionDropdown.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { StyledDisabledText } from "../shared/styledComponents";

const FormFieldPhoneSelectionDropdown = (
	props: MosaicFieldProps<"phone", PhoneSelectionInputSettings, PhoneDropdownData>
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		dispatch
	} = props;

	const [dialCode, setDialCode] = useState("");

	// TODO Instead of dispatching actions in the field components,
	// emit onInvalid and onValid events that can be subscribed to
	const setError = (msg: string) => dispatch && dispatch((d) => {
		d({
			type: "FIELD_VALIDATE",
			name: fieldDef.name,
			value: msg,
		})
	});

	const clearError = () => dispatch && dispatch((d) => {
		d({
			type: "FIELD_UNVALIDATE",
			name: fieldDef.name
		})
	});

	const onPhoneChange = (phoneValue: string, data: CountryData) => {

		if (phoneValue === data.dialCode) {
			onChange(undefined);
			setDialCode(data.dialCode);
			clearError();
		} else {
			onChange(phoneValue);

			// A very specific check to ensure US (country code +1)
			// numbers are exactly 10 digits in length (exc. the leading 1)
			if (data.dialCode === "1" && phoneValue.length !== 11) {
				setError("Phone number must be exactly 10 numbers excluding the country code")
			} else {
				clearError();
			}
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
		<StyledDisabledText>{value ?? "Disabled field"}</StyledDisabledText>
	);
};
export default memo(FormFieldPhoneSelectionDropdown);
