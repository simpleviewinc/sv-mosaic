import React from "react";

import MenuBase from "../MenuBase";
import MenuItem, { MenuItemProps } from "../MenuItem";

export interface MenuProps {
	items?: MenuItemProps[];
	anchorEl?: HTMLElement;
	open: boolean;
	onClose: () => void;
}

function Menu(props: MenuProps) {
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
