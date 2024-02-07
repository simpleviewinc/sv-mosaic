import React from "react";
import jsvalidator from "jsvalidator";

import MenuBase from "../MenuBase";
import MenuItem, { MenuItemProps } from "../MenuItem";

export interface MenuProps {
	items?: MenuItemProps[];
	anchorEl?: HTMLElement;
	open: boolean;
	onClose: () => void;
}

function Menu(props: MenuProps) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "items",
				type : "array",
				schema : {
					type : "object",
					schema : [
						{
							name : "label",
							type : "string",
						},
						{
							name : "color",
							type : "string",
							enum : ["blue", "red", "black"],
						},
						{
							name : "mIcon",
							type : "object",
						},
						{
							name : "disabled",
							type : "boolean",
						},
						{
							name : "selected",
							type : "boolean",
						},
						{
							name : "onClick",
							type : "function",
						},
						{
							name : "attrs",
							type : "object",
						},
					],
					allowExtraKeys : false,
				},
			},
			{
				name : "anchorEl",
				type : "object",
			},
			{
				name : "open",
				type : "boolean",
				required : true,
			},
			{
				name : "onClose",
				type : "function",
				required : true,
			},
		],
		allowExtraKeys : false,
		throwOnInvalid : true,
	});

	const menuItems = props.items.map((item, i) => {
		const onClick = function() {
			item.onClick();
			props.onClose();
		};

		return (
			<MenuItem
				key={i}
				{...item}
				onClick={onClick}
			/>
		);
	});

	return (
		<MenuBase
			anchorEl={props.anchorEl}
			open={props.open}
			onClose={props.onClose}
		>
			{menuItems}
		</MenuBase>
	);
}

export default Menu;
