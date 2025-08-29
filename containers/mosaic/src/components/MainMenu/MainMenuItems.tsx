import React from "react";

import type { MainMenuItemDef, MainMenuItemRootDef } from "./MainMenuTypes";
import { MainMenuItem } from "./MainMenuItem";
import { MainMenuGroup } from "./MainMenuGroup";
import { StyledList } from "./MainMenu.styled";

interface MainMenuItems {
	items: (MainMenuItemRootDef | MainMenuItemDef)[];
	depth?: number;
}

export function MainMenuItems({
	items,
	depth = 0,
}: MainMenuItems) {
	return (
		<StyledList>
			{items.map(item => item.type === "group" ? (
				<MainMenuGroup
					key={item.name}
					depth={depth}
					{...item}
				/>
			) : (
				<MainMenuItem
					key={item.name}
					depth={depth}
					{...item}
				/>
			))}
		</StyledList>
	);
}
