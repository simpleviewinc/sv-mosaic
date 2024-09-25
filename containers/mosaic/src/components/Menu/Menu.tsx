import React, { useMemo } from "react";

import type { MenuProps } from "./MenuTypes";
import type { MenuItemProps } from "../MenuItem";

import MenuBase from "../MenuBase";
import MenuItem from "../MenuItem";

function Menu({
	onClose,
	open,
	anchorEl,
	items,
	onChange,
	placeholder,
	value,
}: MenuProps) {
	const menuItems = useMemo(() => {
		const itemsWithPlaceholder: MenuItemProps[] = [
			...items,
			...(placeholder ? [{
				label: placeholder,
				value: undefined,
			}] : []),
		];

		const menuItems = itemsWithPlaceholder.map(({ onClick, ...item }, i) => {
			const onMenuItemClick = function() {
				onClick && onClick();
				onChange && onChange(item.value);
				onClose();
			};

			return (
				<MenuItem
					key={i}
					{...item}
					selected={onChange && value === item.value}
					onClick={onMenuItemClick}
				/>
			);
		});

		return menuItems;
	}, [items, onChange, onClose, placeholder, value]);

	return (
		<MenuBase
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
		>
			{menuItems}
		</MenuBase>
	);
}

export default Menu;
