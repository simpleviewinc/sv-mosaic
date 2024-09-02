import React, { ReactElement } from "react";
import { posToDOMRect } from "@tiptap/core";
import ImageIcon from "@mui/icons-material/Image";

import type { ControlComponentProps } from "../../FormFieldTextEditorTypes";
import { ControlButton } from ".";
import { Node } from "@tiptap/pm/model";

export function ImageControl({
	editor,
	setNodeForm,
	inputSettings: { onImage },
}: ControlComponentProps): ReactElement {
	const onClick = () => {
		const { view } = editor;
		const { state: { selection: { from, to } } } = view;

		// TypeScript thinks that selection doesn't have an
		// associated node even though it does
		const selectedNode = (editor.state.selection as unknown as { node: Node }).node;
		const image = selectedNode?.type.name === "image" ? selectedNode : undefined;

		const values = {
			src: image?.attrs.src || "",
			alt: image?.attrs.alt,
		};

		if (onImage) {
			onImage({
				...values,
				updateImage: (params) => editor.chain().focus()
					.setImage(params)
					.run(),
			});

			return;
		}

		setNodeForm({
			open: true,
			anchorEl: { getBoundingClientRect: () => posToDOMRect(view, from, to) },
			values,
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
