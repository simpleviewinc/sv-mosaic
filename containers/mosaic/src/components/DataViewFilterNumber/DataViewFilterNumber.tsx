import type { ReactElement } from "react";

import React, { useMemo, useState } from "react";

import type { DataViewFilterNumberProps } from "./DataViewFilterNumberTypes";

import type { DataViewPrimaryFilterProps } from "../DataViewPrimaryFilter";
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

	const parts = useMemo<DataViewPrimaryFilterProps["parts"]>(() => {
		if (min !== undefined && max !== undefined) {
			return [
				{ type: "operator", label: "between" },
				{ type: "term", label: min },
				{ type: "operator", label: "and" },
				{ type: "term", label: max },
			];
		}

		if (min !== undefined) {
			return [
				{ type: "term", label: min },
				{ type: "operator", label: "or greater" },
			];
		}

		if (max !== undefined) {
			return [
				{ type: "term", label: max },
				{ type: "operator", label: "or less" },
			];
		}
	}, [max, min]);

	return (
		<>
			<DataViewPrimaryFilter
				label={label}
				parts={parts}
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
