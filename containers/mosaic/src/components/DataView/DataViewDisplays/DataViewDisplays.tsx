import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import type { DataViewDisplay } from "./DataViewDisplaysTypes";

import { default as List } from "../DataViewDisplayList";
import { default as Grid } from "../DataViewDisplayGrid";

export const DataViewDisplayList: DataViewDisplay = {
	name : "list",
	label : "List",
	component : List,
	mIcon : FormatListBulletedIcon,
};

export const DataViewDisplayGrid: DataViewDisplay = {
	name : "grid",
	label : "Grid",
	component : Grid,
	mIcon : GridOnIcon,
};
