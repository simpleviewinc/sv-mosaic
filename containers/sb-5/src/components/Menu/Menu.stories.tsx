import * as React from "react";
import { ReactElement } from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { default as Button, ButtonProps } from "@root/components/Button";
import { toggleMap, toggleOptions } from "@root/utils/storyUtils";

export default {
	title : "Components/Menu",
	decorators: [withKnobs],
};

const MENU_ITEMS = [
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

export const example = (): ReactElement => {
	const showItems = {
		"Item 1": select("Show Item 1", toggleOptions, "Undefined"),
		"Item 2": select("Show Item 2", toggleOptions, "Undefined"),
		"Item 3": select("Show Item 3", toggleOptions, "Undefined"),
		"Item 4": select("Show Item 4", toggleOptions, "Undefined"),
		"Item 5": select("Show Item 5", toggleOptions, "Undefined"),
		"Item 6": select("Show Item 6", toggleOptions, "Undefined"),
	};

	const menuItems: ButtonProps["menuItems"] = MENU_ITEMS.map((val) => {
		return {
			...val,
			show: toggleMap[showItems[val.label]],
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
