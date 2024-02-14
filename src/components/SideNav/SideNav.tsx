import * as React from "react";
import { ReactElement, memo, MouseEvent } from "react";
import { SideNavProps } from ".";
import {
	LinkWrapper,
	StyledSideNav,
	SidebarWrap,
	StyledLink,
	LinksWrapper,
	Badge,
	BadgeWrapper,
} from "./SideNav.styled";
import { Item } from "./SideNavTypes";

const SideNav = (props: SideNavProps): ReactElement => {
	const { items, active, onNav, className, collapse } = props;

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = (args: { item: Item; event?: MouseEvent }) => {
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
	};

	return (
		<StyledSideNav className={className} $collapse={collapse}>
			<SidebarWrap>
				{Object.keys(items)?.map((key) => {
					return (
						<LinksWrapper data-testid="section-wrapper" key={key} $collapse={collapse}>
							{items[key]?.map((item, idx) => {
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
										{item.icon && <LinkIcon />}
										<StyledLink>{item.label}</StyledLink>
										{item?.badge && (
											<BadgeWrapper>
												<Badge>{item.badge}</Badge>
											</BadgeWrapper>
										)}
										{item?.action?.icon && (
											<ActionIcon onClick={item.action.onClick} />
										)}
									</LinkWrapper>
								);
							})}
						</LinksWrapper>
					);
				})}
			</SidebarWrap>
		</StyledSideNav>
	);
};

export default memo(SideNav);
