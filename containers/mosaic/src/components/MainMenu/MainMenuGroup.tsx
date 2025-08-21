import React from "react";
import type { MainMenuItemDef } from "./MainMenuTypes";
import { MainMenuItems } from "./MainMenuItems";
import { StyledGroupHeader, StyledIcon, StyledLabel } from "./MainMenu.styled";
import { useMainMenu } from "./MainMenuContext";

interface MainMenuGroupProps extends MainMenuItemDef {
	depth?: number;
}

export function MainMenuGroup({
	label,
	items,
	mIcon: Icon = null,
	depth,
}: MainMenuGroupProps) {
	const { collapsed } = useMainMenu();

	return (
		<>
			<StyledGroupHeader $collapsed={collapsed}>
				{Icon && (
					<StyledIcon>
						<Icon />
					</StyledIcon>
				)}
				<StyledLabel $invisible={!depth && collapsed}>
					{label}
				</StyledLabel>
			</StyledGroupHeader>
			<MainMenuItems
				items={items}
				depth={depth}
			/>
		</>
	);
}
