// import * as React from "react";
// import { ReactElement } from "react";
// import { withKnobs, text } from "@storybook/addon-knobs";
// import { Meta } from "@storybook/addon-docs/blocks";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// // Components
// import Tooltip from "./Tooltip";

// export default {
// 	title: "Components/Tooltip",
// 	decorators: [withKnobs],
// } as Meta;

// export const AdvancedTooltip = (): ReactElement => (
// 	<Tooltip type='advanced' text={text("Tooltip text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque")}>
// 		<InfoOutlinedIcon style={{margin: "140px 30px"}} />
// 	</Tooltip>
// );

// export const IconTooltip = (): ReactElement => (
// 	<Tooltip text={text("Tooltip text", "More")}>
// 		<MoreVertIcon style={{marginLeft: "10px"}} />
// 	</Tooltip>
// );