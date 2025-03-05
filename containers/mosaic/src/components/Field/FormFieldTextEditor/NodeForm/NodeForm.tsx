import type { Editor } from "@tiptap/react";

import React, { useCallback } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import type { NodeFormState } from "../FormFieldTextEditorTypes";

import { StyledNodeForm, StyledPopper } from "./NodeForm.styled";
import { NodeFormLink } from "./NodeFormLink";
import { NodeFormImage } from "./NodeFormImage";
import testIds from "@root/utils/testIds";

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

export function NodeForm(props: NodeFormProps) {
	const {
		type,
		values,
		update,
		anchorEl,
		open,
		...rest
	} = props;

	const { onClose } = rest;

	const getFormValues = useCallback(async () => {
		if (!values) {
			return {};
		}

		return values;
	}, [values]);

	return (
		<StyledPopper
			anchorEl={anchorEl}
			open={open}
			modifiers={popperModifiers}
			data-testid={testIds.TEXT_EDITOR_NODE_FORM}
		>
			<ClickAwayListener onClickAway={onClose}>
				<StyledNodeForm>
					{type === "link" ? (
						<NodeFormLink
							getFormValues={getFormValues}
							update={update}
							{...rest}
						/>
					) : type === "image" ? (
						<NodeFormImage
							getFormValues={getFormValues}
							update={update}
							{...rest}
						/>
					) : null}
				</StyledNodeForm>
			</ClickAwayListener>
		</StyledPopper>
	);
}
