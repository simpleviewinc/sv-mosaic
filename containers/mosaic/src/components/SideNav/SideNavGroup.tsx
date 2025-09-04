import type { ReactElement } from "react";

import React from "react";

import type { SideNavGroupProps } from "./SideNavTypes";

import { StyledSidenavGroup } from "./SideNav.styled";
import { useToggle } from "@root/utils/toggle";
import { SideNavItem } from "./SideNavItem";

export const SideNavGroup = ({ items, collapse, onLinkClicked, active }: SideNavGroupProps): ReactElement => {
	const shownItems = useToggle(items, "show", true);

	if (!shownItems.length) {
		return null;
	}

	return (
		<StyledSidenavGroup data-testid="section-wrapper" $collapse={collapse}>
			{shownItems.map((item, idx) => (
				<SideNavItem
					{...item}
					key={`${item.label}-${idx}`}
					isActive={active === item.name}
					onLinkClicked={onLinkClicked}
					collapse={collapse}
				/>
			))}
		</StyledSidenavGroup>
	);
};
