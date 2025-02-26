import type { ReactElement } from "react";
import React, { memo, useMemo, useState } from "react";
import PhoneInput, { isSupportedCountry } from "react-phone-number-input";

import type { FormFieldPhoneContextState, PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneTypes";
import type { MosaicFieldProps } from "@root/components/Field";

import "@simpleview/react-phone-input-2/lib/bootstrap.css";
import Skeleton from "@mui/material/Skeleton";
import PhoneTextField from "./PhoneTextField";
import PhoneCodeSelect from "./PhoneCodeSelect";
import PhoneContainer from "./PhoneContainer";
import FormFieldPhoneContext from "./FormFieldPhoneContext";

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

	const [container, setContainer] = useState<HTMLDivElement>();
	const [autocompleteOpen, setAutocompleteOpen] = useState(false);
	const [hasFocus, setHasFocus] = useState(false);

	const state = useMemo<FormFieldPhoneContextState>(() => ({
		autocompleteOpen,
		setAutocompleteOpen,
		hasFocus,
		setHasFocus,
		container,
		setContainer,
		id,
		error: Boolean(error),
		disabled,
		onBlur,
		inputRef,
	}), [autocompleteOpen, hasFocus, container, id, error, disabled, onBlur, inputRef]);

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
		<FormFieldPhoneContext.Provider value={state}>
			<PhoneInput
				defaultCountry={defaultCountry}
				value={value}
				onChange={onChange}
				containerComponent={PhoneContainer}
				inputComponent={PhoneTextField}
				countrySelectComponent={PhoneCodeSelect}
				addInternationalOption={false}
				countryCodeEditable={false}
			/>
		</FormFieldPhoneContext.Provider>
	);
};

export default memo(FormFieldPhone);
