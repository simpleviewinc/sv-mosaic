import React from "react";

import Drawer from "@root/components/Drawer";
import DataViewViewSaveDrawerContent from "./DataViewViewSaveDrawerContent";

interface DataViewViewSaveDrawerProps {
	open?: any;
	onClose?: any;
	data?: any;
	onSave?: any;
	allowSharedViewSave?: any;
}
// interface DataViewViewSaveDrawerProps {
// 	open: boolean;
// 	onClose: () => void;
// 	data: any;
// 	onSave: any;
// 	allowSharedViewSave: any;
// }

//TODO PROPS
function DataViewViewSaveDrawer(props: DataViewViewSaveDrawerProps) {
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
