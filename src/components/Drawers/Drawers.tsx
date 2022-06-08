import * as React from "react";
// import MuiDrawer from "@mui/material/Drawer";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Drawer from "../Drawer";
import { DrawersProps } from "./DrawersTypes";

const Drawers = (props: DrawersProps): JSX.Element => {
	const { drawers } = props;

	const [state, setState] = useState({drawers: []})

	useEffect(() => {
		console.log("entering", drawers, state.drawers);
		setState({...state, drawers: [...drawers]});
	}, [drawers]);

	// if (drawers.length === 0) {
	// 	return null;
	// }
	
	// const onTransitionEnd = () => {
	// 	setState({drawers: drawers});
	// }

	const onExited = () => {
		console.log("exited", drawers, state.drawers);
		setState({
			...state,
			drawers: [...drawers],
		})
	};

	return (
		<>
			{state.drawers?.map((val, i) => {
				const open = true;
				const anchorStyle = i >= state.drawers.length - 1 ? "right" : "left";
				const display = i < state.drawers.length - 2 ? false : true;

				return (
					<Drawer
						key={i}
						idx={i}
						open={open}
						anchorstyle={anchorStyle}
						display={display}
						onClose={onExited}
						// onTransitionEnd={onTransitionEnd}
					>
						{val}
					</Drawer>
				);
			})}
		</>
	);
}

export default memo(Drawers);
