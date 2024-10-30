import type { MutableRefObject, ReactElement } from "react";

import React from "react";
import Popper from "@mui/material/Popper";

import type { FloatingToolbarState } from "./FormFieldTextEditorTypes";
import type { ToolbarControlsProps } from "./Toolbar";

import { StyledFloatingToolbar } from "./FormFieldTextEditor.styled";
import { ToolbarControls } from "./Toolbar";

type FloatingToolbarProps = ToolbarControlsProps & FloatingToolbarState & {
	isBusy: MutableRefObject<boolean>;
};

const popperModifiers = [
	{
		name: "offset",
		options: {
			offset: [0, 5],
		},
	},
];

export function FloatingToolbar({ anchor, open, isBusy, ...props }: FloatingToolbarProps): ReactElement {
	return (
		<Popper
			anchorEl={anchor as HTMLElement}
			open={open}
			modifiers={popperModifiers}
		>
			<StyledFloatingToolbar
				onMouseEnter={() => (isBusy.current = true)}
				onMouseDown={() => (isBusy.current = true)}
				onMouseLeave={() => (isBusy.current = false)}
			>
				<ToolbarControls
					{...props}
				/>
			</StyledFloatingToolbar>
		</Popper>
	);
}
