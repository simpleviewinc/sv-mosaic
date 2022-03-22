import * as React from "react";
import { useState } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import Dialog from "./Dialog";
import Button from "@root/components/Button";

afterEach(cleanup);

const handlePrimaryAction = jest.fn();
const handleSecondaryAction = jest.fn();

const DialogExample = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				onClick={handleClickOpen}
				label="Open dialog"
			></Button>
			<Dialog
				dialogTitle="Dialog title"
				open={open}
				primaryAction={handlePrimaryAction}
				primaryBtnLabel="Apply"
				secondaryAction={handleSecondaryAction}
				secondaryBtnLabel="Close"
			>
				{"Test content"}
			</Dialog>
		</>
	);
};

describe("Dialog component", () => {
	beforeEach(() => {
		render(<DialogExample />);
		const openButton = screen.getByText("Open dialog");

		fireEvent.click(openButton);
	});

	it("should show its content", () => {
		const dialogContent = screen.getByText("Test content");
		const dialogTitle = screen.getByText("Dialog title");

		expect(dialogContent).toBeTruthy();
		expect(dialogTitle).toBeTruthy();
	});

	it("should trigger secondary button action", () => {
		const secondaryButton = screen.getByText("Close");

		fireEvent.click(secondaryButton);

		expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
	});

	it("should trigger primary button action", () => {
		const primaryButton = screen.getByText("Apply");

		fireEvent.click(primaryButton);

		expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
	});
});
