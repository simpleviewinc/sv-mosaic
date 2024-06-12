import * as React from "react";
import { ReactElement } from "react";

// Types and styles
import { ToggleProps } from "./ToggleTypes";
import { StyledSwitch } from "./Toggle.styled";
import StyledFormControlLabel from "@root/components/StyledFormControlLabel";

const Toggle = (
	props: ToggleProps,
): ReactElement => {
	const {
		checked,
		label,
		labelPlacement = "end",
		required = false,
		disabled = false,
		onChange,
		onBlur,
	} = props;

	return (
		<StyledFormControlLabel
			label={label}
			labelPlacement={labelPlacement}
			disabled={disabled}
			control={(
				<StyledSwitch
					onBlur={(e) => onBlur && onBlur(e.target.checked)}
					checked={!!checked}
					onChange={(e) => onChange && onChange(e.target.checked)}
					required={required}
				/>
			)}
		/>
	);
};

export default Toggle;
