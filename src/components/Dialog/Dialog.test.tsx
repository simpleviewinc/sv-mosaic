import * as React from "react";
import { useState } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import Dialog from "./Dialog";
import Button, { ButtonProps } from "@root/components/Button";

afterEach(cleanup);

const handlePrimaryAction = jest.fn();
const handleSecondaryAction = jest.fn();
const handleThirdButtonClick = jest.fn();
const handleFourthButtonClick = jest.fn();

const buttons: ButtonProps[] = [
	{
		label: "Close",
		onClick: handleSecondaryAction,
		color: "gray",
		variant: "outlined",
	},
	{
		label: "Apply",
		onClick: handlePrimaryAction,
		color: "yellow",
		variant: "contained",
	},
	{
		label: "Third Button",
		onClick: handleThirdButtonClick,
		color: "red",
		variant: "outlined",
	},
	{
		label: "Fourth Button",
		onClick: handleFourthButtonClick,
		color: "yellow",
		variant: "contained",
	},
];

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
			>
			</Button>
			<Dialog
				dialogTitle="Dialog title"
				open={open}
				buttons={buttons}
			>
				Test content
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

	it("should display the list of buttons", () => {
		expect(screen.getByText("Apply")).toBeDefined();
		expect(screen.getByText("Close")).toBeDefined();
		expect(screen.getByText("Third Button")).toBeDefined();
		expect(screen.getByText("Fourth Button")).toBeDefined();
	});

	it("should trigger all buttons actions", () => {
		const secondaryButton = screen.getByText("Close");
		const primaryButton = screen.getByText("Apply");
		const thirdButton = screen.getByText("Third Button");
		const fourthButton = screen.getByText("Fourth Button");

		fireEvent.click(secondaryButton);
		fireEvent.click(primaryButton);
		fireEvent.click(thirdButton);
		fireEvent.click(fourthButton);

		expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
		expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
		expect(handleThirdButtonClick).toHaveBeenCalledTimes(1);
		expect(handleFourthButtonClick).toHaveBeenCalledTimes(1);
	});
});
