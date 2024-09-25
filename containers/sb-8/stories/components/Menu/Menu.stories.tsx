import React, { ReactElement, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { default as Button, ButtonProps } from "@root/components/Button";
import Typography from "@root/components/Typography";

export default {
	title : "Components/Menu",
	parameters: {
		layout: "centered",
	},
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

export const Playground = ({ menuItemCount, showIcons, iconColor }: typeof Playground.args): ReactElement => {
	const menuItems: ButtonProps["menuItems"] = menuItemsLibrary.map((val, index) => {
		return {
			...val,
			show: menuItemCount >= index + 1,
			mIcon: showIcons ? CreateIcon : undefined,
			color: iconColor,
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
	showIcons: false,
	iconColor: "black",
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
	showIcons: {
		name: "Show Icons",
	},
	iconColor: {
		name: "Icon Color",
		control: { type: "select" },
		options: ["black", "blue", "red", "yellow", "teal", "gray", "purple"],
	}
};

export const WithIcons = (): ReactElement => {
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

export const Selectable = (): ReactElement => {
	const [value, setValue] = useState("");

	const menuItems: ButtonProps["menuItems"] = [
		{
			label : "Item A",
			value: "item1",
		},
		{
			label : "Item B",
			color : "blue",
			value: "item2",
		},
		{
			label : "Item C",
			color : "red",
			value: "item3",
		},
	];

	return (
		<div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 8 }}>
			<Typography variant="title">Current value: {value || "Not set"}</Typography>
			<div style={{ display: "flex", gap: 8 }}>
				<Button
					label="Set Value"
					color="blue"
					variant="contained"
					menuItems={menuItems}
					menuOnChange={setValue}
					menuValue={value}
				/>
				<Button
					label="CLear"
					color="red"
					variant="contained"
					onClick={() => setValue("")}
				/>
			</div>
		</div>
	);
};
