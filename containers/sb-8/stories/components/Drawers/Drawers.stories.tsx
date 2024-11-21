import * as React from "react";
import type { ReactElement } from "react";
import { useCallback, useMemo, useState } from "react";

// Components
import Drawers from "@root/components/Drawers";
import AppContext from "@root/components/Drawers/example/AppContext";
import type { AppState, DrawerDef } from "@root/components/Drawers/example/ExampleTypes";
import Page from "@root/components/Drawers/example/Page";

export default {
	title: "Components/Drawers",
};

export const Playground = (): ReactElement => {
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
				<h1>Drawer Demo</h1>
				<p>
					From Form:
					{JSON.stringify(state.content)}
				</p>
				<button
					onClick={() => addDrawer({
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
					})}
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
