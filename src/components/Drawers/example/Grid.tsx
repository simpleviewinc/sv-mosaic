import * as React from "react";
import { useState } from "react";
import { Callbacks } from "../DrawersTypes";
import { GridDef, NavigateFn, PageDef } from "./ExampleTypes";

const Grid = ({
	id,
	config,
	navigate,
	callbacks
}: {
		id: number;
		config: PageDef<GridDef>;
		navigate: NavigateFn;
		callbacks: Callbacks;
	}): JSX.Element => {
	const [count, setCount] = useState(0);
	
	const passData = function (count) {
		setCount(count);
	
		navigate({
			context: "back"
		});
	};
	
	return (
		<div>
			<h1>
				{config.args.title} - {id}
			</h1>
			<p>{count}</p>
			<button onClick={() => setCount(0)}>Reset</button>
			<br />
			<button onClick={() => setCount(count + 1)}>increment</button>
			<br />
			<button onClick={() => navigate({ context: "drawer", name: "grid" })}>
			Open Drawer
			</button>
			<br />
			<button
				onClick={() =>
					navigate({
						context: "drawer",
						name: "form",
						callbacks: { passData }
					})
				}
			>
			Open Drawer Form With Callbacks
			</button>
			<br />
			<button onClick={() => navigate({ context: "back" })}>Back</button>
			{callbacks?.passData && (
				<button onClick={() => callbacks.passData(count)}>Pass Data</button>
			)}
		</div>
	);
}

export default Grid;