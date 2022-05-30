import MuiDrawer from "@mui/material/Drawer";
import * as React from "react";
import { memo } from "react";
import { DrawerDef } from "./DrawersTypes";
import { drawerActions } from "./utils/drawerActions";

function Drawers({
	drawers,
	dispatch,
	onCloseLastDrawer
}: {
  drawers: DrawerDef[];
  dispatch: any;
  onCloseLastDrawer: any;
}) {
	if (drawers.length === 0) {
		return null;
	}

	const onClose = async (previousData: { childData: any; callbacks: any }) => {
		await dispatch(
			drawerActions.navigateBack(
				previousData?.childData ? { childData: previousData?.childData } : {}
			)
		);
		if (onCloseLastDrawer && drawers.length === 0) {
			await onCloseLastDrawer({ childData: previousData?.childData });
		}
	};

	return (
		<>
			{drawers.map((val: DrawerDef, i: number) => {
				const open = true;
				const anchor = i >= drawers.length - 1 ? "right" : "left";
				const myOnClose = anchor === "right" ? val.onClose : undefined;
				const sx = i < drawers.length - 2 ? { display: "none" } : undefined;

				const Component = val.component;

				return (
					<MuiDrawer
						key={i}
						sx={sx}
						open={open}
						anchor={anchor}
						onClose={myOnClose}
					>
						<Component
							name={val.name}
							{...val.args}
							onClose={onClose}
							dispatch={dispatch}
						/>
					</MuiDrawer>
				);
			})}
		</>
	);
}

export default memo(Drawers);
