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
			// eslint-disable-next-line react/no-children-prop
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

	it("should begin closing a draw once the definition is removed", async () => {
		const { rerender } = await setup();

		const drawer1 = await screen.findByText("Drawer 1");
		const drawer2 = await screen.findByText("Drawer 2");

		expect(drawer1).toBeInTheDocument();
		expect(drawer2).toBeInTheDocument();

		rerender(
			<Drawers
				drawers={[drawers[0]]}
				// eslint-disable-next-line react/no-children-prop
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
				// eslint-disable-next-line react/no-children-prop
				children={(drawer) => <h3>{drawer.title}</h3>}
			/>,
		);

		await waitFor(() => expect(screen.queryAllByTestId(testIds.DRAWER_BACKDROP)).toHaveLength(1));
	});

});
