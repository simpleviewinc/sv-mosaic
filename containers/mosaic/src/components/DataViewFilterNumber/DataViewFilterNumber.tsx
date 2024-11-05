import type { ReactElement } from "react";

import React, { useState, useMemo } from "react";

import type { DataViewFilterNumberProps } from "./DataViewFilterNumberTypes";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import DataViewFilterNumberDropdownContent from "./DataViewFilterNumberDropdownContent";

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

	const formattedValue = useMemo(() => {
		if (min === undefined && max === undefined) {
			return;
		}

		if (min === undefined) {
			return `${max} or less`;
		}

		if (max === undefined) {
			return `${min} or greater`;
		}

		return `Between ${min} and ${max}`;
	}, [min, max]);

	return (
		<>
			<DataViewPrimaryFilter
				label={label}
				value={formattedValue}
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
