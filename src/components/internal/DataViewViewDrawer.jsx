import React from "react";
import styled from "styled-components";

import Drawer from "@root/components/Drawer";
import DataViewViewDrawerContent from "./DataViewViewDrawerContent.jsx";


function DataViewViewDrawer(props) {
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