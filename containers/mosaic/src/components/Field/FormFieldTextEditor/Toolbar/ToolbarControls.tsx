import type { ReactElement } from "react";

import React from "react";

import type { ToolbarControlsProps } from "../FormFieldTextEditorTypes";

import { ToolbarControlRow } from "./ToolbarControlRow";
import { ToolbarOffset, ToolbarOverflow } from "../FormFieldTextEditor.styled";

export function ToolbarControls({
	controls: controlRows,
	...props
}: ToolbarControlsProps): ReactElement {
	return (
		<ToolbarOverflow>
			<ToolbarOffset>
				{controlRows.map((controlRow, index) => (
					<ToolbarControlRow
						controls={controlRow}
						key={index}
						{...props}
					/>
				))}
			</ToolbarOffset>
		</ToolbarOverflow>
	);
}
