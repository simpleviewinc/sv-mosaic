import * as React from "react";
import { ReactElement } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import MenuItem from "@root/components/MenuItem";

export default {
	title : "Components/MenuItem",
};

const onClick = () => undefined;

export const text = (): ReactElement => {
	return (
		<MenuItem
			label="Test"
			onClick={onClick}
		/>
	);
};

export const withIcon = (): ReactElement => {
	return (
		<MenuItem
			label="Test"
			color="red"
			mIcon={DeleteIcon}
			onClick={onClick}
		/>
	);
};
