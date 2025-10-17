import type { ReactElement } from "react";

import React, { useMemo } from "react";

import type { ControlsConfig, ToolbarControlsProps } from "../FormFieldTextEditorTypes";

import { ControlButton, ControlMenuDropdown, resolveControls } from "./Controls";
import { ControlGroup, ControlRow } from "../FormFieldTextEditor.styled";
import testIds from "@root/utils/testIds";

type ToolbarControlRowProps = Omit<ToolbarControlsProps, "controls"> & {
	controls: ControlsConfig;
}

export function ToolbarControlRow({
	editor,
	controls: controlsDef,
	selectionTypes,
	inputSettings = {},
	disabled,
	horizontalSeparator,
}: ToolbarControlRowProps): ReactElement {
	const groups = useMemo(() => resolveControls(controlsDef, selectionTypes), [controlsDef, selectionTypes]);

	return (
		<ControlRow $horizontalSeparator={horizontalSeparator}>
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
					) : "controls" in control ? (
						<ControlMenuDropdown
							key={index}
							editor={editor}
							controls={control.controls}
							MenuButton={control.MenuButton}
							inputSettings={inputSettings}
							testId={`${testIds.TEXT_EDITOR_CONTROL}:menu-${groupIndex}-${index}`}
							disabled={disabled}
							label={control.label}
							name={control.name}
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
							onClick={(event) => control.cmd({ editor, inputSettings, event })}
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
		</ControlRow>
	);
}
