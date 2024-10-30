import type { ReactElement } from "react";

import React from "react";

import type { MenuButtonProps } from "../../FormFieldTextEditorTypes";

import { StyledTextStyleMenuButton } from "../../FormFieldTextEditor.styled";
import testIds from "@root/utils/testIds";

export function TextStyleMenuButton({ disabled, editor, onClick }: MenuButtonProps): ReactElement {
	const textStyles = {
		"Normal Text": editor.isActive("paragraph"),
		"Heading 1": editor.isActive("heading", { level: 1 }),
		"Heading 2": editor.isActive("heading", { level: 2 }),
		"Heading 3": editor.isActive("heading", { level: 3 }),
		"Heading 4": editor.isActive("heading", { level: 4 }),
		"Heading 5": editor.isActive("heading", { level: 5 }),
		"Heading 6": editor.isActive("heading", { level: 6 }),
	};

	const currentStyle = Object.keys(textStyles).reduce((acc, curr) => textStyles[curr] ? curr : acc, "");

	return (
		<StyledTextStyleMenuButton
			onClick={onClick}
			disabled={disabled || !currentStyle}
			data-testid={testIds.TEXT_EDITOR_HEADING_MENU}
		>
			{currentStyle || "Normal Text"}
		</StyledTextStyleMenuButton>
	);
}
