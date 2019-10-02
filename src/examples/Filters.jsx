import React, { useState } from "react";
import GridFilterText from "../components/GridFilterText.jsx";
import GridFilterMultiselect from "../components/GridFilterMultiselect.jsx";
import JSONDB from "../utils/JSONDB.js";

import categories from "./categories.json";

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
		},
		multiselect : {
			value : []
		},
		multiselect_all_comparisons : {
			value : [],
			comparison : "in"
		},
		multiselect_some_comparisons : {
			value : [],
			comparison : "in"
		}
	});
	
	const setState = name => state => {
		setValues({
			...values,
			[name] : state
		});
	}
	
	const optionsApi = new JSONDB(categories);
	
	const mapOptions = val => ({ label : val.tag, value : val.id });
	
	const getOptions = name => async (filter) => {
		if (name === "multiselect") {
			const query = {
				limit : filter.limit + 1,
				skip : filter.skip,
				sort : { name : "sort_tag", dir : "asc" }
			};
			
			if (filter.keyword !== undefined) {
				query.filter = {
					tag : new RegExp(filter.keyword, "i")
				}
			}
			
			const results = await optionsApi.find(query);
			
			return {
				docs : results.slice(0, filter.limit).map(mapOptions),
				hasMore : results.length > filter.limit
			};
		}
	}
	
	const getSelected = name => async (ids) => {
		if (name === "multiselect") {
			const results = await optionsApi.find({
				filter : { id : { $in : ids } },
				sort : { name : "sort_tag", dir : "asc" }
			});
			
			return results.map(mapOptions);
		}
	}
	
	return (
		<div>
			<h2>Text Filter</h2>
			<GridFilterText
				label="No Value"
				value={values.no_value}
				onChange={setState("no_value")}
			/>
			<GridFilterText
				label="With Value"
				value={values.with_value}
				onChange={setState("with_value")}
			/>
			<GridFilterText
				label="With All Comparisons"
				value={values.with_all_comparisons}
				args={{
					comparisons : ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]
				}}
				onChange={setState("with_all_comparisons")}
			/>
			<GridFilterText
				label="With Some Comparisons"
				value={values.with_some_comparisons}
				args={{
					comparisons : ["equals", "not_equals", "contains", "not_contains"]
				}}
				onChange={setState("with_some_comparisons")}
			/>
			
			<h2>Multiselect Filters</h2>
			<GridFilterMultiselect
				label="Multiselect"
				getOptions={getOptions("multiselect")}
				getSelected={getSelected("multiselect")}
				state={values.multiselect}
				setState={setState("multiselect")}
			/>
			<GridFilterMultiselect
				label="Multiselect All Comparisons"
				getOptions={getOptions("multiselect")}
				getSelected={getSelected("multiselect")}
				state={values.multiselect_all_comparisons}
				setState={setState("multiselect_all_comparisons")}
				comparisons={["in", "not_in", "all", "exists", "not_exists"]}
			/>
			<GridFilterMultiselect
				label="Multiselect Some Comparisons"
				getOptions={getOptions("multiselect")}
				getSelected={getSelected("multiselect")}
				state={values.multiselect_some_comparisons}
				setState={setState("multiselect_some_comparisons")}
				comparisons={["in", "not_in", "all"]}
			/>
			
			<h2>Filter State</h2>
			<pre>
				{ JSON.stringify(values, null, "  ") }
			</pre>
		</div>
	);
}

export default Filters;