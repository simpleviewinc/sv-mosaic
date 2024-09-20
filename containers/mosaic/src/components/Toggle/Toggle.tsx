import type { ReactElement } from "react";

import * as React from "react";

import type { ToggleProps } from "./ToggleTypes";

import { StyledSwitch } from "./Toggle.styled";
import StyledFormControlLabel from "@root/components/StyledFormControlLabel";
import testIds from "@root/utils/testIds";

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
			data-testid={testIds.TOGGLE}
			control={(
				<StyledSwitch
					onBlur={(e) => onBlur && onBlur((e.target as any).checked)}
					checked={!!checked}
					onChange={(e) => onChange && onChange(e.target.checked)}
					required={required}
				/>
			)}
		/>
	);
};

export default Toggle;
