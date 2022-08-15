import * as React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { default as Button, ButtonProps } from "../Button";

export default {
	title : "Components/Menu"
}

const MENU_ITEMS = [
	{
		label : "Item 1"
	},
	{
		label : "Item 2"
	},
	{
		label : "Item 3"
	},
	{
		label : "Item 4"
	},
	{
		label : "Item 5"
	},
	{
		label : "Item 6"
	}
]

const menuItems: ButtonProps["menuItems"] = MENU_ITEMS.map((val, i) => {
	return {
		...val,
		onClick : function() {
			alert(`Clicked ${val.label}`)
		}
	}
});

const Template = (args) => (
	<Button
		label="Open"
		color="blue"
		variant="contained"
		menuItems={args.menuItems}
	/>
);

export const Example = Template.bind({});
Example.args = {
	menuItems
}

const menuItemsWithIcons: ButtonProps["menuItems"] = [
	{
		label : "Item A",
		mIcon : CreateIcon,
		onClick : function() {
			alert("Item A");
		}
	},
	{
		label : "Item B",
		color : "blue",
		mIcon : CloudDownloadIcon,
		onClick : function() {
			alert("Item B");
		}
	},
	{
		label : "Item C",
		color : "red",
		mIcon : DeleteIcon,
		onClick : function() {
			alert("Item C");
		}
	}
];

export const WithIcons = Template.bind({});
WithIcons.args = {
	menuItems: menuItemsWithIcons
}
