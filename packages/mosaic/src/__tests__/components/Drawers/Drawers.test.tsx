import { render, screen, waitFor } from "@testing-library/react";
import React, { act, useCallback, useId } from "react";
import userEvent from "@testing-library/user-event";

import type { DrawersProps } from "@root/components/Drawers";

import Drawers, { useDrawerContext } from "@root/components/Drawers";
import Top from "@root/components/Form/Top";
import testIds from "@root/utils/testIds";

const drawers = [{ title: "Drawer 1" }, { title: "Drawer 2" }];

function RegisteredHeading({ title }: { title: string }) {
	const drawer = useDrawerContext();
	const id = useId();
	const register = useCallback((element: HTMLHeadingElement | null) => {
		drawer?.registerTitle(element ? id : null);
		drawer?.registerInitialFocus(element);
	}, [drawer, id]);

	return <h2 id={id} tabIndex={-1} ref={register}>{title}</h2>;
}

function RegisteredButton() {
	const drawer = useDrawerContext();
	return <button ref={drawer?.registerInitialFocus}>Available</button>;
}

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

	it("focuses the registered heading after the drawer content renders", async () => {
		await setup({
			drawers: [drawers[0]],
			children: (drawer) => (
				<>
					<button>Before heading</button>
					<RegisteredHeading title={drawer.title} />
				</>
			),
		});

		const heading = await screen.findByRole("heading", { name: "Drawer 1" });
		await waitFor(() => expect(heading).toHaveFocus());
		const dialog = screen.getByRole("dialog", { name: "Drawer 1" });
		expect(dialog).toHaveAttribute("aria-modal", "true");
		expect(dialog).toHaveAttribute("aria-labelledby", heading.id);
		expect(dialog).toHaveAttribute("tabindex", "-1");
	});

	it("focuses a registered control when there is no heading", async () => {
		await setup({
			drawers: [drawers[0]],
			children: () => (
				<>
					<RegisteredButton />
				</>
			),
		});

		await waitFor(() => expect(screen.getByRole("button", { name: "Available" })).toHaveFocus());
	});

	it("uses the Form title as the dialog name and initial focus target", async () => {
		await setup({
			drawers: [drawers[0]],
			children: () => <Top title="New Form" />,
		});

		const dialog = await screen.findByRole("dialog", { name: "New Form" });
		const heading = screen.getByRole("heading", { name: "New Form" });
		await waitFor(() => expect(heading).toHaveFocus());
		expect(dialog).toHaveAttribute("aria-labelledby", heading.id);
	});

	it("focuses the dialog when it has no focusable content", async () => {
		await setup({ drawers: [drawers[0]] });

		const dialog = await screen.findByRole("dialog", { name: "Drawer" });
		await waitFor(() => expect(dialog).toHaveFocus());
		expect(dialog).toHaveAttribute("tabindex", "-1");
	});

	it("only focuses and marks the topmost drawer as modal", async () => {
		await setup({ children: (drawer) => <RegisteredHeading title={drawer.title} /> });

		await waitFor(() => expect(screen.getByRole("heading", { name: "Drawer 2" })).toHaveFocus());
		expect(screen.getByText("Drawer 1")).not.toHaveFocus();
		expect(screen.getByRole("dialog", { name: "Drawer 2" })).toHaveAttribute("aria-modal", "true");
		expect(screen.getByRole("dialog", { name: "Drawer 1", hidden: true })).not.toHaveAttribute("aria-modal");
	});

	it("does not steal focus when drawer content rerenders", async () => {
		const { rerender } = await setup({
			drawers: [drawers[0]],
			children: () => (
				<>
					<RegisteredHeading title="Heading" />
					<button>Keep focus</button>
				</>
			),
		});
		const button = await screen.findByRole("button", { name: "Keep focus" });
		button.focus();

		rerender(
			<Drawers drawers={[drawers[0]]}>
				{() => (
					<>
						<RegisteredHeading title="Updated heading" />
						<button>Keep focus</button>
					</>
				)}
			</Drawers>,
		);

		expect(button).toHaveFocus();
	});

	it("does not refocus when async content arrives after the dialog fallback", async () => {
		const { rerender } = await setup({ drawers: [drawers[0]] });
		const dialog = await screen.findByRole("dialog");
		await waitFor(() => expect(dialog).toHaveFocus());
		await waitFor(() => expect(dialog).toHaveClass("open"));

		rerender(
			<Drawers drawers={[drawers[0]]}>
				{() => <RegisteredHeading title="Loaded heading" />}
			</Drawers>,
		);

		expect(await screen.findByRole("heading", { name: "Loaded heading" })).not.toHaveFocus();
		expect(dialog).toHaveFocus();
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
