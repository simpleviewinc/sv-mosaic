import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MUIDrawer from "@mui/material/Drawer";

import theme from "../utils/theme.js";

const DrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`

const MUIDrawerStyled = styled(MUIDrawer)`
	z-index: 1100;
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
		<MUIDrawerStyled
			anchor="right"
			open={props.open}
			onClose={props.onClose}
			SlideProps={{
				onExited
			}}
		>
			{
				state.open &&
				<DrawerContent>
					{props.children}
				</DrawerContent>
			}
		</MUIDrawerStyled>
	)
}

export default Drawer;