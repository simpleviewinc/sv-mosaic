import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DrawerProps } from "@root/components/Drawer";

import Drawer from "@root/components/Drawer";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DrawerProps> = {}) {
	const renderResult = await act(async () => render(
		<Drawer
			open

			children={<>My Drawer</>}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the drawer", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeInTheDocument();
		expect(screen.queryByText("My Drawer")).toBeInTheDocument();
	});

	it("should not render the drawer if open is false", async () => {
		await setup({ open: false });

		expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull();
		expect(screen.queryByText("My Drawer")).toBeNull();
	});

	it("should unrender the drawer and call the exit callback when the drawer finishes closing", async () => {
		const exitCBMock = vi.fn();

		const { rerender } = await setup({ exitCB: exitCBMock });

		rerender(
			<Drawer
				open={false}
				exitCB={exitCBMock}

				children={<>My Drawer</>}
			/>,
		);

		await waitFor(() => expect(screen.queryByText("My Drawer")).toBeNull());

		expect(exitCBMock).toHaveBeenCalled();
	});

	it("should fire the on close handler if provided when the backdrop is clicked", async () => {
		const onCloseMock = vi.fn();

		const { user } = await setup({ onClose: onCloseMock });

		const backdrop = screen.queryByTestId(testIds.DRAWER_BACKDROP);
		expect(backdrop).toBeInTheDocument();
		await user.click(backdrop);
		expect(onCloseMock).toBeCalled();
	});

	it("should not fire the on close handler when backdrop is clicked if backdrop close handler is false", async () => {
		const onCloseMock = vi.fn();

		const { user } = await setup({ onClose: onCloseMock, backdropCloseHandler: false });

		const backdrop = screen.queryByTestId(testIds.DRAWER_BACKDROP);
		expect(backdrop).toBeInTheDocument();
		await user.click(backdrop);
		expect(onCloseMock).not.toBeCalled();
	});
});
