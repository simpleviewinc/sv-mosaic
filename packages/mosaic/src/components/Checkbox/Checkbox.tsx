import React, { useId, memo } from "react";
import type { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox } from "./Checkbox.styled";
import testIds from "@root/utils/testIds";
import CheckboxIcon from "./CheckboxIcon";
import { StyledOptionLabel } from "../common/StyledOptionLabel";
import { StyledOptionFormControl } from "../common/StyledOptionFormControl";

const Checkbox = (props: CheckboxProps) => {
	const fallbackId = useId();
	const id = props.id || fallbackId;

	return (
		<StyledOptionFormControl
			label={props.label && (
				<StyledOptionLabel
					disabled={props.disabled}
					description={props.description}
				>
					{props.label}
				</StyledOptionLabel>
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
					disabled={props.disabled}
					// When no visible label text is rendered, allow an accessible
					// name to still be supplied per WAI-ARIA APG guidance.
					inputProps={{
						"aria-label": props["aria-label"],
						"aria-labelledby": props["aria-labelledby"],
					}}
				/>
			)}
		/>
	);
};

export default memo(Checkbox);
