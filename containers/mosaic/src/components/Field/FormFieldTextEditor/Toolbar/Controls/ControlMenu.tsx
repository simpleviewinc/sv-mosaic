import React, { useState, ReactElement, MouseEvent } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Editor } from "@tiptap/core";

import type { Control, MenuButtonProps, NodeFormSet, TextEditorNextInputSettings } from "../../FormFieldTextEditorTypes";

import { StyledControlMenu } from "../../FormFieldTextEditorTipTap.styled";
import { ControlMenuItem } from "./ControlMenuItem";
import { ControlButton } from "./ControlButton";
import testIds from "@root/utils/testIds";

export function ControlMenuDropdown({
	editor,
	controls,
	MenuButton,
	setNodeForm,
	inputSettings,
	testId,
}: {
	editor: Editor;
	controls: Control[];
	MenuButton?: (props: MenuButtonProps) => ReactElement;
	setNodeForm: NodeFormSet;
	inputSettings: TextEditorNextInputSettings;
	testId?: string;
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
					data-testid={testId}
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
						data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
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
