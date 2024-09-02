import React, { ReactElement } from "react";
import { posToDOMRect } from "@tiptap/core";
import LinkIcon from "@mui/icons-material/Link";

import type { ControlComponentProps } from "../../FormFieldTextEditorTypes";
import { ControlButton } from ".";

export function LinkControl({
	editor,
	setNodeForm,
	inputSettings: { onLink },
}: ControlComponentProps): ReactElement {
	const onClick = () => {
		const { view } = editor;
		const { state: { selection: { from, to } } } = view;

		const link = editor.state.selection.$to.marks()
			.find(({ type }) => type.name === "link");

		const values = {
			url: link?.attrs.href || "",
			newTab: link?.attrs.target === "_blank",
		};

		if (onLink) {
			onLink({
				...values,
				updateLink: ({ url, newTab }) => editor.chain().focus()
					.extendMarkRange("link")
					.setLink({
						href: url,
						target: newTab ? "_blank" : "",
					})
					.run(),
			});

			return;
		}

		setNodeForm({
			open: true,
			anchorEl: { getBoundingClientRect: () => posToDOMRect(view, from, to) },
			values,
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
