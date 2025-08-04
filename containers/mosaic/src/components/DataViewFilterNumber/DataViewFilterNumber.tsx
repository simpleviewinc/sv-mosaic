import type { ReactElement } from "react";

import React, { useState } from "react";

import type { DataViewFilterNumberProps } from "./DataViewFilterNumberTypes";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import DataViewFilterNumberDropdownContent from "./DataViewFilterNumberDropdownContent";
import Badge from "../Badge";

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
							Between
							<Badge>{min}</Badge>
							and
							<Badge>{max}</Badge>
						</>
					) : min !== undefined ? (
						<>
							<Badge>{min}</Badge>
							or greater
						</>
					) : max !== undefined && (
						<>
							<Badge>{max}</Badge>
							or less
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
