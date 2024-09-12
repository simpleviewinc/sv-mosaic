import type { ReactElement } from "react";
import type { Editor } from "@tiptap/core";

import React from "react";

import type { ControlWithProps, TextEditorNextInputSettings } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditorTipTap.styled";
import testIds from "@root/utils/testIds";
import { Shortcut } from "../Shortcut";

type ControlMenuItemProps = ControlWithProps & {
	editor: Editor;
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
	inputSettings,
}: ControlMenuItemProps): ReactElement {
	const onClick = () => {
		cmd({ editor, inputSettings });
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
						<Shortcut shortcut={shortcut} />
					</MenuItemShortcut>
				)}
			</StyledMenuItem>
		</li>
	);
}
