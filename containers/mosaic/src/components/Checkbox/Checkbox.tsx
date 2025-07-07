import React, { useId, memo } from "react";
import type { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox, StyledFormControlLabel, StyledLabel } from "./Checkbox.styled";
import testIds from "@root/utils/testIds";
import CheckboxIcon from "./CheckboxIcon";

const Checkbox = (props: CheckboxProps) => {
	const fallbackId = useId();
	const id = props.id || fallbackId;

	return (
		<StyledFormControlLabel
			label={props.label && (
				<StyledLabel $disabled={props.disabled}>{props.label}</StyledLabel>
			)}
			labelPlacement="end"
			data-testid="label-test-id"
			value={props.value}
			disabled={props.disabled}
			htmlFor={id}
			disableTypography
			control={(
				<StyledCheckbox
					data-testid={testIds.CHECKBOX_WRAPPER}
					className={`
						custom-checkbox
						${props.checked ? "checked" : ""}
						${props.className ? props.className : ""}
					`}
					edge={props.edge}
					checked={props.checked}
					onClick={props.onClick}
					onChange={props.onChange}
					indeterminate={props.indeterminate}
					id={id}
					icon={<CheckboxIcon />}
					checkedIcon={<CheckboxIcon checked />}
					indeterminateIcon={<CheckboxIcon indeterminate />}
					disableRipple
				/>
			)}
		/>
	);
};

export default memo(Checkbox);
