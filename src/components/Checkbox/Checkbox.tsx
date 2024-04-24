import * as React from "react";
import { useId, memo } from "react";
import { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox, StyledFormControlLabel } from "./Checkbox.styled";

const Checkbox = (props: CheckboxProps) => {
	const fallbackId = useId();
	const id = props.id || fallbackId;

	return (
		<>
			<StyledFormControlLabel
				label={props.label}
				labelPlacement="end"
				data-testid="label-test-id"
				value={props.value}
				disabled={props.disabled}
				htmlFor={id}
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
						id={id}
					/>
				)}
			/>
		</>
	);
};

export default memo(Checkbox);
