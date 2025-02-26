import type { ComponentProps, ReactElement } from "react";
import React, { forwardRef, memo, useMemo } from "react";
import PhoneInput, { isSupportedCountry } from "react-phone-number-input";

import type { PhoneCodeSelectProps, PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneTypes";
import type { MosaicFieldProps } from "@root/components/Field";

import "@simpleview/react-phone-input-2/lib/bootstrap.css";
import Skeleton from "@mui/material/Skeleton";
import PhoneTextField from "./PhoneTextField";
import PhoneCodeSelect from "./PhoneCodeSelect";
import PhoneContainer from "./PhoneContainer";
import { useSpreadRefs } from "@root/utils/hooks";

const FormFieldPhone = (
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
	const {
		inputSettings: {
			country,
		} = {},
	} = fieldDef;

	const defaultCountry = isSupportedCountry(country) ? country : "US";

	const components = useMemo(() => ({
		PhoneTextField: forwardRef<HTMLInputElement, ComponentProps<"input">>((props, forwardedRef) => {
			const setRef = useSpreadRefs([inputRef, forwardedRef]);

			return (
				<PhoneTextField
					{...props}
					id={id}
					disabled={disabled}
					ref={setRef}
					onBlur={onBlur}
					error={Boolean(error)}
				/>
			);
		}),
		PhoneCodeSelect: (props: PhoneCodeSelectProps) => (
			<PhoneCodeSelect
				{...props}
				disabled={disabled}
				error={Boolean(error)}
			/>
		),
	}), [inputRef, id, disabled, onBlur]);

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
				data-testid={testIds.FORM_FIELD_SKELETON}
			/>
		);
	}

	return (
		<PhoneInput
			defaultCountry={defaultCountry}
			value={value}
			onChange={onChange}
			containerComponent={PhoneContainer}
			inputComponent={components.PhoneTextField}
			countrySelectComponent={components.PhoneCodeSelect}
			addInternationalOption={false}
			focusInputOnCountrySelection={false}
		/>
	);
};

export default memo(FormFieldPhone);
