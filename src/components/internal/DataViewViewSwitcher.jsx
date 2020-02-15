import React, { useState } from "react";
import styled from "styled-components";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GridOnIcon from "@material-ui/icons/GridOn";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button";
import Menu from "../Menu.jsx";

const StyledSpan = styled.span`

`

function DataViewViewSwitcher(props) {
	const Icon = props.view === "list" ? FormatListBulletedIcon : GridOnIcon;
	
	const menuItems = [];
	
	if (props.view === "list") {
		menuItems.push({
			label : "Grid",
			mIcon : GridOnIcon,
			onClick : function() {
				props.onViewChange("grid");
			}
		});
	} else {
		menuItems.push({
			label : "List",
			mIcon : FormatListBulletedIcon,
			onClick : function() {
				props.onViewChange("list");
			}
		});
	}
	
	return (
		<StyledSpan>
			<Button
				variant="text"
				color="black"
				label={<Icon/>}
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				menuItems={menuItems}
			/>
		</StyledSpan>
	)
}

export default DataViewViewSwitcher;