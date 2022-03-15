import * as React from "react";
import { ReactElement } from "react";

// Components
import Button from "@root/components/Button";

// Material UI
import { DialogActions, DialogContent } from "@material-ui/core";

// Types and styles
import { DialogProps } from ".";
import { StyledDialog, StyledDialogTitle } from "./Dialog.styled";

const Dialog = (props: DialogProps): ReactElement => {
	const {
		children,
		dialogTitle,
		open,
		primaryAction,
		primaryBtnLabel = "Apply",
		secondaryAction,
		secondaryBtnLabel = "Cancel",
	} = props;

	return (
		<StyledDialog open={open}>
			<StyledDialogTitle>{dialogTitle}</StyledDialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button
					color="gray"
					variant="outlined"
					label={secondaryBtnLabel}
					onClick={secondaryAction}
					muiAttrs={{disableRipple: true}}
				></Button>
				<Button
					color="yellow"
					variant="contained"
					onClick={primaryAction}
					label={primaryBtnLabel}
					muiAttrs={{disableRipple: true}}
				></Button>
			</DialogActions>
		</StyledDialog>
	);
};

export default Dialog;
