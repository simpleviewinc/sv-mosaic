import * as React from "react";
import { ReactElement, useState, useEffect, memo } from "react";
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
import { Link } from "./SideNavTypes";

const SideNav = (props: SideNavProps): ReactElement => {
	const { links, defaultLink } = props;
	const [selectedLink, setSelectedLink] = useState("");

	/**
	 * Set the clicked link as selected and executes the
	 * external callback that is sent from the parent.
	 * @param link The clicked link
	 */
	const onLinkClicked = (link: Link) => {
		setSelectedLink(link.label);
		link.onClick();
	};

	const findLinkselected = () => {
		let linkSelected: Link
		links.forEach(link => link.forEach(l => l.label === defaultLink ? linkSelected = l : null))
		if (!linkSelected) {
			throw new Error("Default link is not in the links array.");
		} else {
			return linkSelected
		}
	}

	useEffect(() => {
		if  (links) {
			if (defaultLink) {
				setSelectedLink(defaultLink)
				onLinkClicked(findLinkselected())
			} else {
				setSelectedLink(links[0][0].label)
				onLinkClicked(links[0][0])
			}
		}
	}, [defaultLink])

	return (
		<SideNavStyle>
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
		</SideNavStyle>
	);
};

export default memo(SideNav);
