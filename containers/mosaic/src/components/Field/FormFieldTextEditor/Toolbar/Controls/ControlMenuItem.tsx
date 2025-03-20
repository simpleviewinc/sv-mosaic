import type { MouseEvent, ReactElement } from "react";
import type { Editor } from "@tiptap/core";

import React from "react";

import type { ControlWithProps, TextEditorInputSettings } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditor.styled";
import testIds from "@root/utils/testIds";
import { Shortcut } from "../Shortcut";
import type { MenuItemProps } from "@mui/material/MenuItem";

type ControlMenuItemProps = ControlWithProps & MenuItemProps & {
	editor: Editor;
	inputSettings: TextEditorInputSettings;
	onSelected: () => void;
};

export function ControlMenuItem({
	name,
	Icon,
	label,
	shortcut,
	cmd,
	editor,
	onSelected,
	inputSettings,
	value: _value,
	show: _show,
	...props
}: ControlMenuItemProps): ReactElement {
	const onClick = (event: MouseEvent<HTMLButtonElement>) => {
		cmd({ editor, inputSettings, event });
		onSelected();
	};

	return (
		<StyledMenuItem
			{...props}
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
	);
}
