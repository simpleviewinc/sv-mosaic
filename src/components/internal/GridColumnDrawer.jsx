import React from "react";

import Drawer from "../Drawer.jsx";
import GridColumnDrawerContent from "./GridColumnDrawerContent.jsx";

function GridColumnDrawer(props) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<GridColumnDrawerContent
				columns={props.columns}
				allColumns={props.allColumns}
				onChange={props.onChange}
				onClose={props.onClose}
			/>
		</Drawer>
	)
}

export default GridColumnDrawer;