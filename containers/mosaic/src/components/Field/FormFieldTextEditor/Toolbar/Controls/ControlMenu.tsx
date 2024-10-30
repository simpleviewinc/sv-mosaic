import type { ReactElement, MouseEvent } from "react";
import type { Editor } from "@tiptap/core";

import React, { useState } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";

import type { Control, MenuButtonProps, TextEditorInputSettings } from "../../FormFieldTextEditorTypes";

import { StyledControlMenu } from "../../FormFieldTextEditor.styled";
import { ControlMenuItem } from "./ControlMenuItem";
import { ControlButton } from "./ControlButton";
import testIds from "@root/utils/testIds";

interface ControlMenuDropdownProps {
	editor: Editor;
	controls: Control[];
	MenuButton?: (props: MenuButtonProps) => ReactElement;
	inputSettings: TextEditorInputSettings;
	testId?: string;
	disabled?: boolean;
}

export function ControlMenuDropdown({
	editor,
	controls,
	MenuButton,
	inputSettings,
	testId,
	disabled,
}: ControlMenuDropdownProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.target as HTMLElement);
	};

	const onClose = () => {
		setAnchorEl(null);
		editor.chain().focus();
	};

	const isActive = controls.some(({ name }) => editor.isActive(name));

	return (
		<>
			{MenuButton ? (
				<MenuButton
					onClick={onClick}
					editor={editor}
					disabled={disabled}
				/>
			) : (
				<ControlButton
					onClick={onClick}
					square
					active={isActive}
					data-testid={testId}
					disabled={disabled}
				>
					<MoreIcon />
				</ControlButton>
			)}
			<StyledControlMenu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={onClose}
			>
				{controls.map((control, index) => "Component" in control ? (
					<control.Component
						{...control}
						onClose={onClose}
						editor={editor}
						key={index}
						inputSettings={inputSettings}
						data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
						disabled={disabled}
					/>
				) : (
					<ControlMenuItem
						{...control}
						onClose={onClose}
						editor={editor}
						inputSettings={inputSettings}
						key={index}
					/>
				))}
			</StyledControlMenu>
		</>
	);
}
