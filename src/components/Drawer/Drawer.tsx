import React, { useState, useEffect, useRef, Key, ReactElement } from "react";
import styled from "styled-components";
import MUIDrawer, { DrawerProps as MUIDrawerProps } from "@mui/material/Drawer";

import theme from "@root/theme";
import { SxProps } from "@mui/system";

const StyledDrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`

const MUIDrawerStyled = styled(MUIDrawer)`
	z-index: 1100;
	${pr => pr.anchorstyle &&
		`.MuiDrawer-paper {
${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "right") &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`
}

${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && pr.display) &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`
}

${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && !pr.display) &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-100vw) !important;
`
}
		}`
}
`

interface DrawerProps extends MUIDrawerProps {
	open: boolean;
	onClose?: () => unknown;
	children: JSX.Element;
	anchor?: "left" | "right";
	sx?: SxProps;
	idx?: Key;
	exitCB?: () => void;
	anchorstyle?: "left" | "right";
	display?: boolean;
}

const Drawer = (props: DrawerProps): ReactElement => {
	const {
		open,
		onClose,
		children,
		idx,
		anchor = "right",
		display,
		anchorstyle,
		exitCB
	} = props;

	const prevStyleRef = useRef<typeof anchorstyle>();
	useEffect(() => {
		prevStyleRef.current = anchorstyle;
	}, [anchorstyle]);

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
			open: false,
		});
		if (exitCB) exitCB();
	}

	return (
		<>
			<MUIDrawerStyled
				key={idx}
				anchorstyle={{currentStyle: anchorstyle, previousStyle: prevStyleRef.current}}
				anchor={anchor}
				display={display}
				open={open}
				onClose={onClose}
				SlideProps={{
					onExited,
				}}
			>
				{
					state.open &&
					<StyledDrawerContent>
						{children}
					</StyledDrawerContent>
				}
			</MUIDrawerStyled>
		</>
	)
}

export default Drawer;
