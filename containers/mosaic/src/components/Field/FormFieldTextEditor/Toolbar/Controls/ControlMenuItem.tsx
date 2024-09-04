import React, { ReactElement } from "react";
import { Editor } from "@tiptap/core";

import type { ControlWithProps, NodeFormSet, TextEditorNextInputSettings } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditorTipTap.styled";
import testIds from "@root/utils/testIds";

type ControlMenuItemProps = ControlWithProps & {
	editor: Editor;
	setNodeForm: NodeFormSet;
	inputSettings: TextEditorNextInputSettings;
	onClose: () => void;
};

export function ControlMenuItem({
	name,
	Icon,
	label,
	shortcut,
	cmd,
	editor,
	onClose,
	setNodeForm,
	inputSettings,
}: ControlMenuItemProps): ReactElement {
	const onClick = () => {
		cmd({ editor, setNodeForm, inputSettings });
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
