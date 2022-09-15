import React, { useState } from "react";
import styled from "styled-components";
// import jsvalidator from "jsvalidator";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterTextDropdownContent from "./DataViewFilterTextDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";

const StyledWrapper = styled.span`

`;

const validComparisons: { label: string; value: Comparison }[] = [
	{ label : "Contains", value : "contains" },
	{ label : "Not Contains", value : "not_contains" },
	{ label : "Equals", value : "equals" },
	{ label : "Not Equal", value : "not_equals" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" }
];

// const validComparisonNames = validComparisons.map(val => val.value);

const comparisonMap = {
	equals : "",
	not_equals : "!=",
	contains : "~",
	not_contains : "!~"
}

type Comparison = "contains" | "not_contains" | "equals" | "not_equals" | "exists" | "not_exists";

export interface DataViewFilterTextProps {
	label?: any;
	data?: any;
	type?: any;
	args?: any;
	onRemove?: any;
	onChange?: any;
}
// export interface DataViewFilterTextProps {
// 	label?: string;
// 	data?: {
// 		value?: string;
// 		comparison?: Comparison;
// 	};
// 	comparisonDefault?: Comparison;
// 	type?: "primary" | "optional";
// 	args?: {
// 		comparisons?: Comparison[];
// 		placeholder?: string;
// 	}
// 	onRemove?: () => void;
// 	onChange?: () => void;
// }
//TODO PROPS
function DataViewFilterText(props: DataViewFilterTextProps) {
	// jsvalidator.validate(props, {
	// 	type : "object",
	// 	schema : [
	// 		{
	// 			name : "label",
	// 			type : "string",
	// 			required : true
	// 		},
	// 		{
	// 			name : "data",
	// 			type : "object",
	// 			schema : [
	// 				{ name : "value", type : "string" },
	// 				{ name : "comparison", type : "string", enum : validComparisonNames }
	// 			],
	// 			allowExtraKeys : false,
	// 			required : true
	// 		},
	// 		{
	// 			name: "comparisonDefault",
	// 			type: "string",
	// 			required: false
	// 		},
	// 		{
	// 			name : "type",
	// 			type : "string",
	// 			required : true
	// 		},
	// 		{
	// 			name : "args",
	// 			type : "object",
	// 			schema : [
	// 				{
	// 					name : "comparisons",
	// 					type : "array",
	// 					schema : {
	// 						type : "string",
	// 						enum : validComparisonNames
	// 					}
	// 				},
	// 				{
	// 					name : "placeholder",
	// 					type : "string",
	// 					required : false
	// 				}
	// 			],
	// 			allowExtraKeys : false
	// 		},
	// 		{
	// 			name : "onRemove",
	// 			type : "function",
	// 			required : true
	// 		},
	// 		{
	// 			name : "onChange",
	// 			type : "function",
	// 			required : true
	// 		}
	// 	],
	// 	allowExtraKeys : false,
	// 	throwOnInvalid : true
	// });

	if (props.args.comparisonDefault && validComparisons.find( validComparison => validComparison.value === props.args.comparisonDefault) === undefined)
		throw new Error("The selected comparison is not a valid comparison");

	const getComparison = () => {
		if (props.args && props.args.comparisons) {
			if (props.data.comparison) {
				return props.data.comparison;
			} else if (props.args.comparisonDefault && props.args.comparisons.includes(props.args.comparisonDefault)) {
				return props.args.comparisonDefault;
			} else {
				return props.args.comparisons[0];
			}
		}
		return "equals";
	};

	const [anchorEl, setAnchorEl] = useState(null);
	const comparison = getComparison();
	const value = props.data.value || "";

	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	}

	const onClose = function() {
		setAnchorEl(null);
	}


	// based on the state lets figure out what our value should be
	let valueString;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]} "${value}"`
	}

	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				type={props.type}
				onRemove={props.onRemove}
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
		</StyledWrapper>
	);
}

export default DataViewFilterText;
