import React, { ReactElement } from "react";
import Code from "@mui/icons-material/Code";
import { NodeViewWrapper } from "@tiptap/react";

export function ScriptNodeView(): ReactElement {
	return (
		<NodeViewWrapper className="tiptap-flex" contentEditable={false}>
			<div className="tiptap-pill" draggable data-drag-handle="">
				<Code />
				{" "}
				Script
			</div>
		</NodeViewWrapper>
	);
}
