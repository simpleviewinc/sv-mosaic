import React from "react";

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
				allowSharedViewSave={props.allowSharedViewSave}
			/>
		</Drawer>
	)
}

export default DataViewViewSaveDrawer;
