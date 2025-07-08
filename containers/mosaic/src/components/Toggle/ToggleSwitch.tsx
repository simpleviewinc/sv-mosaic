import type { ChangeEventHandler, ComponentProps, FocusEventHandler, ReactElement } from "react";
import useIsFocusVisible from "@mui/material/utils/useIsFocusVisible";

import React, { useState } from "react";

import { StyledCheckboxInput, StyledSwitchKnob, StyledSwitchKnobFocus, StyledSwitchTrack, StyledSwitchWrapper } from "./Toggle.styled";

export function ToggleSwitch({
	checked,
	onChange,
	onBlur: providedOnBlur,
}: {
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
				{...inputProps}
			/>
			<StyledSwitchTrack $checked={checked} />
			<StyledSwitchKnob $checked={checked} />
			<StyledSwitchKnobFocus
				$checked={checked}
				$isFocusVisible={isFocusVisible}
				$isOver={isOver}
			/>
		</StyledSwitchWrapper>
	);
}
