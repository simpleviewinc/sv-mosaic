import * as React from "react";
import { ReactElement, useCallback, useMemo, useReducer } from "react";
import { NavigateOptions } from "./example/ExampleTypes";
import { reducer } from "./example/utils";

// Components
import Drawers from "./Drawers";
import Page from "./example/Page";

export default {
	title: "Components/Drawers",
};

export const Example = (): ReactElement => {
	const [state, dispatch] = useReducer(reducer, {
		main: "grid",
		drawers: []
	});

	const navigate = useCallback(
		function (options: NavigateOptions) {
			dispatch({
				...options,
				type: "navigate"
			});
		},
		[dispatch]
	);

	const drawers = useMemo(() => {
		return state.drawers.map((val, i) => {
			return (
				<Page
					key={i}
					id={val.id}
					name={val.name}
					context="drawer"
					navigate={navigate}
					callbacks={val.callbacks}
				/>
			);
		});
	}, [state.drawers, navigate]);

	return (
		<>
			<div className="App">
				<div className="main">
					<Page name={state.main} navigate={navigate} context="main" id={0} />
				</div>
				<Drawers drawers={drawers} />
			</div>
		</>
	);
};
