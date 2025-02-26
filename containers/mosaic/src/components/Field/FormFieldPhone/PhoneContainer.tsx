import React, { useMemo, useState, type PropsWithChildren, type ReactElement } from "react";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import type { FormFieldPhoneContextState } from "./FormFieldPhoneTypes";
import { StyledPhoneContainer } from "./FormFieldPhone.styled";

function PhoneContainer({ children }: PropsWithChildren): ReactElement {
	const [container, setContainer] = useState<HTMLDivElement>();
	const [autocompleteOpen, setAutocompleteOpen] = useState(false);
	const [hasFocus, setHasFocus] = useState(false);

	const state = useMemo<FormFieldPhoneContextState>(() => ({
		autocompleteOpen,
		setAutocompleteOpen,
		hasFocus,
		setHasFocus,
		container,
	}), [container, hasFocus, autocompleteOpen]);

	return (
		<FormFieldPhoneContext.Provider value={state}>
			<StyledPhoneContainer ref={setContainer}>
				{children}
			</StyledPhoneContainer>
		</FormFieldPhoneContext.Provider>
	);
}

export default PhoneContainer;
