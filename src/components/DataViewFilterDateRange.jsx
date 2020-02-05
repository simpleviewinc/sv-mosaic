import React, { useState } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import moment from "moment";

import DataViewPrimaryFilter from "./DataViewPrimaryFilter.jsx";
import DataViewFilterDateRangeDropdownContent from "./internal/DataViewFilterDateRangeDropdownContent.jsx";
import DataViewFilterDropdown from "./DataViewFilterDropdown.jsx";

const StyledWrapper = styled.span`
	
`;

function DataViewFilterDateRange(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "label",
				type : "string",
				required : true
			},
			{
				name : "data",
				type : "object",
				schema : [
					{ name : "rangeStart", type : "string" },
					{ name : "rangeEnd", type : "string" },
				],
				allowExtraKeys : false,
				required : true
			},
			{
				name : "type",
				type : "string",
				required : true
			},
			{
				name : "args",
				type : "object",
				allowExtraKeys : false
			},
			{
				name : "onRemove",
				type : "function",
				required : true
			},
			{
				name : "onChange",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	
	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	}
	
	const onClose = function() {
		setAnchorEl(null);
	}
	
	
	let valueString = 'any';
	const dateFormat = 'M/D/YY';
	if(props.data.rangeStart !== undefined && props.data.rangeEnd !== undefined){
		const start = moment(props.data.rangeStart);
		const end = moment(props.data.rangeEnd);
		valueString = `${start.format(dateFormat)} - ${end.format(dateFormat)}`;
	}else if(props.data.rangeStart !== undefined){
		const start = moment(props.data.rangeStart);
		valueString = `after ${start.format(dateFormat)}`;
	}else if(props.data.rangeEnd !== undefined){
		const end = moment(props.data.rangeEnd);
		valueString = `before ${end.format(dateFormat)}`;
	}
	
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
				<DataViewFilterDateRangeDropdownContent
					onClose={onClose}
					onChange={props.onChange}
					rangeStart={(props.data.rangeStart !== undefined) ? props.data.rangeStart : '' }
					rangeEnd={(props.data.rangeEnd !== undefined) ? props.data.rangeEnd : '' }
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}

export default DataViewFilterDateRange;