import * as React from "react";
import { useState } from "react";
import { LinkWrapper, SideNavStyle, SidebarWrap, StyledLink, SectionWrapper, Badge, BadgeWrapper, } from "./SideNav.styled";
const SideNav = (props) => {
    const { links } = props;
    const [selectedLink, setSelectedLink] = useState(links ? links[0][0].label : "");
    /**
     * Set the clicked link as selected and executes the
     * external callback that is sent from the parent.
     * @param link The clicked link
     */
    const onLinkClicked = (link) => {
        setSelectedLink(link.label);
        link.onClick();
    };
    return (React.createElement(SideNavStyle, null,
        React.createElement(SidebarWrap, null, Object.keys(links).map((key) => {
            return (React.createElement(SectionWrapper, { "data-testid": "section-wrapper", key: key }, links[key].map((link, idx) => {
                var _a, _b;
                const LinkIcon = link.icon;
                const ActionIcon = (_a = link === null || link === void 0 ? void 0 : link.action) === null || _a === void 0 ? void 0 : _a.icon;
                return (React.createElement(LinkWrapper, { idx: link.label, selectedLink: selectedLink, onClick: () => onLinkClicked(link), key: `${link.label}-${idx}` },
                    link.icon && React.createElement(LinkIcon, null),
                    React.createElement(StyledLink, null, link.label),
                    (link === null || link === void 0 ? void 0 : link.badge) && (React.createElement(BadgeWrapper, null,
                        React.createElement(Badge, null, link.badge))),
                    ((_b = link === null || link === void 0 ? void 0 : link.action) === null || _b === void 0 ? void 0 : _b.icon) && (React.createElement(ActionIcon, { onClick: link.action.onClick }))));
            })));
        }))));
};
export default SideNav;
