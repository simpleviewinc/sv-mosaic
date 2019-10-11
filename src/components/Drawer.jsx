import React from "react";
import styled from "styled-components";

import MUIDrawer from "@material-ui/core/Drawer";

import CloseIcon from '@material-ui/icons/Close';

import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const DrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;

	& > .topBar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
	}
	
	& > .topBar > .left {
		display: flex;
		align-items: center;
	}

	& > .topBar > .left > h1 {
		${theme.h1}
		
		display: inline;
		padding: 0px 50px 0px 20px;
		margin: 0;
	}
	
	& > .content {
		flex: 1;
		padding: 12px;
		background: #FAFBFC;
	}
`

function Drawer(props) {
	return (
		<MUIDrawer anchor="right" open={props.open} onClose={props.onClose}>
			<DrawerContent>
				<div className="topBar">
					<div className="left">
						<Button
							mIcon={CloseIcon}
							variant="icon"
							color="black"
							onClick={props.onClose}
						/>
						<h1>{props.title}</h1>
					</div>
					<div className="right">
						{props.buttons}
					</div>
				</div>
				<div className="content">
					{props.children}
				</div>
			</DrawerContent>
		</MUIDrawer>
	)
}

export default Drawer;