import * as React from "react";
import { useState } from "react";
import { Callbacks } from "../DrawersTypes";
import { GridDef, NavigateFn, PageDef } from "./ExampleTypes";
import Button from "@root/components/Button";

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
		<div style={{display: "flex", flexDirection: "column", gap: 10}}>
			<h1>
				{config.args.title} - {id}
			</h1>
			<p>{count}</p>

			<Button
				color="teal"
				variant="outlined"
				label="Reset"
				onClick={() => setCount(0)}
			/>
			<Button
				color="teal"
				variant="outlined"
				label="Increment"
				onClick={() => setCount(count + 1)}
			/>
			<Button
				color="teal"
				variant="outlined"
				label="Open Regular Drawer"
				onClick={() => navigate({ context: "drawer", name: "grid" })}
			/>
			<Button
				color="teal"
				variant="outlined"
				label="Open Form Drawer"
				onClick={() =>
					navigate({
						context: "drawer",
						name: "form",
						callbacks: { passData }
					})
				}
			/>
			<Button
				color="teal"
				variant="outlined"
				label="Go Back"
				onClick={() => navigate({ context: "back" })}
			/>
			{callbacks?.passData &&
				<Button
					color="teal"
					variant="outlined"
					label="Pass Data"
					onClick={() => callbacks.passData(count)}
				/>
			}
		</div>
	);
}

export default Grid;