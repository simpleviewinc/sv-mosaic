import * as React from "react";
import { ReactElement, memo, MouseEvent } from "react";
import { SideNavProps } from ".";
import {
	LinkWrapper,
	SideNavStyle,
	SidebarWrap,
	StyledLink,
	SectionWrapper,
	Badge,
	BadgeWrapper,
} from "./SideNav.styled";
import { Item } from "./SideNavTypes";

const SideNav = (props: SideNavProps): ReactElement => {
	const { items, active } = props;

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = (item: Item, e?: MouseEvent) => {
		item.onNav(item, e);
	};

	return (
		<SideNavStyle>
			<SidebarWrap>
				{Object.keys(items).map((key) => {
					return (
						<SectionWrapper data-testid="section-wrapper" key={key}>
							{items[key].map((item, idx) => {
								const LinkIcon = item.icon;
								const ActionIcon = item?.action?.icon;
								return (
									<LinkWrapper
										idx={item.name}
										selectedLink={active}
										onClick={(e) => onLinkClicked(item, e)}
										key={`${item.label}-${idx}`}
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
						</SectionWrapper>
					);
				})}
			</SidebarWrap>
		</SideNavStyle>
	);
};

export default memo(SideNav);
