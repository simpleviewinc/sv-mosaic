import * as React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { debounce, throttle } from "lodash";
import SettingsIcon from "@mui/icons-material/Settings";
import { LeftNavContext } from "./LeftNavTypes";
import LeftNavItems from "./LeftNavItems";
import LeftNavItemDesktop from "./LeftNavItemDesktop";
import LeftNavScroller from "./LeftNavScroller";
import LeftNavDrawer from "./LeftNavDrawer";
import LeftNavRoot from "./LeftNavRoot";
import theme from "../../theme";
import { useMosaicTranslation } from "../../i18n";
const RootDiv = styled(LeftNavRoot) `
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${theme.colors.gray600};
	}
`;
function LeftNavDesktop(props) {
    const { t } = useMosaicTranslation();
    const [state, setState] = useState({
        openName: undefined
    });
    const leftNavContext = useContext(LeftNavContext);
    const onOpen = (openName) => {
        setState({
            ...state,
            openName
        });
    };
    const onClose = function () {
        setState({
            ...state,
            openName: undefined
        });
        props.onClose();
    };
    const onNav = function (args) {
        // when we nav we want to close any flyouts we have
        setState({
            ...state,
            openName: undefined
        });
        if (args.item.name.startsWith("_internal.")) {
            // if the display switcher was used, we call onVariantChange
            const variant = args.item.name.match(/_internal.(.*)/)[1];
            props.onVariantChange(variant);
        }
        else {
            leftNavContext.onNav(args);
        }
    };
    const showLabel = props.variant === "icons_only" ? false : true;
    const allItems = props.variant === "icons_only" ? props.items.map(val => ({
        ...val,
        type: "item"
    })) : props.items;
    const items = allItems.filter(({ pinned }) => pinned === undefined);
    const bottomItems = allItems.filter(({ pinned }) => pinned === "bottom");
    const activeLabel = function (name) {
        if (name === props.variant) {
            return ` (${t("mosaic:LeftNav.active")})`;
        }
        else {
            return "";
        }
    };
    const settingsItem = {
        name: "_internal",
        label: t("mosaic:LeftNav.nav_display"),
        type: "item",
        mIcon: SettingsIcon,
        items: [
            {
                name: "_internal.full",
                label: `${t("mosaic:LeftNav.full")}${activeLabel("full")}`
            },
            {
                name: "_internal.icons_only",
                label: `${t("mosaic:LeftNav.icons_only")}${activeLabel("icons_only")}`
            },
            {
                name: "_internal.hidden",
                label: `${t("mosaic:LeftNav.hidden")}${activeLabel("hidden")}`
            }
        ]
    };
    bottomItems.push(settingsItem);
    // if the mouse leaves the component and it's children entirely, wait a duration to close
    const onMouseLeave = debounce(function () {
        setState({
            ...state,
            openName: undefined
        });
    }, leftNavContext.leaveTimeout);
    const onMouseEnter = function () {
        onMouseLeave.cancel();
    };
    const onScroll = throttle(function (e) {
        // this scroll listener is being trigger when a flyout scrolls as well, which we don't want
        // so we only trigger if the scroll event happened on this specific element
        if (e.target !== e.currentTarget) {
            return;
        }
        // if the state is already undefined, no reason to re-render
        if (state.openName === undefined) {
            return;
        }
        setState({
            ...state,
            openName: undefined
        });
    }, 100, { leading: true, trailing: false });
    const scrollerAttrs = {
        onScroll
    };
    useEffect(() => {
        // cleanup the timeout that may have been set due to enter/leave mechanics
        return function cleanup() {
            onMouseLeave.cancel();
        };
    }, [onMouseLeave]);
    const newContext = {
        ...leftNavContext,
        onNav,
        ItemComponent: LeftNavItemDesktop
    };
    const navContent = (React.createElement(RootDiv, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement(LeftNavContext.Provider, { value: newContext },
            React.createElement(LeftNavScroller, { className: "top", attrs: scrollerAttrs },
                React.createElement(LeftNavItems, { items: items, showLabel: showLabel, onOpen: onOpen, openName: state.openName })),
            React.createElement("div", { className: "bottom" },
                React.createElement(LeftNavItems, { items: bottomItems, showLabel: showLabel, onOpen: onOpen, openName: state.openName })))));
    const drawerContent = (React.createElement(LeftNavDrawer, { open: props.open, onClose: onClose }, navContent));
    if (["icons_only", "full"].includes(props.variant)) {
        return navContent;
    }
    else {
        return drawerContent;
    }
}
export default LeftNavDesktop;
