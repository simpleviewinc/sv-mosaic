import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MUIDrawer from "@mui/material/Drawer";

import theme from "../utils/theme.js";
// import { SxProps } from "@mui/material";

const DrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`

const MUIDrawerStyled = styled(MUIDrawer)`
	z-index: 1100;
	// display: ${pr => pr.display ? "block" : "none"};
	.MuiDrawer-paper {
		// animation: ${pr => pr.anchorStyle === "right" ? "moveToLeft" : "moveToOuterLeft"} 0.5s ease-in-out !important;
		// animation-delay: 10ms;
		// left:  ${pr => pr.anchorStyle === "left" ? "0" : "unset"};
		// right:  ${pr => pr.anchorStyle === "right" ? "0" : "unset"};
		transition: ${pr => pr.anchorStyle ? "transform 0.5s" : "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"} !important;
		transform: ${pr => pr.anchorStyle ? `translateX(${pr.anchorStyle === "left" ? "-25vw" : "0"})` : "none"} !important;
	}

	// @keyframes moveToLeft {
	// 	0% {
	// 		transform: translateX(75vw);
	// 	}
	// 	100% {
	// 		transform: translateX(0);
	// 	}
	// }

	// @keyframes moveToOuterLeft {
	// 	0% {
	// 		transform: translateX(0);
	// 	}
	// 	100% {
	// 		transform: translateX(-25vw);
	// 	}
	// }
`

// interface DrawerProps {
// 	open: boolean;
// 	onClose?: () => unknown;
// 	children: JSX.Element;
// 	key?: unknown;
// 	anchor?: "left" | "right";
// 	sx?: SxProps;
// }

const Drawer = (props) => {
	const { open, onClose, children, key, anchor = "right", display, anchorStyle = "right" } = props;

	const [state, setState] = useState({
		open: false
	});

	useEffect(() => {
		if (open === true) {
			setState({
				...state,
				open: true
			});
		}
	}, [open]);

	const onExited = function () {
		setState({
			...state,
			open: false
		});
	}

	return (
		<MUIDrawerStyled
			key={key}
			anchorStyle={anchorStyle}
			anchor={anchor}
			// display={display}
			open={open}
			onClose={onClose}
			SlideProps={{
				onExited
			}}
		>
			{
				state.open &&
				<DrawerContent>
					{children}
				</DrawerContent>
			}
		</MUIDrawerStyled>
	)
}

export default Drawer;