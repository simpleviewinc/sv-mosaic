import React, { useId, memo } from "react";
import type { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox } from "./Checkbox.styled";
import testIds from "@root/utils/testIds";
import CheckboxIcon from "./CheckboxIcon";
import { StyledOptionLabel } from "../common/StyledOptionLabel";
import { StyledOptionFormControl } from "../common/StyledOptionFormControl";
import useMountWarning from "@root/utils/hooks/useMountWarning/useMountWarning";

const Checkbox = (props: CheckboxProps) => {
	const fallbackId = useId();
	const id = props.id || fallbackId;
	const { label } = props;
	const ariaLabel = props["aria-label"];
	const ariaLabelledBy = props["aria-labelledby"];

	// `aria-label`/`aria-labelledby` becomes the input's accessible name and
	// hides the visible label from assistive technology, so the announced name
	// and the visible text can silently diverge (WCAG 2.1 SC 2.5.3).
	useMountWarning(
		"[MOS Checkbox] Both a visible `label` and an `aria-label`/`aria-labelledby` were provided. The aria attribute takes precedence as the checkbox's accessible name and overrides the visible label for assistive technology. WCAG 2.1 SC 2.5.3 requires the accessible name to contain the visible label text.",
		Boolean(label && (ariaLabel || ariaLabelledBy)),
	);

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
					slotProps={{
						input: {
							"aria-label": props["aria-label"],
							"aria-labelledby": props["aria-labelledby"],
						},
					}}
				/>
			)}
		/>
	);
};

export default memo(Checkbox);
