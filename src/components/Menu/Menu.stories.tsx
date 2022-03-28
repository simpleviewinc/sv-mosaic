import * as React from "react";
import { ReactElement } from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import { default as Button, ButtonProps } from "../Button";

export default {
	title : "Components|Menu"
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

export const example = (): ReactElement => {
	const menuItems: ButtonProps["menuItems"] = MENU_ITEMS.map((val, i) => {
		return {
			...val,
			onClick : function() {
				alert(`Clicked ${val.label}`)
			}
		}
	});

	return (
		<Button
			label="Open"
			color="blue"
			variant="contained"
			menuItems={menuItems}
		/>
	)
}

export const withIcons = (): ReactElement => {
	const menuItems: ButtonProps["menuItems"] = [
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
	]

	return (
		<Button
			label="Open"
			color="blue"
			variant="contained"
			menuItems={menuItems}
		/>
	)
}