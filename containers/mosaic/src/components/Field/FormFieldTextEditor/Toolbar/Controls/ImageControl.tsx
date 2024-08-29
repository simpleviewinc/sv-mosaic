import React, { ReactElement } from "react";
import { posToDOMRect } from "@tiptap/core";
import ImageIcon from "@mui/icons-material/Image";

import type { ControlComponentProps } from "../../FormFieldTextEditorTypes";
import { ControlButton } from ".";

export function ImageControl({
	editor,
	setNodeForm,
}: ControlComponentProps): ReactElement {
	const onClick = () => {
		const { view } = editor;
		const { state: { selection: { from, to } } } = view;

		setNodeForm({
			open: true,
			anchorEl: { getBoundingClientRect: () => posToDOMRect(view, from, to) },
			values: {},
			type: "image",
		});
	};

	return (
		<ControlButton
			onClick={onClick}
			label="Add Image"
			square
			$active={editor.isActive("image")}
		>
			<ImageIcon />
		</ControlButton>
	);
}
