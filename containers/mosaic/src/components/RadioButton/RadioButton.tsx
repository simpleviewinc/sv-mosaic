import * as React from "react";
import type { ReactElement, HTMLAttributes } from "react";

// Types and styles
import type { RadioButtonProps } from "./RadioButtonTypes";
import { StyledRadioButton, StyledRequired } from "./RadioButton.styled";
import { StyledOptionLabel } from "../common/StyledOptionLabel";
import { StyledOptionFormControl } from "../common/StyledOptionFormControl";
import RadioIcon from "./RadioIcon";

const RadioButton = (
	props: RadioButtonProps & HTMLAttributes<HTMLInputElement>,
): ReactElement => {
	const { label, required, disabled, value, checked } = props;

	return (
		<StyledOptionFormControl
			label={label && (
				<StyledOptionLabel $disabled={disabled}>
					{props.label}
					{required && <StyledRequired>*</StyledRequired>}
				</StyledOptionLabel>
			)}
			disableTypography
			labelPlacement="end"
			value={value}
			disabled={disabled}
			control={(
				<StyledRadioButton
					data-testid="radio-button-test"
					disabled={disabled}
					checked={checked}
					icon={<RadioIcon />}
					checkedIcon={<RadioIcon checked />}
					disableRipple
				/>
			)}
		/>
	);
};

export default RadioButton;
