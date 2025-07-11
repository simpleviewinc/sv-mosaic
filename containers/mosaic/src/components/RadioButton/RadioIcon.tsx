import React from "react";
import { StyledRadioCheckedDot, StyledRadioIcon } from "./RadioButton.styled";

const RadioIcon = ({
	checked,
}: {
	checked?: boolean;
}) => {
	return (
		<StyledRadioIcon>
			{checked && <StyledRadioCheckedDot />}
		</StyledRadioIcon>
	);
};

export default RadioIcon;
