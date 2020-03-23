import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import styled from "styled-components";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DataViewColumn, DataViewDisplaySettingsGrid, DataViewSort, DataViewOnSortChange } from "./DataViewTypes";
import MenuSelect from "../MenuSelect";
import Button from "../Button";
import theme from "../../utils/theme";

interface Props {
	columns: DataViewColumn[]
	sort: DataViewSort,
	displaySettings: DataViewDisplaySettingsGrid
	onSortChange: DataViewOnSortChange
}

const StyledDiv = styled.div`

`;

const directionOptions = [
	{
		label : "Asc",
		value : "asc"
	},
	{
		label : "Desc",
		value : "desc"
	}
];

function DataViewDisplayGridSortControl(props: Props) {
	const sortColumns = useMemo(() => {
		return props.columns.filter(val => val.sortable === true);
	}, [props.columns]);

	const labelOptions = useMemo(() => {
		return sortColumns.map(val => {
			return {
				label : val.label,
				value : val.name
			}
		});
	}, [sortColumns]);

	const activeColumn = labelOptions.find(val => val.value === props.sort.name);
	const activeDirection = directionOptions.find(val => val.value === props.sort.dir);

	const onColumnChange = useCallback(function(name) {
		props.onSortChange({
			name,
			dir : props.sort.dir
		});
	}, [props.sort, props.onSortChange]);

	const onDirectionChange = useCallback(function(dir) {
		props.onSortChange({
			name : props.sort.name,
			dir
		})
	}, [props.sort, props.onSortChange]);

	return (
		<StyledDiv>
			<Button
				label={activeColumn.label}
				variant="text"
				color="black"
				size="small"
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				mIconColor={theme.colors.gray600}
				menuContent={
					<MenuSelect
						options={labelOptions}
						value={props.sort.name}
						onChange={onColumnChange}
					/>
				}
			/>
			<Button
				label={activeDirection.label}
				variant="text"
				color="black"
				size="small"
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				mIconColor={theme.colors.gray600}
				menuContent={
					<MenuSelect
						options={directionOptions}
						value={props.sort.dir}
						onChange={onDirectionChange}
					/>
				}
			/>
		</StyledDiv>
	);
}

export default memo(DataViewDisplayGridSortControl);