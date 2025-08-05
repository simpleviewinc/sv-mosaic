import type { ReactElement, ReactNode } from "react";

import React, { useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";

import type { DataViewFilterDateProps } from "./DataViewFilterDateTypes";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDateDropdownContent from "./DataViewFilterDateDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DATE_FORMAT_SHORT } from "@root/constants";
import testIds from "@root/utils/testIds";
import Badge from "../Badge";

const StyledWrapper = styled.span``;

export default function DataViewFilterDate(props: DataViewFilterDateProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	};

	const onClose = function() {
		setAnchorEl(null);
	};

	let valueString: ReactNode | undefined = undefined;

	if (props.data)
		if ("rangeStart" in props.data || "rangeEnd" in props.data) {
			const hasStart = props.data.rangeStart !== undefined;
			const hasEnd = props.data.rangeEnd !== undefined;
			const startFormat = hasStart ? format(props.data.rangeStart, DATE_FORMAT_SHORT) : undefined;
			const endFormat = hasEnd ? format(props.data.rangeEnd, DATE_FORMAT_SHORT) : undefined;

			if (isSameDay(props.data.rangeStart, props.data.rangeEnd)) {
				valueString = <Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{startFormat}</Badge>;
			} else if (hasStart && hasEnd) {
				valueString = (
					<>
						<Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{startFormat}</Badge>
						<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>to</span>
						<Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{endFormat}</Badge>
					</>
				);
			} else if (hasStart) {
				valueString = (
					<>
						<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>from</span>
						<Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{startFormat}</Badge>
					</>
				);
			} else {
				valueString = (
					<>
						<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>to</span>
						<Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{endFormat}</Badge>
					</>
				);
			}
		} else if ("option" in props.data && props.data.option !== undefined && props.args.options !== undefined) {
			const selectedOption = props.args.options.find(({ value }) => "option" in props.data && value === props.data.option);

			if (selectedOption) {
				valueString = <Badge data-testid={testIds.DATA_VIEW_FILTER_VALUE}>{selectedOption.label}</Badge>;
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
