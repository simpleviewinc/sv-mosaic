import * as React from "react";
import { useState, ReactElement } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";
import isSameMonth from "date-fns/isSameMonth";
import isSameYear from "date-fns/isSameYear";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDateDropdownContent from "./DataViewFilterDateDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterDateProps } from "./DataViewFilterDateTypes";
import { DATE_FORMAT_SHORT } from "@root/constants";

const StyledWrapper = styled.span``;

function isSame(dateLeft, dateRight) {
	return [isSameDay, isSameMonth, isSameYear].every(fn => {
		return fn(dateLeft, dateRight);
	});
}

export default function DataViewFilterDate(props: DataViewFilterDateProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	};

	const onClose = function() {
		setAnchorEl(null);
	};

	let valueString: string | undefined = undefined;

	if (props.data)
		if ("rangeStart" in props.data || "rangeEnd" in props.data) {
			const hasStart = props.data.rangeStart !== undefined;
			const hasEnd = props.data.rangeEnd !== undefined;
			const startFormat = hasStart ? format(props.data.rangeStart, DATE_FORMAT_SHORT) : undefined;
			const endFormat = hasEnd ? format(props.data.rangeEnd, DATE_FORMAT_SHORT) : undefined;

			if (isSame(props.data.rangeStart, props.data.rangeEnd)) {
				valueString = startFormat;
			} else if (hasStart && hasEnd) {
				valueString = `${startFormat} - ${endFormat}`;
			} else if (hasStart) {
				valueString = `from ${startFormat}`;
			} else if (hasEnd) {
				valueString = `to ${endFormat}`;
			}
		} else if ("option" in props.data && props.data.option !== undefined && props.args.options !== undefined) {
			const selectedOption = props.args.options.find(({ value }) => "option" in props.data && value === props.data.option);

			if (selectedOption) {
				valueString = selectedOption.label;
			}
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
					rangeStart={props.data && "rangeStart" in props.data ? props.data?.rangeStart : undefined}
					rangeEnd={props.data && "rangeEnd" in props.data ? props.data?.rangeEnd : undefined}
					options={props.args.options}
					selectedOption={props.data && "option" in props.data ? props.data?.option : undefined}
					minDate={props?.args.minDate}
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}
