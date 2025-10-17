import * as React from "react";
import type { ReactElement } from "react";

// Material UI
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// Types and styles
import type { DialogProps } from ".";
import { StyledDialog, StyledDialogTitle } from "./Dialog.styled";
import { StyledPopperPaper } from "../common";
import ButtonRow from "../ButtonRow";

const Dialog = (props: DialogProps): ReactElement => {
	const {
		children,
		dialogTitle,
		open,
		buttons,
	} = props;

	return (
		<StyledDialog open={open} PaperComponent={StyledPopperPaper}>
			<StyledDialogTitle>{dialogTitle}</StyledDialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<ButtonRow buttons={buttons} />
			</DialogActions>
		</StyledDialog>
	);
};

export default Dialog;
