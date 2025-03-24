import type { ReactElement } from "react";
import type { Editor } from "@tiptap/core";
import type { Level } from "@tiptap/extension-heading";

import React from "react";

import type { ControlWithComponent, TextEditorInputSettings } from "../../FormFieldTextEditorTypes";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditor.styled";
import { Shortcut } from "../Shortcut";
import type { MenuItemProps } from "@mui/material/MenuItem";

type ControlHeadingProps = Omit<ControlWithComponent, "component"> & MenuItemProps & {
	editor: Editor;
	onSelected?: () => void;
	inputSettings: TextEditorInputSettings;
};

export function ControlHeading({
	editor,
	level,
	onSelected,
	shortcut,
	value: _value,
	show: _show,
	Component: _Component,
	inputSettings: _inputSettings,
	...props
}: ControlHeadingProps & { level: Level }): ReactElement {
	const onClick = () => {
		editor.chain().focus().toggleHeading({ level }).run();
		onSelected && onSelected();
	};

	return (
		<StyledMenuItem
			onClick={onClick}
			$active={editor.isActive("heading", { level })}
			{...props}
		>
			<MenuItemLabel>
				{React.createElement(`h${level}`, null, `Heading ${level}`)}
			</MenuItemLabel>
			{shortcut && (
				<MenuItemShortcut>
					<Shortcut shortcut={shortcut} />
				</MenuItemShortcut>
			)}
		</StyledMenuItem>
	);
}

export function ControlNormalText({
	editor,
	onSelected,
	shortcut,
	value: _value,
	show: _show,
	Component: _Component,
	inputSettings: _inputSettings,
	...props
}: ControlHeadingProps): ReactElement {
	const onClick = () => {
		editor.chain().focus().setParagraph().run();
		onSelected && onSelected();
	};

	return (
		<StyledMenuItem
			onClick={onClick}
			$active={editor.isActive("paragraph")}
			{...props}
		>
			<MenuItemLabel>Normal Text</MenuItemLabel>
			{shortcut && (
				<MenuItemShortcut>
					<Shortcut shortcut={shortcut} />
				</MenuItemShortcut>
			)}
		</StyledMenuItem>
	);
}

export function ControlHeading1(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={1} {...props} />;
}

export function ControlHeading2(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={2} {...props} />;
}

export function ControlHeading3(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={3} {...props} />;
}

export function ControlHeading4(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={4} {...props} />;
}

export function ControlHeading5(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={5} {...props} />;
}

export function ControlHeading6(props: ControlHeadingProps): ReactElement {
	return <ControlHeading level={6} {...props} />;
}
