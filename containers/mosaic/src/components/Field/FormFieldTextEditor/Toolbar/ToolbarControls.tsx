import type { ReactElement } from "react";
import type { Editor } from "@tiptap/core";

import React, { useMemo } from "react";

import type { ControlsConfig, SelectionType, TextEditorNextInputSettings } from "../FormFieldTextEditorTypes";

import { ControlButton, ControlMenuDropdown, resolveControls } from "./Controls";
import { ControlGroup, ControlGroups } from "../FormFieldTextEditorTipTap.styled";
import testIds from "@root/utils/testIds";

export interface ToolbarControlsProps {
	controls: ControlsConfig;
	editor: Editor;
	selectionTypes?: SelectionType[];
	inputSettings: TextEditorNextInputSettings;
	disabled?: boolean;
}

export function ToolbarControls({
	editor,
	controls: controlsDef,
	selectionTypes,
	inputSettings = {},
	disabled,
}: ToolbarControlsProps): ReactElement {
	const groups = useMemo(() => resolveControls(controlsDef, selectionTypes), [controlsDef, selectionTypes]);

	return (
		<ControlGroups>
			{groups.map((group, groupIndex) => (
				<ControlGroup key={groupIndex}>
					{group.map((control, index) => Array.isArray(control) ? (
						<ControlMenuDropdown
							key={index}
							editor={editor}
							controls={control}
							inputSettings={inputSettings}
							testId={`${testIds.TEXT_EDITOR_CONTROL}:menu-${groupIndex}-${index}`}
							disabled={disabled}
						/>
					) : "MenuButton" in control ? (
						<ControlMenuDropdown
							key={index}
							editor={editor}
							controls={control.controls}
							MenuButton={control.MenuButton}
							inputSettings={inputSettings}
							disabled={disabled}
						/>
					) : "Component" in control ? (
						<control.Component
							{...control}
							key={index}
							editor={editor}
							inputSettings={inputSettings}
							data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
							disabled={disabled}
						/>
					) : (
						<ControlButton
							key={control.name}
							onClick={() => control.cmd({ editor, inputSettings })}
							label={control.label}
							shortcut={control.shortcut}
							active={editor.isActive(control.name)}
							square
							data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
							disabled={disabled}
						>
							<control.Icon />
						</ControlButton>
					))}
				</ControlGroup>
			))}
		</ControlGroups>
	);
}
