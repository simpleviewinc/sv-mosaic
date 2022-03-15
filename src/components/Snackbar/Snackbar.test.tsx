import * as React from "react";
import { useState } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import Snackbar from "./Snackbar";
import Button from "@root/components/Button";

// Types
import { SnackbarAction } from "./SnackbarTypes";

// Material UI
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

afterEach(cleanup);

afterAll(() => {
	jest.clearAllTimers();
});

const closeSnackbar = jest.fn();
const snackbarAction = jest.fn();

const SnackbarExample = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const action: SnackbarAction = {
		label: "Create new account",
		function: snackbarAction,
	};

	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				label="Open snackbar"
				onClick={handleClickOpen}
			></Button>
			<Snackbar
				action={action}
				autoHideDuration={5000}
				label="Snackbar label"
				leadingIcon={CheckCircleOutlineIcon}
				open={open}
				onClose={closeSnackbar}
			/>
		</>
	);
};

describe("Snackbar component", () => {
	beforeEach(() => {
		render(<SnackbarExample />);
		const openButton = screen.getByText("Open snackbar");

		fireEvent.click(openButton);
	});

	it("should show its content", () => {
		const closeButton = screen.getByTestId("close-icon");
		const leadingIcon = screen.getByTestId("leading-snackbar-icon");
		const snackbarLabel = screen.getByText("Snackbar label");

		expect(closeButton).toBeTruthy();
		expect(leadingIcon).toBeTruthy();
		expect(snackbarLabel).toBeTruthy();
	});

	it("should trigger the action button", () => {
		const actionButton = screen.getByText("Create new account");

		fireEvent.click(actionButton);

		expect(snackbarAction).toHaveBeenCalledTimes(1);
	});

	it("should close the snackbar component after the specified time", async () => {
		const closeButton = await screen.findByTestId("close-icon");
		fireEvent.click(closeButton);

		expect(closeSnackbar).toHaveBeenCalledTimes(1);
	});
});
