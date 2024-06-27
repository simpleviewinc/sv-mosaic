import * as React from "react";
import { ReactElement } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { default as Button, ButtonProps } from "@root/components/Button";

export default {
	title : "Components/Menu",
};

const menuItemsLibrary = [
	{
		label : "Item 1",
	},
	{
		label : "Item 2",
	},
	{
		label : "Item 3",
	},
	{
		label : "Item 4",
	},
	{
		label : "Item 5",
	},
	{
		label : "Item 6",
	},
];

export const Playground = ({ menuItemCount }: typeof Playground.args): ReactElement => {
	const menuItems: ButtonProps["menuItems"] = menuItemsLibrary.map((val, index) => {
		return {
			...val,
			show: menuItemCount >= index + 1,
			onClick : function() {
				alert(`Clicked ${val.label}`);
			},
		};
	});

	return (
		<Button
			label="Open"
			color="blue"
			variant="contained"
			menuItems={menuItems}
		/>
	);
};

Playground.args = {
	menuItemCount: menuItemsLibrary.length,
};

Playground.argTypes = {
	menuItemCount: {
		name: "Number of menu items to show",
		control: {
			type: "range",
			min: 0,
			max: menuItemsLibrary.length,
		},
	},
};

export const withIcons = (): ReactElement => {
	const menuItems: ButtonProps["menuItems"] = [
		{
			label : "Item A",
			mIcon : CreateIcon,
			onClick : function() {
				alert("Item A");
			},
		},
		{
			label : "Item B",
			color : "blue",
			mIcon : CloudDownloadIcon,
			onClick : function() {
				alert("Item B");
			},
		},
		{
			label : "Item C",
			color : "red",
			mIcon : DeleteIcon,
			onClick : function() {
				alert("Item C");
			},
		},
	];

	return (
		<Button
			label="Open"
			color="blue"
			variant="contained"
			menuItems={menuItems}
		/>
	);
};
