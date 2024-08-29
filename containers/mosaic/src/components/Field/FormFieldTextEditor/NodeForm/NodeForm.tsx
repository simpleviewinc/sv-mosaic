import React, { useCallback, ReactElement } from "react";
import { Editor } from "@tiptap/react";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import type { NodeFormState, NodeFormType, NodeFormTypeProps } from "../FormFieldTextEditorTypes";

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

const nodeTypeComponentMap: Record<NodeFormType, (editor: NodeFormTypeProps) => ReactElement> = {
	link: NodeFormLink,
	image: NodeFormImage,
};

export function NodeForm({
	editor,
	onClose,
	type,
	values,
	anchorEl,
	open,
}: NodeFormProps) {
	const TypeComponent = nodeTypeComponentMap[type];

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
					<TypeComponent
						editor={editor}
						onClose={onClose}
						getFormValues={getFormValues}
					/>
				</StyledNodeForm>
			</ClickAwayListener>
		</Popper>
	);
}
