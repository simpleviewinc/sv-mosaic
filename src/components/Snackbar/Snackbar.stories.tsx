import * as React from "react";
import { SyntheticEvent, useState } from "react";

// Components
import Snackbar from "./Snackbar";
import Button from "@root/components/Button";

// Material UI
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default {
	title: "Components/Snackbar",
	component: Snackbar,
};

const Template = (args) => {
	const {
		label,
		autoHideDuration,
		withAction,
		withIcon,
		leadingIcon,
		action,
	} = args;

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
				leadingIcon={withIcon && leadingIcon}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.args = {
	label: "Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",
	autoHideDuration: 4000,
	withAction: false,
	withIcon: false,
	leadingIcon: CheckCircleOutlineIcon,
	action: {
		label: "Create new account",
		function: () => {
			alert("Created account");
		},
	}
}