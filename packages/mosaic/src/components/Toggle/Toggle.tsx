import type { ReactElement } from "react";

import * as React from "react";

import type { ToggleProps } from "./ToggleTypes";

import testIds from "@root/utils/testIds";
import { ToggleSwitch } from "./ToggleSwitch";
import { OptionField } from "../common/OptionField";

const Toggle = ({
	checked,
	label,
	labelPlacement = "end",
	required = false,
	disabled = false,
	onChange,
	onBlur,
	describedById,
}: ToggleProps): ReactElement => {
	const id = React.useId();

	return (
		<OptionField
			id={id}
			label={label}
			labelPlacement={labelPlacement}
			required={required}
			disabled={disabled}
			gap={[3]}
			data-testid={testIds.TOGGLE}
			control={(
				<ToggleSwitch
					id={id}
					disabled={disabled}
					checked={checked}
					ariaLabel={label || undefined}
					onChange={(e) => onChange && onChange(e.target.checked)}
					onBlur={(e) => onBlur && onBlur(e.target.checked)}
					describedById={describedById}
				/>
			)}
		/>
	);
};

export default Toggle;
