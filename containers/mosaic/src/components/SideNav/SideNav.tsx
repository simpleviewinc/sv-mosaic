import type { ReactElement, MouseEvent } from "react";

import React, { useCallback, memo } from "react";

import type { SideNavProps, Item, SideNavGroupProps } from "./SideNavTypes";

import { LinkWrapper, StyledSideNav, StyledLink, LinksWrapper } from "./SideNav.styled";
import { useToggle } from "@root/utils/toggle";
import Badge from "../Badge";
import { EMPTY_OBJECT } from "@root/constants/stable";

const SideNavGroup = ({ items, collapse, onLinkClicked, active }: SideNavGroupProps): ReactElement => {
	const shownItems = useToggle(items, "show", true);

	if (!shownItems.length) {
		return null;
	}

	return (
		<LinksWrapper data-testid="section-wrapper" $collapse={collapse}>
			{shownItems.map(({
				attrs = EMPTY_OBJECT,
				...item
			}, idx) => {
				const LinkIcon = item.icon;
				const ActionIcon = item?.action?.icon;
				const href = "href" in attrs && attrs.href !== undefined ? attrs.href : undefined;

				return (
					<LinkWrapper
						$isActive={item.name === active}
						onClick={(event) => onLinkClicked({ item, event })}
						$collapse={collapse}
						key={`${item.label}-${idx}`}
						className={item.name === active && "highlight"}
						{...attrs}
						{...(href !== undefined ? {
							href,
							as: "a",
						} : {})}
					>
						{item.icon && <LinkIcon key="link-icon" />}
						<StyledLink key="link-text">{item.label}</StyledLink>
						{item?.badge && (
							<Badge variant="dark">{item.badge}</Badge>
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
