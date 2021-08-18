import * as React from "react";
import { memo } from "react";
import { CheckboxProps } from "./CheckboxTypes";

import {
	StyledCheckbox,
	StyledFormControlLabel,
	StyledHelperText
} from "./Checkbox.styled";

const Checkbox = (props: CheckboxProps) => (
	<>
		<StyledFormControlLabel
			label={props.label}
			labelPlacement="end"
			data-testid="label-test-id"
			value="end"
			disabled={props.disabled}
			control={
				<StyledCheckbox
					data-testid="checkbox-test-id"
					className={`
						custom-checkbox
						${props.checked ? "checked" : ""}
						${props.className ? props.className : ""}
					`}
					color="default"
					edge={props.edge}
					checked={props.checked}
					onClick={props.onClick}
					indeterminate={props.indeterminate}
					disableRipple
				/>
			}
		/>
		{props.helperText?.trim().length > 0 &&
			<StyledHelperText>{props.helperText}</StyledHelperText>
		}
	</>
);

export default memo(Checkbox);