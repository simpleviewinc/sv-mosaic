import React, { ReactElement } from "react";
import { Editor } from "@tiptap/core";
import { Level } from "@tiptap/extension-heading";

import { MenuItemLabel, MenuItemShortcut, StyledMenuItem } from "../../FormFieldTextEditorTipTap.styled";
import { ControlWithComponent } from "../../FormFieldTextEditorTypes";
import { Shortcut } from "..";
import testIds from "@root/utils/testIds";

type ControlHeadingProps = Omit<ControlWithComponent, "component"> & {
	editor: Editor;
	onClose?: () => void;
};

export function ControlHeading({ editor, level, onClose, shortcut }: ControlHeadingProps & { level: Level }): ReactElement {
	const onClick = () => {
		editor.chain().focus().toggleHeading({ level }).run();
		onClose && onClose();
	};

	return (
		<StyledMenuItem
			onClick={onClick}
			$active={editor.isActive("heading", { level })}
			data-testid={`${testIds.TEXT_EDITOR_HEADING_CONTROL}-${level}`}
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

export function ControlNormalText({ editor, onClose, shortcut }: ControlHeadingProps): ReactElement {
	const onClick = () => {
		editor.chain().focus().setParagraph().run();
		onClose && onClose();
	};

	return (
		<StyledMenuItem
			onClick={onClick}
			$active={editor.isActive("paragraph")}
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
