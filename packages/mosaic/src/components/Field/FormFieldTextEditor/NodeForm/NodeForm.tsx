import type { Editor } from "@tiptap/react";

import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import FocusTrap from "@mui/material/Unstable_TrapFocus";

import type { NodeFormState } from "../FormFieldTextEditorTypes";

import { StyledPopper } from "./NodeForm.styled";
import { NodeFormLink } from "./NodeFormLink";
import { NodeFormImage } from "./NodeFormImage";
import testIds from "@root/utils/testIds";
import { StyledPopperPaper } from "@root/components/common";

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
	const label = type === "link" ? "Edit link" : "Edit image";

	return (
		<StyledPopper
			anchorEl={anchorEl}
			open={open}
			modifiers={popperModifiers}
			data-testid={testIds.TEXT_EDITOR_NODE_FORM}
		>
			<ClickAwayListener onClickAway={onClose}>
				<StyledPopperPaper style={{ width: 300 }}>
					<FocusTrap open={open} disableRestoreFocus>
						<div
							role="dialog"
							aria-modal="true"
							aria-label={label}
							tabIndex={-1}
							onKeyDown={(event) => {
								if (event.key !== "Escape") {
									return;
								}

								event.preventDefault();
								event.stopPropagation();
								onClose();
							}}
						>
							{type === "link" ? (
								<NodeFormLink
									data={values || {}}
									update={update}
									{...rest}
								/>
							) : type === "image" ? (
								<NodeFormImage
									data={values || {}}
									update={update}
									{...rest}
								/>
							) : null}
						</div>
					</FocusTrap>
				</StyledPopperPaper>
			</ClickAwayListener>
		</StyledPopper>
	);
}
