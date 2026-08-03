import type { ReactElement } from "react";

import React from "react";
import Code from "@mui/icons-material/Code";
import { NodeViewWrapper } from "@tiptap/react";
import testIds from "@root/utils/testIds";

export function ScriptNodeView(): ReactElement {
	return (
		<NodeViewWrapper className="tiptap-flex" contentEditable={false} data-testid={testIds.TEXT_EDITOR_SCRIPT_NODE}>
			<div className="tiptap-pill" draggable data-drag-handle="">
				<Code />
				{" "}
				Script
			</div>
		</NodeViewWrapper>
	);
}
