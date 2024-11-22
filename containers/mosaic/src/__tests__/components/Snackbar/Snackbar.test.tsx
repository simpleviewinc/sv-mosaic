import * as React from "react";
import { useState } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import type { SnackbarAction } from "@root/components/Snackbar";
import Snackbar from "@root/components/Snackbar";
import Button from "@root/components/Button";

// Material UI
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

afterEach(cleanup);

afterAll(() => {
	vi.clearAllTimers();
});

const closeSnackbar = vi.fn();
const snackbarAction = vi.fn();

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
			/>
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
