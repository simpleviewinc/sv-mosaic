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
	const { items, active, onNav } = props;

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = (args: { item: Item, event?: MouseEvent }) => {
		const { item, event } = args;
		if (typeof item?.onNav === "function") {
			// if the nav item has it's own onNav function
			item.onNav({ item, event });
		} else {
			// else if onNav exists, we use the main onNav to navigate
			onNav && onNav({ item, event });
		}
	};

	return (
		<SideNavStyle>
			<SidebarWrap>
				{Object.keys(items)?.map((key) => {
					return (
						<SectionWrapper data-testid="section-wrapper" key={key}>
							{items[key]?.map((item, idx) => {
								const LinkIcon = item.icon;
								const ActionIcon = item?.action?.icon;

								return (
									<LinkWrapper
										{...item.attrs}
										idx={item.name}
										selectedLink={active}
										onClick={(event) => onLinkClicked({ item, event })}
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
