import type { ReactElement } from "react";
import type { Editor } from "@tiptap/core";

import React from "react";

import type { ControlsConfig, SelectionType, TextEditorInputSettings } from "../FormFieldTextEditorTypes";

import { ToolbarControlRow } from "./ToolbarControlRow";
import { ToolbarOffset, ToolbarOverflow } from "../FormFieldTextEditor.styled";

export interface ToolbarControlsProps {
	controls: ControlsConfig[];
	editor: Editor;
	selectionTypes?: SelectionType[];
	inputSettings: TextEditorInputSettings;
	disabled?: boolean;
}

export function ToolbarControls({
	controls: controlRows,
	...props
}: ToolbarControlsProps): ReactElement {
	return (
		<ToolbarOverflow>
			<ToolbarOffset>
				{controlRows.map(controlRow => (
					<ToolbarControlRow
						controls={controlRow}
						{...props}
					/>
				))}
			</ToolbarOffset>
		</ToolbarOverflow>
	);
}
