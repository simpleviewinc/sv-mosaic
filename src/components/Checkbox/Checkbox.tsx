import * as React from "react";
import { memo } from "react";
import { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox, StyledFormControlLabel, StyledHelperText } from "./Checkbox.styled";

const Checkbox = (props: CheckboxProps) => (
	<>
		<StyledFormControlLabel
			value="end"
			control={
				<StyledCheckbox
					className={`
						custom-checkbox
						${props.checked ? "checked" : ""}
						${props.className ? props.className : ""}
					`}
					color="default"
					edge={props.edge}
					checked={props.checked}
					onClick={props.onClick}
					disableRipple
				/>
			}
			disabled={props.disabled}
			label={props.label}
			labelPlacement="end"
		/>
		{props.helperText?.trim().length > 0 &&
			<StyledHelperText>{props.helperText}</StyledHelperText>
		}
	</>
);

export default memo(Checkbox);