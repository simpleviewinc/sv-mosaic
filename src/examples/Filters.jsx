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
		with_comparisons : {
			value : "",
			comparison : "equals"
		}
	});
	
	const setState = name => state => {
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
				label="With Comparisons"
				state={values.with_comparisons}
				comparisons={["equals", "contains"]}
				setState={setState("with_comparisons")}
			/>
		</div>
	);
}

export default Filters;