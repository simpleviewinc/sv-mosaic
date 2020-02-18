import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import * as moment_ from "moment";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import FilterDateDropdownContent from "./FilterDateDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { FilterDateData, FilterDateOnChange, FilterDateProps } from "./FilterDateTypes";

const moment = moment_;

const StyledWrapper = styled.span`
	
`;

export default function FilterDate(props: FilterDateProps) {
	const [anchorEl, setAnchorEl] = useState(null);
	
	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	}
	
	const onClose = function() {
		setAnchorEl(null);
	}

	const hasStart = props.data.rangeStart !== undefined;
	const hasEnd = props.data.rangeEnd !== undefined;
	const momentStart = hasStart ? moment(props.data.rangeStart) : undefined;
	const momentEnd = hasEnd ? moment(props.data.rangeEnd) : undefined;
	
	let valueString = 'any';
	const dateFormat = 'M/D/YY';
	if (hasStart && hasEnd && momentStart.isSame(momentEnd)) {
		valueString = momentStart.format(dateFormat);
	} else if (hasStart && hasEnd) {
		valueString = `${momentStart.format(dateFormat)} - ${momentEnd.format(dateFormat)}`;
	} else if (hasStart) {
		valueString = `from ${momentStart.format(dateFormat)}`;
	} else if (hasEnd) {
		valueString = `to ${momentEnd.format(dateFormat)}`;
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
				<FilterDateDropdownContent
					onClose={onClose}
					onChange={props.onChange}
					rangeStart={props.data.rangeStart}
					rangeEnd={props.data.rangeEnd}
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}