import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DialogProps } from "@root/components/Dialog";

import Dialog from "@root/components/Dialog";

async function setup(props: Partial<DialogProps> = {}) {
	const renderResult = await act(async () => render(
		<Dialog
			dialogTitle="My Dialog"

			children="My Content"
			open
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the dialog title and content", async () => {
		await setup();

		expect(screen.queryByRole("dialog")).toBeInTheDocument();
		expect(screen.queryByText("My Dialog")).toBeInTheDocument();
		expect(screen.queryByText("My Content")).toBeInTheDocument();
	});

	it("should render a list of buttons", async () => {
		const onClickMock1 = vi.fn();
		const onClickMock2 = vi.fn();

		const { user } = await setup({
			buttons: [
				{
					color: "yellow",
					variant: "contained",
					label: "Action 1",
					onClick: onClickMock1,
				},
				{
					color: "yellow",
					variant: "contained",
					label: "Action 2",
					onClick: onClickMock2,
				},
			],
		});

		const button1 = screen.queryByRole("button", { name: "Action 1" });
		const button2 = screen.queryByRole("button", { name: "Action 2" });
		expect(button1).toBeInTheDocument();
		expect(button2).toBeInTheDocument();
		await user.click(button1);
		await user.click(button2);
		expect(onClickMock1).toBeCalled();
		expect(onClickMock2).toBeCalled();
	});
});
