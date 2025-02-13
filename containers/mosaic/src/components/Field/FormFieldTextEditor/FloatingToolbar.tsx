import type { ReactElement } from "react";

import React from "react";
import Popper from "@mui/material/Popper";

import type { FloatingToolbarProps } from "./FormFieldTextEditorTypes";

import { StyledFloatingToolbar } from "./FormFieldTextEditor.styled";
import { ToolbarControls } from "./Toolbar";
import testIds from "@root/utils/testIds";

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
				data-testid={testIds.TEXT_EDITOR_FLOATING_TOOLBAR}
			>
				<ToolbarControls
					{...props}
				/>
			</StyledFloatingToolbar>
		</Popper>
	);
}
