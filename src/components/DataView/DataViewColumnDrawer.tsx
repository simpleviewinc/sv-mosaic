import React from "react";

import Drawer from "@root/components/Drawer";
import DataViewColumnDrawerContent from "./DataViewColumnDrawerContent";

function DataViewColumnDrawer(props) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<DataViewColumnDrawerContent
				columns={props.columns}
				allColumns={props.allColumns}
				onChange={props.onChange}
				onClose={props.onClose}
			/>
		</Drawer>
	)
}

export default DataViewColumnDrawer;