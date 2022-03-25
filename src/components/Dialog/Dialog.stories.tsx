import * as React from "react";
import { ReactElement, useState } from "react";
import { text, withKnobs } from "@storybook/addon-knobs";

// Components
import Dialog from "./Dialog";
import Button from "@root/components/Button";

export default {
	title: "Components/Dialog",
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const dialogContent = text(
		"Dialog content",
		`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
  sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
  expedita. Aut quis quas minus sed asperiores dolores asperiores
  excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
  Address Information`
	);
	const dialogTitle = text("Dialog title", "Dialog title");
	const primaryBtnLabel = text("Primary button label", "Apply");
	const secondaryBtnLabel = text("Secondary button label", "Cancel");

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

	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				onClick={handleClickOpen}
				label="Open Dialog"
				muiAttrs={{disableRipple: true}}
			></Button>
			<Dialog
				dialogTitle={dialogTitle}
				open={open}
				primaryAction={primaryAction}
				primaryBtnLabel={primaryBtnLabel}
				secondaryAction={handleClose}
				secondaryBtnLabel={secondaryBtnLabel}
			>
				{dialogContent}
			</Dialog>
		</>
	);
};
