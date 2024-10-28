import * as React from "react";
import { useId, memo } from "react";
import type { CheckboxProps } from "./CheckboxTypes";

import { StyledCheckbox, StyledFormControlLabel } from "./Checkbox.styled";
import testIds from "@root/utils/testIds";

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
						data-testid={testIds.CHECKBOX_WRAPPER}
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
