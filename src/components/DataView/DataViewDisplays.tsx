import GridOnIcon from "@material-ui/icons/GridOn";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import { DataViewDisplay } from "./DataViewTypes";
import { default as List } from "./DataViewDisplayList";
import { default as Grid } from "./DataViewDisplayGrid";

export const DataViewDisplayList: DataViewDisplay = {
	name : "list",
	label : "List",
	component : List,
	mIcon : FormatListBulletedIcon
}

export const DataViewDisplayGrid: DataViewDisplay = {
	name : "grid",
	label : "Grid",
	component : Grid,
	mIcon : GridOnIcon
}