import React, { ReactElement } from "react";
import { Editor } from "@tiptap/core";

import type { ControlWithProps } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditorTipTap.styled";
import testIds from "@root/utils/testIds";

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
				data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${name}`}
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
