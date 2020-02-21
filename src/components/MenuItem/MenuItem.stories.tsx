import * as React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import MenuItem from "./MenuItem";

export default {
	title : "Components|MenuItem"
}

const onClick = function() {};

export const text = () => {
	return (
		<MenuItem
			label="Test"
			onClick={onClick}
		/>
	)
}

export const withIcon = () => {
	return (
		<MenuItem
			label="Test"
			color="red"
			mIcon={DeleteIcon}
			onClick={onClick}
		/>
	)
}