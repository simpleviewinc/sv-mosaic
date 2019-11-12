import React, { memo, useMemo } from "react";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";

function GridLimit(props) {
	const menuItems = useMemo(() => {
		return props.options.map(val => {
			return {
				label : val.toString(),
				onClick : function() {
					props.onLimitChange({ limit : val });
				}
			}
		});
	}, [props.options, props.onLimitChange]);
	
	return (
		<Button
			color="black"
			label={props.limit}
			variant="text"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			menuItems={menuItems}
		/>
	)
}

export default memo(GridLimit);