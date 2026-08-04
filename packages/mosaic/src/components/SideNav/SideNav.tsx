import type { ReactElement, MouseEvent } from "react";

import React, { useCallback, memo } from "react";

import type { SideNavProps, Item } from "./SideNavTypes";

import { StyledSideNav } from "./SideNav.styled";
import { SideNavGroup } from "./SideNavGroup";

const SideNav = (props: SideNavProps): ReactElement => {
	const { items, active, onNav, className, collapse } = props;

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = useCallback((args: { item: Item; event?: MouseEvent }) => {
		const { item, event } = args;
		const hasModifier = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;

		if (hasModifier) {
			return;
		}

		const itemOnNav = item.onNav !== undefined ? item.onNav : onNav;

		if (itemOnNav !== false) {
			event.preventDefault();
		}

		if (typeof itemOnNav === "function") {
			itemOnNav({ item, event });
		}
	}, [onNav]);

	return (
		<StyledSideNav className={className} $collapse={collapse}>
			{items.map((itemGroup, groupIndex) => {
				return (
					<SideNavGroup
						key={groupIndex}
						items={itemGroup}
						onLinkClicked={onLinkClicked}
						active={active}
						collapse={collapse}
					/>
				);
			})}
		</StyledSideNav>
	);
};

export default memo(SideNav);
