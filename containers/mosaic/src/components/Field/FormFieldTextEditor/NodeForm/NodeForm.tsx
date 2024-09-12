import type { Editor } from "@tiptap/react";

import React, { useCallback } from "react";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import type { NodeFormState } from "../FormFieldTextEditorTypes";

import { StyledNodeForm } from "./NodeForm.styled";
import { NodeFormLink } from "./NodeFormLink";
import { NodeFormImage } from "./NodeFormImage";

export type NodeFormProps = NodeFormState & {
	editor: Editor;
	onClose: () => void;
	values?: any;
};

const popperModifiers = [
	{
		name: "offset",
		options: {
			offset: [0, 5],
		},
	},
];

export function NodeForm({
	editor,
	onClose,
	type,
	values,
	update,
	anchorEl,
	open,
}: NodeFormProps) {
	const getFormValues = useCallback(async () => {
		if (!values) {
			return {};
		}

		return values;
	}, [values]);

	return (
		<Popper
			anchorEl={anchorEl}
			open={open}
			modifiers={popperModifiers}
		>
			<ClickAwayListener onClickAway={onClose}>
				<StyledNodeForm>
					{type === "link" ? (
						<NodeFormLink
							editor={editor}
							getFormValues={getFormValues}
							onClose={onClose}
							update={update}
						/>
					) : type === "image" ? (
						<NodeFormImage
							editor={editor}
							getFormValues={getFormValues}
							onClose={onClose}
							update={update}
						/>
					) : null}
				</StyledNodeForm>
			</ClickAwayListener>
		</Popper>
	);
}
