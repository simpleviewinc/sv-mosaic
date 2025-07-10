import * as React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import PageHeader from "@root/components/PageHeader";
import type { ButtonProps } from "@root/components/Button";

afterEach(cleanup);

afterAll(() => {
	vi.clearAllTimers();
});

const onCancel = vi.fn();
const onSubmit = vi.fn();
const onBack = vi.fn();

const buttons: ButtonProps[] = [
	{
		label: "Cancel",
		onClick: onCancel,
		intent: "secondary",
		variant: "contained",
	},
	{
		label: "Save",
		onClick: onSubmit,
		intent: "primary",
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
		const onBackBtn = screen.getByRole("button", { name: "Go back" });

		fireEvent.click(onBackBtn);

		expect(onBack).toHaveBeenCalledTimes(1);
	});
});
