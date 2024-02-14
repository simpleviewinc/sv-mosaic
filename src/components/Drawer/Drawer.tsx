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
`;

const MUIDrawerStyled = styled(MUIDrawer)<{ $anchorStyle: { currentStyle: AnchorStyle; previousStyle: AnchorStyle }; $display?: boolean }>`
	z-index: 1100;
	${({ $anchorStyle, $display }) => $anchorStyle &&
		`.MuiDrawer-paper {
${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "right") &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`
}

${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "left" && $display) &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`
}

${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "left" && !$display) &&
`
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-100vw) !important;
`
}
		}`
}
`;

type AnchorStyle = "left" | "right";

interface DrawerProps extends MUIDrawerProps {
	open: boolean;
	onClose?: () => unknown;
	children: JSX.Element;
	anchor?: AnchorStyle;
	sx?: SxProps;
	idx?: Key;
	exitCB?: () => void;
	anchorstyle?: AnchorStyle;
	display?: boolean;
	backdropCloseHandler?: boolean;
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
		exitCB,
		backdropCloseHandler = true,
	} = props;

	const prevStyleRef = useRef<typeof anchorstyle>();
	useEffect(() => {
		prevStyleRef.current = anchorstyle;
	}, [anchorstyle]);

	const [state, setState] = useState({
		open: false,
	});

	useEffect(() => {
		if (open === true) {
			setState({
				...state,
				open: true,
			});
		}
	}, [open]);

	const onExited = function () {
		setState({
			...state,
			open: false,
		});
		if (exitCB) exitCB();
	};

	const onDrawClose = (e, r) => {
		if (!backdropCloseHandler && r === "backdropClick") {
			return;
		}

		onClose();
	};

	return (
		<>
			<MUIDrawerStyled
				key={idx}
				$anchorStyle={{ currentStyle: anchorstyle, previousStyle: prevStyleRef.current }}
				anchor={anchor}
				$display={display}
				open={open}
				onClose={onDrawClose}
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
	);
};

export default Drawer;
