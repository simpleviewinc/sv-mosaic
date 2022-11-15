import * as React from "react";
import { useState, useContext, useCallback } from "react";
import { FormConfig, PageCallbacks } from "./ExampleTypes";
import AppContext from "./AppContext";

function FormExample({
	config,
	callbacks,
}: {
config: FormConfig;
callbacks: PageCallbacks;
}) {
	const appContext = useContext(AppContext);
	const [data, setData] = useState<Record<string, string>>(() => {
		const data: Record<string, any> = {};
		for (const field of config.fields) {
			data[field] = "";
		}

		return data;
	});

	const onChange = useCallback((e) => {
		const name = e.target.getAttribute("data-name");

		setData((data) => ({
			...data,
			[name]: e.target.value,
		}));
	}, []);

	return (
		<div>
			<h1>{config.title}</h1>
			<p>Data: {JSON.stringify(data)}</p>
			<button onClick={appContext.removeDrawer}>Close</button>

			{callbacks.save && (
				<button onClick={() => callbacks.save(data)}>Save</button>
			)}

			{config.fields.map((val) => {
				const strVal = typeof data[val] === "object" ? JSON.stringify(data[val]) : data[val];

				return (
					<div key={val}>
						<label>{val}</label>
						<input
							type="text"
							value={strVal}
							data-name={val}
							onChange={onChange}
						/>
					</div>
				);
			})}

			<button
				onClick={() =>
					appContext.addDrawer({
						config: {
							type: "form",
							title: "Sub-Form",
							fields: ["wut", "is", "this", "from_parent"],
						},
						callbacks: {
							save: (data) => {
								setData((state) => ({
									...state,
									from_parent: data,
								}));

								appContext.removeDrawer();
							},
						},
					})
				}
			>
				Open Form
			</button>
		</div>
	);
}

export default FormExample;
