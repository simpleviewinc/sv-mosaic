import React from "react";
import styled from "styled-components";

import Drawer from "../Drawer.jsx";
import GridViewDrawerContent from "./GridViewDrawerContent.jsx";


function GridViewDrawer(props) {
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
		>
			<GridViewDrawerContent
				onClose={props.onClose}
				onSave={props.onSave}
				onRemove={props.onRemove}
				onChange={props.onChange}
				onGetOptions={props.onGetOptions}
			/>
		</Drawer>
	)
}

export default GridViewDrawer;