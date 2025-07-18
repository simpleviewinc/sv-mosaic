import type { ChangeEventHandler, ComponentProps, FocusEventHandler, ReactElement } from "react";
import useIsFocusVisible from "@mui/utils/useIsFocusVisible";

import React, { useState } from "react";

import { StyledCheckboxInput, StyledSwitchKnob, StyledSwitchKnobFocus, StyledSwitchTrack, StyledSwitchWrapper } from "./Toggle.styled";

export function ToggleSwitch({
	disabled,
	checked,
	onChange,
	onBlur: providedOnBlur,
}: {
	disabled?: boolean;
	checked?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}): ReactElement {
	const { ref, onFocus, onBlur, isFocusVisibleRef } = useIsFocusVisible();
	const [isFocusVisible, setIsFocusVisible] = useState(false);
	const [isOver, setIsOver] = useState(false);

	const inputProps: Pick<ComponentProps<"input">, "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave"> = {
		onFocus: (e) => {
			onFocus(e);
			setIsFocusVisible(isFocusVisibleRef.current);
		},
		onBlur: (e) => {
			onBlur(e);
			providedOnBlur && onBlur(e);
			setIsFocusVisible(isFocusVisibleRef.current);
		},
		onMouseEnter: () => setIsOver(true),
		onMouseLeave: () => setIsOver(false),
	};

	return (
		<StyledSwitchWrapper>
			<StyledCheckboxInput
				onChange={onChange}
				ref={ref}
				disabled={disabled}
				{...inputProps}
			/>
			<StyledSwitchTrack $checked={checked} $disabled={disabled} />
			<StyledSwitchKnob $checked={checked} $disabled={disabled} />
			<StyledSwitchKnobFocus
				$checked={checked}
				$isFocusVisible={isFocusVisible}
				$isOver={isOver}
			/>
		</StyledSwitchWrapper>
	);
}
