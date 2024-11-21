import * as React from "react";
import type { ReactElement, SyntheticEvent } from "react";
import { useState } from "react";

// Components
import type { SnackbarAction } from "@root/components/Snackbar";
import Snackbar from "@root/components/Snackbar";
import Button from "@root/components/Button";

// Material UI
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default {
	title: "Components/Snackbar",
};

export const Playground = ({ label, autoHideDuration, showAction, showIcon }: typeof Playground.args): ReactElement => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const action: SnackbarAction = {
		label: "Create new account",
		function: () => {
			alert("Created account");
		},
	};

	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				label="Open snackbar"
				onClick={handleClickOpen}
				muiAttrs={{ disableRipple: true }}
			/>
			<Snackbar
				action={showAction && action}
				autoHideDuration={autoHideDuration}
				label={label}
				leadingIcon={showIcon && CheckCircleOutlineIcon}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
};

// const label = text(
// 	"Label",
// 	"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",
// );
// const autoHideDuration = number(
// 	"Autohide duration, value should be in a range of 4000 - 10000 milliseconds, if is less than the minimun is set to 4000ms and if is more than the maximun is set to 10000ms",
// 	4000,
// );
// const showAction = boolean("Show snackbar with action", false);
// const showIcon = boolean("Show snackbar with icon", false);

Playground.args = {
	label: "Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",
	autoHideDuration: 4000,
	showAction: false,
	showIcon: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	autoHideDuration: {
		name: "Auto-hide Duration",
	},
	showAction: {
		name: "Show Action",
	},
	showIcon: {
		name: "Show Icon",
	},
};
