import React from "react";
import Drawer from "@root/components/Drawer";
import DataViewViewDrawerContent from "../DataViewViewDrawerContent";
import { DataViewViewDrawerProps } from "./DataViewViewDrawerTypes";

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
	);
}

export default DataViewViewDrawer;
