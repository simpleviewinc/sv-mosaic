import React, { useState } from "react";
import styled from "styled-components";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GridOnIcon from "@material-ui/icons/GridOn";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";
import Menu from "../Menu.jsx";

const StyledSpan = styled.span`
	& > .button {
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.54);
	}
	
	& > .button:hover {
		background: rgba(0, 0, 0, .08);
	}
`

function GridViewSwitcher(props) {
	const Icon = props.view === "list" ? FormatListBulletedIcon : GridOnIcon;
	
	return (
		<StyledSpan>
			<Button
				variant="text"
				color="gray"
				label={<Icon/>}
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				menuItems={
					[
						{
							label : "List",
							mIcon : FormatListBulletedIcon,
							onClick : function() {
								props.onViewChange("list");
							}
						},
						{
							label : "Grid",
							mIcon : GridOnIcon,
							onClick : function() {
								props.onViewChange("grid");
							}
						}
					]
				}
			/>
		</StyledSpan>
	)
}

export default GridViewSwitcher;