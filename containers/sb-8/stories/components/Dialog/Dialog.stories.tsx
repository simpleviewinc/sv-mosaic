import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";

// Components
import Dialog from "#mosaic/components/Dialog";
import type { ButtonProps } from "#mosaic/components/Button";
import Button from "#mosaic/components/Button";

export default {
	title: "Components/Dialog",
};

export const Playground = ({ dialogContent, dialogTitle, primaryBtnLabel, secondaryBtnLabel }: typeof Playground.args): ReactElement => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const primaryAction = () => {
		alert("The primary button was clicked");
		setOpen(false);
	};

	const buttons: ButtonProps[] = [
		{
			label: secondaryBtnLabel,
			onClick: handleClose,
			color: "gray",
			variant: "outlined",
		},
		{
			label: primaryBtnLabel,
			onClick: primaryAction,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				onClick={handleClickOpen}
				label="Open Dialog"
				muiAttrs={{ disableRipple: true }}
			/>
			<Dialog
				dialogTitle={dialogTitle}
				open={open}
				buttons={buttons}
			>
				{dialogContent}
			</Dialog>
		</>
	);
};

Playground.args = {
	dialogContent: 	`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,
	dialogTitle: "Dialog title",
	primaryBtnLabel: "Apply",
	secondaryBtnLabel: "Cancel",
};

Playground.argTypes = {
	dialogContent: {
		name: "Dialog Content",
	},
	dialogTitle: {
		name: "Dialog Title",
	},
	primaryBtnLabel: {
		name: "Primary Button Label",
	},
	secondaryBtnLabel: {
		name: "Secondary Button Label",
	},
};
