import React, { memo, useMemo, useCallback } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import type { DataViewDisplayGridSortControlProps } from "./DataViewDisplayGridSortControlTypes";

import Button from "../../Button";
import testIds from "@root/utils/testIds";
import { Row } from "@root/components/common";

const dirButtonAtts = { "aria-label": "Sort Direction" };

function DataViewDisplayGridSortControl(props: DataViewDisplayGridSortControlProps) {
	const sortColumns = useMemo(() => {
		return props.columns.filter(val => val.sortable === true);
	}, [props.columns]);

	const labelOptions = useMemo(() => {
		return sortColumns.map(val => {
			return {
				label : val.label,
				value : val.name,
			};
		});
	}, [sortColumns]);

	const activeColumn = labelOptions.find(val => val.value === props.sort.name);
	const Icon = useMemo(() => function Icon() {
		return props.sort.dir === "asc" ?
			<ArrowUpwardIcon data-testid={testIds.DATA_VIEW_SORT_ASC} /> :
			<ArrowDownwardIcon data-testid={testIds.DATA_VIEW_SORT_DESC} />;
	}, [props.sort.dir]);

	const onColumnChange = useCallback(function(name) {
		props.onSortChange({
			name,
			dir : props.sort.dir,
		});
	}, [props.sort, props.onSortChange]);

	const onDirectionChange = useCallback(function() {
		const newDir = props.sort.dir === "asc" ? "desc" : "asc";

		props.onSortChange({
			name : props.sort.name,
			dir : newDir,
		});
	}, [props.sort, props.onSortChange]);

	return (
		<Row $align="center">
			<Button
				label={activeColumn.label}
				variant="text"
				intent="secondary"
				menuItems={labelOptions}
				menuOnChange={onColumnChange}
				menuValue={props.sort.name}
			/>
			<Button
				className="directionButton"
				variant="text"
				intent="secondary"
				mIcon={Icon}
				onClick={onDirectionChange}
				muiAttrs={dirButtonAtts}
			/>
		</Row>
	);
}

export default memo(DataViewDisplayGridSortControl);
