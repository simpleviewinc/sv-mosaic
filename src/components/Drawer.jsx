import React, { useState, useEffect, useRef } from "react";
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
	${pr => pr.anchorstyle && 
		`.MuiDrawer-paper {
			// animation: ${pr.anchorstyle === "right" ? "moveToLeft" : "moveToOuterLeft"} 0.5s ease-in-out !important;
			// animation-delay: 10ms;
			// animation: ${pr.anchorstyle === "right" && "moveIntoScreen"} 0.5s ease-in-out !important;
			// animation-delay: 10ms;
			${(pr.anchorstyle.currentStyle === "right" && pr.anchorstyle.previousStyle === "right") && 
			`
				animation: moveIntoScreen 1s ease-in-out !important;
			`
}

			${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "right") && 
			`
				background: white;
				transition: transform 1s ease-in-out !important;
				transform: translateX(-25vw) !important;
			`
}

			${(pr.anchorstyle.currentStyle === "right" && pr.anchorstyle.previousStyle === "left") && 
			`
				background: white;
				transition: transform 1s ease-in-out !important;
				transform: translateX(0) !important;
			`
}

			${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && pr.display) && 
			`
				background: white;
				transition: transform 1s ease-in-out !important;
				transform: translateX(-25vw) !important;
			`
}

			${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && !pr.display) && 
			`
				background: white;
				transition: transform 1s ease-in-out !important;
				transform: translateX(-100vw) !important;
			`
}

			@keyframes moveIntoScreen {
				0% {
					transform: translateX(75vw);
				}
				100% {
					transform: translateX(0);
				}
			}
		}`
}
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
	const { open, onClose, children, key, anchor = "right", display, anchorstyle } = props;

	//the useRef Hook allows you to persist data between renders
	const prevStyleRef = useRef();
	useEffect(() => {
		//assign the ref's current value to the count Hook
		prevStyleRef.current = anchorstyle;
	}, [anchorstyle]); //run this code when the value of count changes

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
		<>
			<MUIDrawerStyled
				key={key}
				anchorstyle={{currentStyle: anchorstyle, previousStyle: prevStyleRef.current}}
				anchor={anchor}
				display={display}
				open={open}
				onClose={onClose}
				SlideProps={{
					onExited
				}}
			>
				{
					state.open &&
					<DrawerContent>
						<p>Now: {anchorstyle}, Prev: {prevStyleRef.current}</p>
						{children}
					</DrawerContent>
				}
			</MUIDrawerStyled>
		</>
	)
}

export default Drawer;