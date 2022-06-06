import * as React from "react";
// import MuiDrawer from "@mui/material/Drawer";
import { memo } from "react";
import Drawer from "../Drawer";

const Drawers = ({ drawers }: { drawers: JSX.Element[] }): JSX.Element => {
	if (drawers.length === 0) {
		return null;
	}

	return (
		<>
			{drawers.map((val, i) => {
				const open = true;
				console.log(i, drawers.length);
				const anchorStyle = i >= drawers.length - 1 ? "right" : "left";
				// const display = i < drawers.length - 2 ? false : true;

				return (
					<Drawer
						key={i}
						open={open}
						anchorStyle={anchorStyle}
					>
						{val}
					</Drawer>
				);
			})}
		</>
	);
}

export default memo(Drawers);
