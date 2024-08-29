import React, { ReactElement } from "react";
import { posToDOMRect } from "@tiptap/core";
import LinkIcon from "@mui/icons-material/Link";

import type { ControlComponentProps } from "../../FormFieldTextEditorTypes";
import { ControlButton } from ".";

export function LinkControl({
	editor,
	setNodeForm,
}: ControlComponentProps): ReactElement {
	const onClick = () => {
		const { view } = editor;
		const { state: { selection: { from, to } } } = view;

		const link = editor.state.selection.$to.marks()
			.find(({ type }) => type.name === "link");

		setNodeForm({
			open: true,
			anchorEl: { getBoundingClientRect: () => posToDOMRect(view, from, to) },
			values: link && {
				url: link.attrs.href,
				newTab: link.attrs.target === "_blank",
			},
			type: "link",
		});
	};

	return (
		<ControlButton
			onClick={onClick}
			label="Link"
			square
			$active={editor.isActive("link")}
		>
			<LinkIcon />
		</ControlButton>
	);
}
