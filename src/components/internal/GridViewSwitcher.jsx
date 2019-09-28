import React, { useState } from "react";
import styled from "styled-components";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GridOnIcon from "@material-ui/icons/GridOn";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Menu from "../Menu.jsx";

const StyledSpan = styled.span`
	& > .button {
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
	}
	
	& > .button:hover {
		background: rgba(0, 0, 0, .08);
	}
`

function GridViewSwitcher(props) {
	const [state, setState] = useState({
		anchorEl : null
	});
	
	const onClick = function(event) {
		setState({
			...state,
			anchorEl : event.currentTarget
		});
	}
	
	const onClose = function() {
		setState({
			...state,
			anchorEl : null
		});
	}
	
	const Icon = props.view === "list" ? FormatListBulletedIcon : GridOnIcon;
	
	return (
		<StyledSpan>
			<span className="button" onClick={onClick}>
				<Icon/>
				<ExpandMoreIcon/>
			</span>
			<Menu
				anchorEl={state.anchorEl}
				open={Boolean(state.anchorEl)}
				onClose={onClose}
				items={
					[
						{
							label : "List",
							onClick : function() {
								props.onViewChange("list");
								onClose();
							}
						},
						{
							label : "Grid",
							onClick : function() {
								props.onViewChange("grid");
								onClose();
							}
						}
					]
				}
			/>
		</StyledSpan>
	)
}

export default GridViewSwitcher;