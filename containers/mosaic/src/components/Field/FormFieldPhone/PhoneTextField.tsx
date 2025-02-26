import type { FocusEventHandler } from "react";
import React, { forwardRef, useCallback, useContext } from "react";

import type { PhoneTextFieldProps } from "./FormFieldPhoneTypes";

import { StyledPhoneTextField } from "./FormFieldPhone.styled";
import FormFieldPhoneContext from "./FormFieldPhoneContext";

const PhoneTextField = forwardRef<HTMLInputElement, PhoneTextFieldProps>(function PhoneTextField({
	onFocus,
	onBlur,
	...props
}, ref) {
	const { setHasFocus } = useContext(FormFieldPhoneContext);

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
			// TODO get rid of this, it's not used..
			fieldSize=""
			InputProps={{ inputRef: ref }}
			onFocus={_onFocus}
			onBlur={_onBlur}
		/>
	);
});

export default PhoneTextField;
