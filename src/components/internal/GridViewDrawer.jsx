import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Drawer from "../Drawer.jsx";
import theme from "../../utils/theme.js";
import Grid from "../Grid.jsx";

const DrawerContent = styled.div`
	width: 600px;
`

function GridViewDrawer(props) {
	const GridConfig = {
		primaryActions : [
			{
				variant : "text",
				label : "Select",
				color : "blue",
				onClick : function({ data }) {
					props.onClose();
					props.onSavedViewChange(data.name);
				}
			}
		],
		data : props.savedViews,
		view : "list",
		columns : [
			{
				name : "label",
				label : "Label"
			},
			{
				name : "type",
				label : "Type"
			}
		],
		activeColumns : ["label", "type"]
	}
	
	return (
		<Drawer
			open={props.open}
			onClose={props.onClose}
			background="white"
			title="Views"
		>
			<DrawerContent>
				<Grid
					{...GridConfig}
				/>
			</DrawerContent>
		</Drawer>
	)
}

export default GridViewDrawer;