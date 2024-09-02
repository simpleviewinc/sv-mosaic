import React, { ReactElement } from "react";
import Popper from "@mui/material/Popper";

import type { FloatingToolbarState } from "./FormFieldTextEditorTypes";

import { Toolbar } from "./FormFieldTextEditorTipTap.styled";
import { ToolbarControls, ToolbarControlsProps } from "./Toolbar";

type FloatingToolbarProps = ToolbarControlsProps & FloatingToolbarState;

const popperModifiers = [
	{
		name: "offset",
		options: {
			offset: [0, 5],
		},
	},
];

export function FloatingToolbar({ anchor, open, ...props }: FloatingToolbarProps): ReactElement {
	return (
		<Popper
			anchorEl={anchor as HTMLElement}
			open={open}
			modifiers={popperModifiers}
		>
			<Toolbar>
				<ToolbarControls
					{...props}
				/>
			</Toolbar>
		</Popper>
	);
}
