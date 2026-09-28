import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DrawersProps } from "@root/components/Drawers";

import Drawers from "@root/components/Drawers";
import testIds from "@root/utils/testIds";

const drawers = [{ title: "Drawer 1" }, { title: "Drawer 2" }];

async function setup(props: Partial<DrawersProps<(typeof drawers)[number]>> = {}) {
	const renderResult = await act(async () => render(
		<Drawers
			drawers={drawers}
			children={(drawer) => <>{drawer.title}</>}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the drawers", async () => {
		await setup();

		expect(await screen.findByText("Drawer 1")).toBeInTheDocument();
		expect(await screen.findByText("Drawer 2")).toBeInTheDocument();
	});

	it("should not render any draws if there are none defined", async () => {
		await setup({ drawers: [] });

		expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull();
	});

	it("should call onClose when Escape is pressed", async () => {
		const onClose = vi.fn();
		const { user } = await setup({ onClose });

		await screen.findByText("Drawer 2");
		await user.keyboard("{Escape}");

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it("should keep the drawer open when onClose is omitted", async () => {
		const { user } = await setup();
		await screen.findByText("Drawer 2");

		await user.keyboard("{Escape}");

		expect(screen.getByText("Drawer 2")).toBeInTheDocument();
	});

	it("should not call onClose for a backdrop click", async () => {
		const onClose = vi.fn();
		const { user } = await setup({ onClose });
		await screen.findByText("Drawer 2");

		const backdrops = screen.getAllByTestId(testIds.DRAWER_BACKDROP);
		await user.click(backdrops[backdrops.length - 1]);

		expect(onClose).not.toHaveBeenCalled();
		expect(screen.getByText("Drawer 2")).toBeInTheDocument();
	});

	it("should begin closing a draw once the definition is removed", async () => {
		const { rerender } = await setup();

		const drawer1 = await screen.findByText("Drawer 1");
		const drawer2 = await screen.findByText("Drawer 2");

		expect(drawer1).toBeInTheDocument();
		expect(drawer2).toBeInTheDocument();

		rerender(
			<Drawers
				drawers={[drawers[0]]}
				children={(drawer) => <h3>{drawer.title}</h3>}
			/>,
		);

		expect(drawer1).toBeInTheDocument();
		expect(drawer2).toHaveClass("closing");
	});

	it("should remove the draw from the render entirely once the exiting animation has finished", async () => {
		const { rerender } = await setup();

		const drawer1 = await screen.findByText("Drawer 1");
		const drawer2 = await screen.findByText("Drawer 2");

		expect(drawer1).toBeInTheDocument();
		expect(drawer2).toBeInTheDocument();

		rerender(
			<Drawers
				drawers={[drawers[0]]}
				children={(drawer) => <h3>{drawer.title}</h3>}
			/>,
		);

		await waitFor(() => expect(screen.queryAllByTestId(testIds.DRAWER_BACKDROP)).toHaveLength(1));
	});

});
