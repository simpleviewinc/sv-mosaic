import React, { useState } from "react";

import Drawer from "../Drawer.jsx";
import DataViewViewSaveDrawerContent from "./DataViewViewSaveDrawerContent.jsx";

function DataViewViewSaveDrawer(props) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<DataViewViewSaveDrawerContent
				data={props.data}
				onClose={props.onClose}
				onSave={props.onSave}
			/>
		</Drawer>
	)
}

export default DataViewViewSaveDrawer;