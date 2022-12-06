import * as React from "react";
import { useState, ReactElement } from "react";
import styled from "styled-components";
import { format, isSameDay, isSameMonth, isSameYear } from "date-fns";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDateDropdownContent from "./DataViewFilterDateDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterDateProps } from "./DataViewFilterDateTypes";

const StyledWrapper = styled.span``;

function isSame(dateLeft, dateRight) {
	return [isSameDay, isSameMonth, isSameYear].every(fn => {
		return fn(dateLeft, dateRight);
	})
}

const dateFormat = "M/d/yyyy";

export default function DataViewFilterDate(props: DataViewFilterDateProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	}

	const onClose = function() {
		setAnchorEl(null);
	}

	const hasStart = props.data.rangeStart !== undefined;
	const hasEnd = props.data.rangeEnd !== undefined;
	const startFormat = hasStart ? format(props.data.rangeStart, dateFormat) : undefined;
	const endFormat = hasEnd ? format(props.data.rangeEnd, dateFormat) : undefined;

	let valueString: string | undefined = undefined;

	if (isSame(props.data.rangeStart, props.data.rangeEnd)) {
		valueString = startFormat;
	} else if (hasStart && hasEnd) {
		valueString = `${startFormat} - ${endFormat}`;
	} else if (hasStart) {
		valueString = `from ${startFormat}`;
	} else if (hasEnd) {
		valueString = `to ${endFormat}`;
	}

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				onClick={onClick}
			/>
			<DataViewFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<DataViewFilterDateDropdownContent
					onClose={onClose}
					onChange={props.onChange}
					rangeStart={props.data.rangeStart}
					rangeEnd={props.data.rangeEnd}
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}
