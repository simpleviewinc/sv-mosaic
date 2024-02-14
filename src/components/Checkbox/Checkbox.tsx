import * as React from "react";
import { memo } from "react";
import { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox, StyledFormControlLabel } from "./Checkbox.styled";

const Checkbox = (props: CheckboxProps) => (
	<>
		<StyledFormControlLabel
			label={props.label}
			labelPlacement="end"
			data-testid="label-test-id"
			value={props.value}
			disabled={props.disabled}
			control={(
				<StyledCheckbox
					data-testid="checkbox-test-id"
					className={`
						custom-checkbox
						${props.checked ? "checked" : ""}
						${props.className ? props.className : ""}
					`}
					edge={props.edge}
					checked={props.checked}
					onClick={props.onClick}
					indeterminate={props.indeterminate}
				/>
			)}
		/>
	</>
);

export default memo(Checkbox);
