import * as React from "react";
import { ReactElement } from "react";

// Components
import Button from "@root/components/Button";

// Material UI
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// Types and styles
import { DialogProps } from ".";
import { StyledDialog, StyledDialogTitle } from "./Dialog.styled";

const Dialog = (props: DialogProps): ReactElement => {
	const {
		children,
		dialogTitle,
		open,
		buttons,
	} = props;

	return (
		<StyledDialog open={open}>
			<StyledDialogTitle>{dialogTitle}</StyledDialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				{buttons?.map((button, idx) => (
					<Button key={`${button.label}-${idx}`} {...button} />
				))}
			</DialogActions>
		</StyledDialog>
	);
};

export default Dialog;
