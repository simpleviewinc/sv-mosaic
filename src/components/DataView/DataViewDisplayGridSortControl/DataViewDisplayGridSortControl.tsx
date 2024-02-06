import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import styled from "styled-components";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import MenuSelect from "../../MenuSelect";
import Button from "../../Button";
import { DataViewDisplayGridSortControlProps } from "./DataViewDisplayGridSortControlTypes";

const StyledDiv = styled.div`
	${/* The arrow is comically large without this */""}
	& > .directionButton svg { font-size: 20px; }
`;

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
	const Icon = props.sort.dir === "asc" ? ArrowUpwardIcon : ArrowDownwardIcon;

	const onColumnChange = useCallback(function(name) {
		props.onSortChange({
			name,
			dir : props.sort.dir,
		});
	}, [props.sort, props.onSortChange]);

	const onDirectionChange = useCallback(function(dir) {
		const newDir = props.sort.dir === "asc" ? "desc" : "asc";

		props.onSortChange({
			name : props.sort.name,
			dir : newDir,
		});
	}, [props.sort, props.onSortChange]);

	return (
		<StyledDiv>
			<Button
				label={activeColumn.label}
				variant="text"
				color="black"
				size="small"
				menuContent={
					<MenuSelect
						options={labelOptions}
						value={props.sort.name}
						onChange={onColumnChange}
					/>
				}
			/>
			<Button
				className="directionButton"
				variant="icon"
				color="black"
				size="small"
				mIcon={Icon}
				onClick={onDirectionChange}
			/>
		</StyledDiv>
	);
}

export default memo(DataViewDisplayGridSortControl);
