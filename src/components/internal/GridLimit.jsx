import React from "react";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";

function GridLimit(props) {
	const menuItems = [25, 50, 100].map(val => {
		return {
			label : val.toString(),
			onClick : function() {
				props.onLimitChange(val);
			}
		}
	});
	
	return (
		<Button
			color="gray"
			label={props.limit}
			variant="text"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			menuItems={menuItems}
		/>
	)
}

export default GridLimit;