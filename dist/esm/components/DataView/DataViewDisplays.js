import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { default as List } from "./DataViewDisplayList";
import { default as Grid } from "./DataViewDisplayGrid";
export const DataViewDisplayList = {
    name: "list",
    label: "List",
    component: List,
    mIcon: FormatListBulletedIcon
};
export const DataViewDisplayGrid = {
    name: "grid",
    label: "Grid",
    component: Grid,
    mIcon: GridOnIcon
};
