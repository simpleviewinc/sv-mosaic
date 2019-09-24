import React, { useState } from "react";
import GridFilterText from "../components/GridFilterText.jsx";

function Filters() {
	const [values, setValues] = useState({
		no_value : {
			value : ""
		},
		with_value : {
			value : "Testing value"
		},
		with_all_comparisons : {
			value : "",
			comparison : "equals"
		},
		with_some_comparisons : {
			value : "",
			comparison : "equals"
		}
	});
	
	const setState = name => state => {
		console.log("settings state", state);
		setValues({
			...values,
			[name] : state
		});
	}
	
	return (
		<div>
			<h2>Text Filter</h2>
			<GridFilterText
				label="No Value"
				state={values.no_value}
				setState={setState("no_value")}
			/>
			<GridFilterText
				label="With Value"
				state={values.with_value}
				setState={setState("with_value")}
			/>
			<GridFilterText
				label="With All Comparisons"
				state={values.with_all_comparisons}
				comparisons={["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]}
				setState={setState("with_all_comparisons")}
			/>
			<GridFilterText
				label="With Some Comparisons"
				state={values.with_some_comparisons}
				comparisons={["equals", "not_equals", "contains", "not_contains"]}
				setState={setState("with_some_comparisons")}
			/>
		</div>
	);
}

export default Filters;