import { render, screen, waitFor } from "@testing-library/react";
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
					intent: "primary",
					variant: "contained",
					label: "Action 1",
					onClick: onClickMock1,
				},
				{
					intent: "primary",
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

	it("should call onClose when the Escape key is pressed", async () => {
		const onCloseMock = vi.fn();

		const { user } = await setup({ onClose: onCloseMock });

		expect(screen.queryByRole("dialog")).toBeInTheDocument();
		await user.keyboard("{Escape}");

		expect(onCloseMock).toHaveBeenCalledWith(expect.anything(), "escapeKeyDown");
	});

	it("should close and return focus to the invoker when Escape is pressed", async () => {
		function Harness() {
			const [open, setOpen] = React.useState(false);

			return (
				<>
					<button type="button" onClick={() => setOpen(true)}>
						Open Dialog
					</button>
					<Dialog
						dialogTitle="My Dialog"
						open={open}
						onClose={() => setOpen(false)}
					>
						My Content
					</Dialog>
				</>
			);
		}

		const user = userEvent.setup();
		await act(async () => render(<Harness />));

		const invoker = screen.getByRole("button", { name: "Open Dialog" });
		await user.click(invoker);

		const dialog = screen.getByRole("dialog");
		expect(dialog).toBeInTheDocument();
		const modalRoot = dialog.closest(".MuiDialog-container");
		expect(modalRoot).not.toBeNull();
		if (!modalRoot) {
			throw new Error("expected MUI dialog container");
		}
		expect(modalRoot.contains(document.activeElement)).toBe(true);
		await user.keyboard("{Escape}");

		await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
		expect(invoker).toHaveFocus();
	});
});
