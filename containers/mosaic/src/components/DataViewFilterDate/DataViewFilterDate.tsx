import type { ReactElement } from "react";

import React, { useMemo, useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";

import type { DataViewFilterDateProps } from "./DataViewFilterDateTypes";

import type { DataViewPrimaryFilterProps } from "../DataViewPrimaryFilter";
import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDateDropdownContent from "./DataViewFilterDateDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DATE_FORMAT_SHORT } from "@root/constants";

const StyledWrapper = styled.span``;

export default function DataViewFilterDate(props: DataViewFilterDateProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	};

	const onClose = function() {
		setAnchorEl(null);
	};

	const parts = useMemo<DataViewPrimaryFilterProps["parts"]>(() => {
		if (!props.data) {
			return;
		}

		if ("rangeStart" in props.data || "rangeEnd" in props.data) {
			const hasStart = props.data.rangeStart !== undefined;
			const hasEnd = props.data.rangeEnd !== undefined;
			const startFormat = hasStart ? format(props.data.rangeStart, DATE_FORMAT_SHORT) : undefined;
			const endFormat = hasEnd ? format(props.data.rangeEnd, DATE_FORMAT_SHORT) : undefined;

			if (isSameDay(props.data.rangeStart, props.data.rangeEnd)) {
				return [{ type: "term", label: startFormat }];
			} else if (hasStart && hasEnd) {
				return [
					{ type: "term", label: startFormat },
					{ type: "operator", label: "to" },
					{ type: "term", label: endFormat },
				];
			} else if (hasStart) {
				return [
					{ type: "operator", label: "from" },
					{ type: "term", label: startFormat },
				];
			} else {
				return [
					{ type: "operator", label: "to" },
					{ type: "term", label: endFormat },
				];
			}
		} else if ("option" in props.data && props.data.option !== undefined && props.args.options !== undefined) {
			const selectedOption = props.args.options.find(({ value }) => "option" in props.data && value === props.data.option);

			if (selectedOption) {
				return [{ type: "term", label: selectedOption.label }];
			}
		}
	}, [props.args.options, props.data]);

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				parts={parts}
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
