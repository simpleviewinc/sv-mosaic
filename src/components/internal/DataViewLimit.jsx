import React, { memo, useMemo, useCallback } from "react";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MenuSelect from "../MenuSelect";
import Button from "../Button";

function DataViewLimit(props) {
	const onChange = useCallback(function(val) {
		props.onLimitChange({ limit : Number(val) });
	}, [props.onLimitChange]);

	const options = useMemo(function() {
		return props.options.map(val => {
			return {
				label : val,
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