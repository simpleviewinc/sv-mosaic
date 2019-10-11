import React from "react";
import styled from "styled-components";

import MUIDrawer from "@material-ui/core/Drawer";

import CloseIcon from '@material-ui/icons/Close';

import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const DrawerContent = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	font-family: ${theme.fontFamily};

	& > .topBar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	& > .topBar > .left {
		display: flex;
		align-items: center;
	}

	& > .topBar > .left > h1 {
		font-size: 20px;
		padding: 0px 50px 0px 20px;
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