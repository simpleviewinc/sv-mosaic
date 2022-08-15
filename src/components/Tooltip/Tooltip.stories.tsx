import * as React from "react";
import { ReactElement } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Components
import Tooltip from "./Tooltip";

export default {
	title: "Components/Tooltip",
	component: Tooltip,
};

export const AdvancedTooltip = (): ReactElement => (
	<Tooltip type='advanced' text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque"}>
		<InfoOutlinedIcon style={{margin: "140px 30px"}} />
	</Tooltip>
);

export const IconTooltip = (): ReactElement => (
	<Tooltip text={"More"}>
		<MoreVertIcon style={{marginLeft: "10px"}} />
	</Tooltip>
);