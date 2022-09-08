import React from "react";

import Drawer from "@root/components/Drawer";
import DataViewViewDrawerContent from "./DataViewViewDrawerContent";

interface DataViewViewDrawerProps {
	open?: any;
	onClose?: any;
	onSave?: any;
	onRemove?: any;
	onChange?: any;
	onGetOptions?: any;
	allowSharedViewSave?: any;
}
// interface DataViewViewDrawerProps {
// 	open: boolean;
// 	onClose: () => void;
// 	onSave: any;
// 	onRemove: any;
// 	onChange: any;
// 	onGetOptions: any;
// 	allowSharedViewSave: any;
// }

//TODO PROPS
function DataViewViewDrawer(props: DataViewViewDrawerProps) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<DataViewViewDrawerContent
				onClose={props.onClose}
				onSave={props.onSave}
				onRemove={props.onRemove}
				onChange={props.onChange}
				onGetOptions={props.onGetOptions}
				allowSharedViewSave={props.allowSharedViewSave}
			/>
		</Drawer>
	)
}

export default DataViewViewDrawer;
