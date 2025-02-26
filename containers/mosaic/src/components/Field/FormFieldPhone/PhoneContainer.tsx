import type { PropsWithChildren, ReactElement } from "react";

import React, { memo, useContext } from "react";

import FormFieldPhoneContext from "./FormFieldPhoneContext";
import { StyledPhoneContainer } from "./FormFieldPhone.styled";

function PhoneContainer({ children }: PropsWithChildren): ReactElement {
	const { setContainer } = useContext(FormFieldPhoneContext);

	return (
		<StyledPhoneContainer ref={setContainer}>
			{children}
		</StyledPhoneContainer>
	);
}

export default memo(PhoneContainer);
