import React, { useState, ReactElement, MouseEvent } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Editor } from "@tiptap/core";

import type { Control, MenuButtonProps, NodeFormSet, TextEditorNextInputSettings } from "../../FormFieldTextEditorTypes";

import { StyledControlMenu } from "../../FormFieldTextEditorNext.styled";
import { ControlMenuItem } from "./ControlMenuItem";
import { ControlButton } from "./ControlButton";

export function ControlMenuDropdown({
	editor,
	controls,
	MenuButton,
	setNodeForm,
	inputSettings,
}: {
	editor: Editor;
	controls: Control[];
	MenuButton?: (props: MenuButtonProps) => ReactElement;
	setNodeForm: NodeFormSet;
	inputSettings: TextEditorNextInputSettings;
}): ReactElement {
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
				/>
			) : (
				<ControlButton
					onClick={onClick}
					square
					active={isActive}
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
						setNodeForm={setNodeForm}
						inputSettings={inputSettings}
					/>
				) : (
					<ControlMenuItem
						{...control}
						onClose={onClose}
						editor={editor}
						key={index}
					/>
				))}
			</StyledControlMenu>
		</>
	);
}
