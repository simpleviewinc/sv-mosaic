import type { ReactElement } from "react";

import React, { useState } from "react";

import type { DataViewFilterNumberProps } from "./DataViewFilterNumberTypes";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import DataViewFilterNumberDropdownContent from "./DataViewFilterNumberDropdownContent";
import Badge from "../Badge";
import testIds from "@root/utils/testIds";

export default function DataViewFilterNumber({
	args,
	data,
	label,
	onChange,
}: DataViewFilterNumberProps): ReactElement {
	const [anchorEl, setAnchorEl] = useState(null);
	const { min, max } = data ?? {};

	const onClick = function(evt) {
		setAnchorEl(evt.currentTarget);
	};

	const onClose = function() {
		setAnchorEl(null);
	};

	return (
		<>
			<DataViewPrimaryFilter
				label={label}
				value={(
					min !== undefined && max !== undefined ? (
						<>
							<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>between</span>
							<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>{min}</Badge>
							<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>and</span>
							<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>{max}</Badge>
						</>
					) : min !== undefined ? (
						<>
							<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>{min}</Badge>
							<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>or greater</span>
						</>
					) : max !== undefined && (
						<>
							<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>{max}</Badge>
							<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>or less</span>
						</>
					)
				)}
				onClick={onClick}
			/>
			<DataViewFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<DataViewFilterNumberDropdownContent
					args={args}
					data={data}
					onChange={onChange}
					onClose={onClose}
				/>
			</DataViewFilterDropdown>
		</>
	);
}
