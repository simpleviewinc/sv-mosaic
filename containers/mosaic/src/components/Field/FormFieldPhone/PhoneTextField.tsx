import type { ComponentProps, FocusEventHandler } from "react";
import React, { memo, forwardRef, useCallback, useContext } from "react";

import { StyledPhoneTextField } from "./FormFieldPhone.styled";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import { useSpreadRefs } from "@root/utils/hooks";

const PhoneTextField = forwardRef<HTMLInputElement, ComponentProps<"input"> & { countryCodeEditable: boolean }>(function PhoneTextField({
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
			id={id}
			error={error}
			disabled={disabled}
			InputProps={{ inputRef: setRef, inputProps: props }}
			onFocus={_onFocus}
			onBlur={_onBlur}
		/>
	);
});

export default memo(PhoneTextField);
