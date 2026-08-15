import React, { useId, memo } from "react";
import type { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox } from "./Checkbox.styled";
import testIds from "@root/utils/testIds";
import CheckboxIcon from "./CheckboxIcon";
import { StyledOptionLabel } from "../common/StyledOptionLabel";
import { StyledOptionFormControl } from "../common/StyledOptionFormControl";
import warnOnceInDev from "@root/utils/warnOnceInDev/warnOnceInDev";

const CHECKBOX_LABEL_ARIA_CONFLICT_KEY = "mosaic:checkbox:label-and-aria-conflict";

const Checkbox = (props: CheckboxProps) => {
	const fallbackId = useId();
	const id = props.id || fallbackId;

	// `aria-label`/`aria-labelledby` always wins as the checkbox's accessible
	// name over the visible `label` (see the `inputProps` forwarding below),
	// so having both set means the visible text and the announced name will
	// silently diverge for assistive technology users.
	if (props.label && (props["aria-label"] || props["aria-labelledby"])) {
		warnOnceInDev(
			CHECKBOX_LABEL_ARIA_CONFLICT_KEY,
			"Checkbox: both a visible `label` and an `aria-label`/`aria-labelledby` were provided. The aria attribute takes precedence as the checkbox's accessible name and will override the visible label for assistive technology. Only provide `aria-label`/`aria-labelledby` when there is no visible label text.",
		);
	}

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
