import type { ReactElement } from "react";

import * as React from "react";

import type { ToggleProps } from "./ToggleTypes";

import testIds from "@root/utils/testIds";
import { ToggleSwitch } from "./ToggleSwitch";
import { StyledOptionFormControl } from "../common/StyledOptionFormControl";
import { StyledOptionLabel } from "../common/StyledOptionLabel";

const Toggle = ({
	checked,
	label,
	labelPlacement = "end",
	required = false,
	disabled = false,
	onChange,
	onBlur,
}: ToggleProps): ReactElement => {
	return (
		<StyledOptionFormControl
			label={label && (
				<StyledOptionLabel
					disabled={disabled}
					required={required}
				>
					{label}
				</StyledOptionLabel>
			)}
			$gap={[3]}
			disableTypography
			labelPlacement={labelPlacement}
			disabled={disabled}
			data-testid={testIds.TOGGLE}
			control={(
				<ToggleSwitch
					checked={checked}
					onChange={(e) => onChange && onChange(e.target.checked)}
					onBlur={(e) => onBlur && onBlur(e.target.checked)}
				/>
			)}
		/>
	);
};

export default Toggle;
