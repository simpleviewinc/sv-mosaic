import React, { ReactElement } from "react";

import type { EditorMode } from "../FormFieldTextEditorTypes";

import { ModeButton, StyledModeSwitch } from "../FormFieldTextEditorTipTap.styled";

interface ModeSwitchProps {
	mode: EditorMode;
	onChange: (mode: EditorMode) => void;
	focus: boolean;
}

const modes: { label: string; value: EditorMode }[] = [
	{
		label: "Visual",
		value: "visual",
	},
	{
		label: "Code",
		value: "code",
	},
];

export function ModeSwitch({ mode: selectedMode, onChange, focus }: ModeSwitchProps): ReactElement {
	return (
		<StyledModeSwitch>
			{modes.map(({ value, label }) => (
				<ModeButton
					key={value}
					onClick={() => onChange(value)}
					$active={value === selectedMode}
					$focus={focus}
				>
					{label}
				</ModeButton>
			))}
		</StyledModeSwitch>
	);
}
