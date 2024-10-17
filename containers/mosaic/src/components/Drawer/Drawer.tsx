import type { ReactElement } from "react";

import React, { useState, useEffect, useRef } from "react";

import type { DrawerProps } from "./DrawerTypes";
import { MUIDrawerStyled, StyledDrawerContent } from "./Drawer.styled";

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

	const onDrawClose = (_, r: string) => {
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
					state.open && (
						<StyledDrawerContent>
							{children}
						</StyledDrawerContent>
					)
				}
			</MUIDrawerStyled>
		</>
	);
};

export default Drawer;
