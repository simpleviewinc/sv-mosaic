import type { FocusEventHandler } from "react";
import React, { memo, forwardRef, useCallback, useContext } from "react";

import type { PhoneTextFieldProps } from "./FormFieldPhoneTypes";

import { StyledPhoneTextField } from "./FormFieldPhone.styled";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import { useSpreadRefs } from "@root/utils/hooks";

const PhoneTextField = forwardRef<HTMLInputElement, PhoneTextFieldProps>(function PhoneTextField({
	onFocus,
	countryCodeEditable: _,
	...props
}, ref) {
	const { id, disabled, error, onBlur, setHasFocus, inputRef } = useContext(FormFieldPhoneContext);
	const setRef = useSpreadRefs([inputRef, ref]);

	const _onFocus = useCallback<FocusEventHandler<HTMLInputElement>>((e) => {
		if (onFocus) {
			onFocus(e);
		}

		setHasFocus(true);
	}, [onFocus, setHasFocus]);

	const _onBlur = useCallback<FocusEventHandler<HTMLInputElement>>((e) => {
		if (onBlur) {
			onBlur(e);
		}

		setHasFocus(false);
	}, [onBlur, setHasFocus]);

	return (
		<StyledPhoneTextField
			{...props}
			id={id}
			error={error}
			disabled={disabled}
			// TODO get rid of this, it's not used..
			fieldSize=""
			InputProps={{ inputRef: setRef }}
			onFocus={_onFocus}
			onBlur={_onBlur}
		/>
	);
});

export default memo(PhoneTextField);
