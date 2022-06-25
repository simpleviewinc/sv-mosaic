import * as React from "react";
import { memo, useEffect, useState } from "react";
import Drawer from "../Drawer";
import { DrawersProps } from "./DrawersTypes";

const Drawers = (props: DrawersProps): JSX.Element => {
	const { drawers } = props;

	const [stateDrawers, setStateDrawers] = useState([]);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (ready === true || drawers.length > stateDrawers?.length) {
			setStateDrawers([...drawers]);
			setReady(false);
		}
	}, [ready, drawers]);

	return (
		<>
			{stateDrawers?.map((val, i) => {
				const open = ((stateDrawers?.length > drawers.length) && (i >= stateDrawers.length - 1)) ? false : true;
				const anchorStyle = i >= stateDrawers.length - 1 ? "right" : "left";
				const display = i < stateDrawers.length - 2 ? false : true;

				return (
					<Drawer
						key={i}
						idx={i}
						open={open}
						anchorstyle={anchorStyle}
						display={display}
						exitCB={() => setReady(true)}
					>
						{val}
					</Drawer>
				);
			})}
		</>
	);
}

export default memo(Drawers);
