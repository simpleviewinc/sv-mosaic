import React, { useState } from "react";

import Drawer from "../Drawer.jsx";
import GridViewSaveDrawerContent from "./GridViewSaveDrawerContent.jsx";

function GridViewSaveDrawer(props) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<GridViewSaveDrawerContent
				data={props.data}
				onClose={props.onClose}
				onSave={props.onSave}
			/>
		</Drawer>
	)
}

export default GridViewSaveDrawer;