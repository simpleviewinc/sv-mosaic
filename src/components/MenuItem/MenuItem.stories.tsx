import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import MenuItem from "./MenuItem";

export default {
	title : "Components/MenuItem",
	component: MenuItem
}

const onClick = () => undefined;

const Template = (args) => <MenuItem {...args} mIcon={args.withIcon && args.mIcon} />

export const Playground = Template.bind({});
Playground.args = {
	label: "Test",
	color: "red",
	mIcon: DeleteIcon,
	withIcon: false,
	onClick
}

// export const text = (): ReactElement => {
// 	return (
// 		<MenuItem
// 			label="Test"
// 			onClick={onClick}
// 		/>
// 	)
// }

// export const withIcon = (): ReactElement => {
// 	return (
// 		<MenuItem
// 			label="Test"
// 			color="red"
// 			mIcon={DeleteIcon}
// 			onClick={onClick}
// 		/>
// 	)
// }