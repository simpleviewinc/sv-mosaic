import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MUIDrawer from "@material-ui/core/Drawer";

import theme from "../utils/theme.js";

const DrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`

function Drawer(props) {
	const [state, setState] = useState({
		open: false
	});

	useEffect(() => {
		if (props.open === true) {
			setState({
				...state,
				open: true
			});
		}
	}, [props.open]);

	const onExited = function () {
		setState({
			...state,
			open: false
		});
	}

	return (
		<MUIDrawer
			anchor="right"
			open={props.open}
			onClose={props.onClose}
			SlideProps={{
				onExited
			}}
			//TODO: MOVE TO STYLED COMPONENT 
			style={{ zIndex: 99999 }}
		>
			{
				state.open &&
				<DrawerContent>
					{props.children}
				</DrawerContent>
			}
		</MUIDrawer>
	)
}

export default Drawer;