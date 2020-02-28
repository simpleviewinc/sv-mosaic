import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import { DataViewLimitProps } from "./DataViewTypes";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { default as MenuSelect, MenuSelectProps } from "../MenuSelect";
import Button from "../Button";

function DataViewLimit(props: DataViewLimitProps) {
	const onChange = useCallback<MenuSelectProps["onChange"]>(function(val) {
		props.onLimitChange({ limit : Number(val) });
	}, [props.onLimitChange]);

	const options = useMemo(function() {
		return props.options.map(val => {
			return {
				label : val.toString(),
				value : val.toString()
			}
		});
	}, [props.options]);
	
	const menuContent = (
		<MenuSelect
			options={options}
			onChange={onChange}
			value={props.limit.toString()}
		/>
	)

	return (
		<Button
			color="black"
			label={props.limit}
			variant="text"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			menuContent={menuContent}
		/>
	)
}

export default memo(DataViewLimit);