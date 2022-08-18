"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var SideNav_styled_1 = require("./SideNav.styled");
var SideNav = function (props) {
    var links = props.links;
    var _a = (0, react_1.useState)(links ? links[0][0].label : ""), selectedLink = _a[0], setSelectedLink = _a[1];
    /**
     * Set the clicked link as selected and executes the
     * external callback that is sent from the parent.
     * @param link The clicked link
     */
    var onLinkClicked = function (link) {
        setSelectedLink(link.label);
        link.onClick();
    };
    return (React.createElement(SideNav_styled_1.SideNavStyle, null,
        React.createElement(SideNav_styled_1.SidebarWrap, null, Object.keys(links).map(function (key) {
            return (React.createElement(SideNav_styled_1.SectionWrapper, { "data-testid": "section-wrapper", key: key }, links[key].map(function (link, idx) {
                var _a, _b;
                var LinkIcon = link.icon;
                var ActionIcon = (_a = link === null || link === void 0 ? void 0 : link.action) === null || _a === void 0 ? void 0 : _a.icon;
                return (React.createElement(SideNav_styled_1.LinkWrapper, { idx: link.label, selectedLink: selectedLink, onClick: function () { return onLinkClicked(link); }, key: "".concat(link.label, "-").concat(idx) },
                    link.icon && React.createElement(LinkIcon, null),
                    React.createElement(SideNav_styled_1.StyledLink, null, link.label),
                    (link === null || link === void 0 ? void 0 : link.badge) && (React.createElement(SideNav_styled_1.BadgeWrapper, null,
                        React.createElement(SideNav_styled_1.Badge, null, link.badge))),
                    ((_b = link === null || link === void 0 ? void 0 : link.action) === null || _b === void 0 ? void 0 : _b.icon) && (React.createElement(ActionIcon, { onClick: link.action.onClick }))));
            })));
        }))));
};
exports["default"] = SideNav;
