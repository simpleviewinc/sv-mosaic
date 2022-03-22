import * as React from "react";
import { ReactElement, SyntheticEvent, useState } from "react";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

// Components
import Snackbar from "./Snackbar";
import Button from "@root/components/Button";

// Material UI
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// Types
import { SnackbarAction } from "./SnackbarTypes";

export default {
	title: "Components/Snackbar",
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const label = text(
		"Label",
		"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form."
	);
	const autoHideDuration = number(
		"Autohide duration, value should be in a range of 4000 - 10000 milliseconds, if is less than the minimun is set to 4000ms and if is more than the maximun is set to 10000ms",
		4000
	);
	const withAction = boolean("Show snackbar with action", false);
	const withIcon = boolean("Show snackbar with icon", false);

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
				muiAttrs={{disableRipple: true}}
			></Button>
			<Snackbar
				action={withAction && action}
				autoHideDuration={autoHideDuration}
				label={label}
				leadingIcon={withIcon && CheckCircleOutlineIcon}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
};
