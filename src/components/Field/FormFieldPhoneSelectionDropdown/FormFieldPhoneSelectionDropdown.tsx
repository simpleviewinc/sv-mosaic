import * as React from "react";
import { ReactElement, memo, useState } from "react";

// Components
import PhoneInput, { CountryData } from "@simpleview/react-phone-input-2";

// Types and styles
import "@simpleview/react-phone-input-2/lib/bootstrap.css";
import { PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneSelectionDropdownTypes";
import {
	PhoneInputWrapper,
} from "./FormFieldPhoneSelectionDropdown.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { Skeleton } from "@mui/material";

const FormFieldPhoneSelectionDropdown = (
	props: MosaicFieldProps<"phone", PhoneSelectionInputSettings, PhoneDropdownData>,
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		disabled,
		inputRef,
		id,
		skeleton,
	} = props;

	const [dialCode, setDialCode] = useState("");

	const onPhoneChange = (phoneValue: string, data: CountryData) => {
		if (phoneValue === data.dialCode) {
			onChange(undefined);
			setDialCode(data.dialCode);
		} else {
			onChange(phoneValue);
		}
	};

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
			/>
		);
	}

	return (
		<PhoneInputWrapper
			$error={!!(fieldDef?.required && error)}
			onBlur={(e) => onBlur && onBlur((e.target as HTMLInputElement).value)}
			$disabled={disabled}
		>
			<PhoneInput
				autoFormat={!!fieldDef?.inputSettings?.autoFormat}
				country={fieldDef?.inputSettings?.country ? fieldDef?.inputSettings.country : "us"}
				disabled={disabled}
				onChange={onPhoneChange}
				value={value || dialCode}
				countryCodeEditable={false}
				inputProps={{
					required: fieldDef?.required,
					ref: inputRef,
					id,
				}}
				tabbableDropdown={false}
			/>
		</PhoneInputWrapper>
	);
};
export default memo(FormFieldPhoneSelectionDropdown);
