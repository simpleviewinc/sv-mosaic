import type { ReactElement, MouseEvent } from "react";

import React, { useCallback, memo } from "react";

import type { SideNavProps, Item, SideNavGroupProps } from "./SideNavTypes";

import { LinkWrapper, StyledSideNav, StyledLink, LinksWrapper, Badge, BadgeWrapper } from "./SideNav.styled";
import { useToggle } from "@root/utils/toggle";

const SideNavGroup = ({ items, collapse, onLinkClicked, active }: SideNavGroupProps): ReactElement => {
	const shownItems = useToggle(items, "show", true);

	if (!shownItems.length) {
		return null;
	}

	return (
		<LinksWrapper data-testid="section-wrapper" $collapse={collapse}>
			{shownItems.map((item, idx) => {
				const LinkIcon = item.icon;
				const ActionIcon = item?.action?.icon;

				return (
					<LinkWrapper
						{...item.attrs}
						$isActive={item.name === active}
						onClick={(event) => onLinkClicked({ item, event })}
						$collapse={collapse}
						key={`${item.label}-${idx}`}
						className={item.name === active && "highlight"}
					>
						{item.icon && <LinkIcon key="link-icon" />}
						<StyledLink key="link-text">{item.label}</StyledLink>
						{item?.badge && (
							<BadgeWrapper key="badge">
								<Badge>{item.badge}</Badge>
							</BadgeWrapper>
						)}
						{item?.action?.icon && (
							<ActionIcon
								key="action-item"
								onClick={item.action.onClick}
							/>
						)}
					</LinkWrapper>
				);
			})}
		</LinksWrapper>
	);
};

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
			<div>
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
			</div>
		</StyledSideNav>
	);
};

export default memo(SideNav);
