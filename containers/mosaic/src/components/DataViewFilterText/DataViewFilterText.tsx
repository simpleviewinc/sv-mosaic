import React, { useMemo, useState } from "react";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterTextDropdownContent from "./DataViewFilterTextDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterTextProps, FilterTextComparison } from "./DataViewFilterTextTypes";

const validComparisons: { label: string; value: FilterTextComparison }[] = [
	{ label : "Contains", value : "contains" },
	{ label : "Not Contains", value : "not_contains" },
	{ label : "Equals", value : "equals" },
	{ label : "Not Equal", value : "not_equals" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" },
];

const comparisonMap = {
	equals : "",
	not_equals : "!=",
	contains : "~",
	not_contains : "!~",
};

function DataViewFilterText(props: DataViewFilterTextProps) {
	if (props.args.comparisonDefault && validComparisons.find( validComparison => validComparison.value === props.args.comparisonDefault) === undefined)
		throw new Error("The selected comparison is not a valid comparison");

	const [anchorEl, setAnchorEl] = useState(null);

	const comparison: FilterTextComparison = useMemo(() => {
		const { args, data } = props;

		if (!args || !args.comparisons) {
			return "equals";
		}

		if (data.comparison) {
			console.log("Uses data");
			return data.comparison;
		}

		const comparisonDefault = args.comparisonDefault as FilterTextComparison;
		if (comparisonDefault && args.comparisons.includes(comparisonDefault)) {
			return comparisonDefault;
		}

		return args.comparisons[0];
	}, [props.args, props.args.comparisons, props.args.comparisonDefault, props.data]);

	const value = props.data.value || "";

	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	};

	const onClose = function() {
		setAnchorEl(null);
	};

	// based on the state lets figure out what our value should be
	let valueString: string;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]} "${value}"`;
	}

	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;

	return (
		<span>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				onClick={onClick}
			/>
			<DataViewFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<DataViewFilterTextDropdownContent
					value={value}
					onChange={props.onChange}
					comparison={comparison}
					comparisons={activeComparisons}
					onClose={onClose}
					placeholder={props.args?.placeholder}
				/>
			</DataViewFilterDropdown>
		</span>
	);
}

export default DataViewFilterText;
