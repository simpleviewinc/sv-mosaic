import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import Drawers from "./Drawers";
import AppContext from "./example/AppContext";
import Page from "./example/Page";
import { AppState, DrawerDef } from "./example/ExampleTypes";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const DrawersExample = () => {
	const [state, setState] = useState<AppState>({
		content: {},
		drawers: [],
	});

	const addDrawer = useCallback((drawerDef: DrawerDef) => {
		setState((state) => ({
			...state,
			drawers: [...state.drawers, drawerDef],
		}));
	}, []);

	const removeDrawer = useCallback(() => {
		setState((state) => ({
			...state,
			drawers: [...state.drawers.slice(0, -1)],
		}));
	}, []);

	const appContext = useMemo(
		() => ({
			addDrawer,
			removeDrawer,
		}),
		[addDrawer, removeDrawer],
	);

	return (
		<AppContext.Provider value={appContext}>
			<div className="App">
				<p>{JSON.stringify(state.content)}</p>
				<button
					onClick={() =>
						addDrawer({
							config: {
								type: "form",
								title: "New Form",
								fields: [
									{
										name: "foo",
										label: "Foo",
										type: "text",
									},
									{
										name: "bar",
										label: "Bar",
										type: "text",
									},
									{
										name: "baz",
										label: "Baz",
										type: "text",
									},
									{
										name: "from_parent",
										label: "From Parent",
										type: "text",
									},
								],
							},
							callbacks: {
								save: (data) => {
									setState((state) => ({
										...state,
										content: data,
									}));

									removeDrawer();
								},
							},
						})
					}
				>
					Add Form
				</button>

				<Drawers drawers={state.drawers}>
					{(drawerDef) => {
						return (
							<Page
								config={drawerDef.config}
								callbacks={drawerDef.callbacks ?? {}}
							/>
						);
					}}
				</Drawers>
			</div>
		</AppContext.Provider>
	);
};

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe.skip("Drawers component", () => {
	it("should open 1 drawer, write on the fields, and send data back to parent", async () => {
		render(
			<DrawersExample />,
		);

		const addFormButton = await screen.findByText("Add Form");
		fireEvent.click(addFormButton);

		const drawer = await screen.findByTestId("form-test-id");
		expect(drawer).toBeInTheDocument();

		const fooInput = await screen.findByLabelText("Foo");
		fireEvent.change(fooInput, { target: { value: "abc" } });

		const saveButton = await screen.findByText("Save");
		fireEvent.click(saveButton);

		const result = await screen.findByText('{"foo":"abc"}');
		expect(result.textContent).toEqual('{"foo":"abc"}');
	});

	it("should close an open drawer", async () => {
		render(
			<DrawersExample />,
		);

		const addFormButton = await screen.findByText("Add Form");
		fireEvent.click(addFormButton);

		const drawer = await screen.findByTestId("form-test-id");
		expect(drawer).toBeInTheDocument();

		const closeButton = await screen.findByText("Cancel");
		fireEvent.click(closeButton);

		expect(drawer).not.toBeInTheDocument();
	});

	it("should stack 2 drawers and pass data from the second to the first", async () => {
		render(
			<DrawersExample />,
		);

		const addFormButton = await screen.findByText("Add Form");
		fireEvent.click(addFormButton);

		const drawer1 = await screen.findByTestId("form-test-id");
		expect(drawer1).toBeInTheDocument();

		const openNewButton = await screen.findByText("Open new form");
		expect(openNewButton).toBeInTheDocument();
		fireEvent.click(openNewButton);

		const drawer2 = await screen.findByText("Sub-Form");
		expect(drawer2).toBeInTheDocument();

		const wutInput = await screen.findByLabelText("Wut");
		fireEvent.change(wutInput, { target: { value: "abc" } });

		const saveButton = await screen.findAllByText("Save");
		fireEvent.click(saveButton[1]);

		const result = await screen.findByLabelText("From Parent");
		expect(result).toHaveAttribute("value", '{"wut":"abc"}');
	});
});

it.todo("Update act in Drawers test");
