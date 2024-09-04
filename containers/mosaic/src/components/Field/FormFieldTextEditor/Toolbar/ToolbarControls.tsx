import React, { ReactElement, useMemo } from "react";
import { Editor } from "@tiptap/core";

import type { ControlsConfig, SelectionType, NodeFormSet, TextEditorNextInputSettings } from "../FormFieldTextEditorTypes";

import { ControlButton, ControlMenuDropdown, resolveControls } from "./Controls";
import { ControlGroup } from "../FormFieldTextEditorTipTap.styled";
import testIds from "@root/utils/testIds";

export interface ToolbarControlsProps {
	controls: ControlsConfig;
	editor: Editor;
	selectionTypes?: SelectionType[];
	setNodeForm: NodeFormSet;
	inputSettings: TextEditorNextInputSettings;
}

export function ToolbarControls({
	editor,
	controls: controlsDef,
	selectionTypes,
	setNodeForm,
	inputSettings = {},
}: ToolbarControlsProps): ReactElement {
	const groups = useMemo(() => resolveControls(controlsDef, selectionTypes), [controlsDef, selectionTypes]);

	return (
		<>
			{groups.map((group, index) => (
				<ControlGroup key={index}>
					{group.map((control, index) => Array.isArray(control) ? (
						<ControlMenuDropdown
							key={index}
							editor={editor}
							controls={control}
							setNodeForm={setNodeForm}
							inputSettings={inputSettings}
							testId={`${testIds.TEXT_EDITOR_CONTROL}:menu-${index}`}
						/>
					) : "MenuButton" in control ? (
						<ControlMenuDropdown
							key={index}
							editor={editor}
							controls={control.controls}
							MenuButton={control.MenuButton}
							setNodeForm={setNodeForm}
							inputSettings={inputSettings}
						/>
					) : "Component" in control ? (
						<control.Component
							{...control}
							key={index}
							editor={editor}
							setNodeForm={setNodeForm}
							inputSettings={inputSettings}
							data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
						/>
					) : (
						<ControlButton
							key={control.name}
							onClick={() => control.cmd(editor)}
							label={control.label}
							shortcut={control.shortcut}
							active={editor.isActive(control.name)}
							square
							data-testid={`${testIds.TEXT_EDITOR_CONTROL}:${control.name}`}
						>
							<control.Icon />
						</ControlButton>
					))}
				</ControlGroup>
			))}
		</>
	);
}
