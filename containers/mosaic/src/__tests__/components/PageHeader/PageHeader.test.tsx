import * as React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import PageHeader from "@root/components/PageHeader";
import { ButtonProps } from "@root/components/Button";

afterEach(cleanup);

afterAll(() => {
	jest.clearAllTimers();
});

const onCancel = jest.fn();
const onSubmit = jest.fn();
const onBack = jest.fn();

const buttons: ButtonProps[] = [
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
	},
	{
		label: "Save",
		onClick: onSubmit,
		color: "yellow",
		variant: "contained",
	},
];

describe("PageHeader component", () => {
	beforeEach(() => {
		render(<PageHeader title="Title" buttons={buttons} onBack={onBack} />);
	});

	it("should show the title", () => {
		const title = screen.getByText("Title");

		expect(title).toBeTruthy();
	});

	it("should trigger the function of each button defined", () => {
		const cancelBtn = screen.getByText("Cancel");
		const saveBtn = screen.getByText("Save");

		fireEvent.click(cancelBtn);

		expect(onCancel).toHaveBeenCalledTimes(1);

		fireEvent.click(saveBtn);

		expect(onSubmit).toHaveBeenCalledTimes(1);
	});

	it("should execute the onBack callback", async () => {
		const onBackBtn = screen.getByTestId("icon-button-test");

		fireEvent.click(onBackBtn);

		expect(onBack).toHaveBeenCalledTimes(1);
	});
});
