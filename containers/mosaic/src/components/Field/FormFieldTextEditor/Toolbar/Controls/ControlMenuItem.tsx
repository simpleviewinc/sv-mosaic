import React, { ReactElement } from "react";
import { Editor } from "@tiptap/core";

import type { ControlWithProps } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditorNext.styled";

export function ControlMenuItem({
	name,
	Icon,
	label,
	shortcut,
	cmd,
	editor,
	onClose,
}: ControlWithProps & { editor: Editor; onClose: () => void }): ReactElement {
	const onClick = () => {
		cmd(editor);
		onClose();
	};

	return (
		<li>
			<StyledMenuItem
				onClick={onClick}
				$active={editor.isActive(name)}
			>
				<MenuItemLabel>
					{Icon && <Icon />}
					{label}
				</MenuItemLabel>
				{shortcut && (
					<MenuItemShortcut>
						{shortcut.pc}
					</MenuItemShortcut>
				)}
			</StyledMenuItem>
		</li>
	);
}
