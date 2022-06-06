import * as React from "react";
import { ReactElement, useState } from "react";
import { NavigationProps } from ".";
import {
	LinkWrapper,
	SideNav,
	SidebarWrap,
	StyledLink,
	SectionWrapper,
	Badge,
	BadgeWrapper,
} from "./Navigation.styled";
import { Link } from "./NavigationTypes";

const Navigation = (props: NavigationProps): ReactElement => {
	const { links } = props;
	const [selectedLink, setSelectedLink] = useState(links ? links[0][0].label : "");

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = (link: Link) => {
		setSelectedLink(link.label);
		link.onClick();
	};

	return (
		<SideNav>
			<SidebarWrap>
				{Object.keys(links).map((key) => {
					return (
						<SectionWrapper data-testid="section-wrapper" key={key}>
							{links[key].map((link, idx) => {
								const LinkIcon = link.icon;
								const ActionIcon = link?.action?.icon;
								return (
									<LinkWrapper
										idx={link.label}
										selectedLink={selectedLink}
										onClick={() => onLinkClicked(link)}
										key={`${link.label}-${idx}`}
									>
										{link.icon && <LinkIcon />}
										<StyledLink>{link.label}</StyledLink>
										{link?.badge && (
											<BadgeWrapper>
												<Badge>{link.badge}</Badge>
											</BadgeWrapper>
										)}
										{link?.action?.icon && (
											<ActionIcon onClick={link.action.onClick} />
										)}
									</LinkWrapper>
								);
							})}
						</SectionWrapper>
					);
				})}
			</SidebarWrap>
		</SideNav>
	);
};

export default Navigation;
