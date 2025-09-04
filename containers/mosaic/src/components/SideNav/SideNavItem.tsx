import type { ReactElement } from "react";

import React from "react";

import type { Item, SideNavGroupProps } from "./SideNavTypes";

import { StyledSidenavItemButton, StyledLink, StyledActionButton, StyledSideNavItem } from "./SideNav.styled";
import Badge from "../Badge";
import { EMPTY_OBJECT } from "@root/constants/stable";

type SideNavItem = Item & Pick<SideNavGroupProps, "onLinkClicked" | "collapse"> & {
	isActive?: boolean;
}

export function SideNavItem(props: SideNavItem): ReactElement {
	const {
		isActive,
		onLinkClicked,
		collapse,
		...item
	} = props;
	const {
		label,
		action,
		attrs = EMPTY_OBJECT,
		badge,
		icon,
	} = item;

	const LinkIcon = icon;
	const ActionIcon = action && action.icon;
	const href = "href" in attrs && attrs.href !== undefined ? attrs.href : undefined;

	return (
		<StyledSideNavItem>
			<StyledSidenavItemButton
				$isActive={isActive}
				onClick={(event) => onLinkClicked({ item, event })}
				$collapse={collapse}
				className={isActive && "highlight"}
				{...attrs}
				{...(href !== undefined ? {
					href,
					as: "a",
				} : {})}
			>
				{icon && <LinkIcon key="link-icon" />}
				<StyledLink key="link-text">{label}</StyledLink>
				{badge && (
					<Badge variant="dark">{badge}</Badge>
				)}
			</StyledSidenavItemButton>
			{action && (
				<StyledActionButton
					variant="text"
					mIcon={ActionIcon}
					onClick={action.onClick}
					size="small"
				/>
			)}
		</StyledSideNavItem>
	);
}
