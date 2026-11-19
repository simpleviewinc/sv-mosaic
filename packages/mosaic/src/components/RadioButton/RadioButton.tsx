import * as React from "react";
import type { ReactElement, HTMLAttributes } from "react";

// Types and styles
import type { RadioButtonProps } from "./RadioButtonTypes";
import { StyledRadioButton } from "./RadioButton.styled";
import { OptionField } from "../common/OptionField";
import RadioIcon from "./RadioIcon";

const RadioButton = (
	props: RadioButtonProps & HTMLAttributes<HTMLInputElement>,
): ReactElement => {
	const { label, required, disabled, value, checked } = props;
	const describedBy = props["aria-describedby"];
	const id = React.useId();

	return (
		<OptionField
			id={id}
			label={label}
			disabled={disabled}
			required={required}
			control={(
				<StyledRadioButton
					data-testid="radio-button-test"
					disabled={disabled}
					checked={checked}
					icon={<RadioIcon />}
					checkedIcon={<RadioIcon checked />}
					disableRipple
					id={id}
					value={value}
					// Set the required prop on the DOM element rather than using the RadioButton required prop because
					// we don't want it adding an asterisk. That's already done above.
					inputProps={{ required, "aria-label": label || undefined, "aria-describedby": describedBy }}
				/>
			)}
		/>
	);
};

export default RadioButton;
