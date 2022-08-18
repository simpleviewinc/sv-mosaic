import * as React from "react";
import { useState, useMemo, useContext, Fragment } from "react";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import LeftNavDrawer from "./LeftNavDrawer";
import LeftNavRoot from "./LeftNavRoot";
import LeftNavItems from "./LeftNavItems";
import LeftNavItemMobile from "./LeftNavItemMobile";
import LeftNavScroller from "./LeftNavScroller";
import LeftNavTitle from "./LeftNavTitle";
import { LeftNavContext } from "./LeftNavTypes";
import { BodyText } from "../Typography";
import theme from "../../theme";
import TridentIcon from "../../theme/TridentIcon";
const RootDiv = styled(LeftNavRoot) `
	width: 80vw;
	max-width: 250px;

	& > .header {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${theme.colors.gray600};
	}

	& > .header > .closeIcon {
		color: ${theme.colors.gray400};
		cursor: pointer;
	}

	& > .backButton {
		padding: 8px 16px;
		color: ${theme.colors.gray400};
		line-height: 24px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${theme.colors.gray700};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;
function LeftNavMobile(props) {
    const mobileRoot = useMemo(() => ({
        name: "root",
        label: "Main Menu",
        items: props.items
    }), [props.items]);
    const defaultState = {
        history: [mobileRoot]
    };
    const [state, setState] = useState(defaultState);
    const leftNavContext = useContext(LeftNavContext);
    const current = state.history[state.history.length - 1];
    const previous = state.history.length > 1 ? state.history[state.history.length - 2] : undefined;
    const onClose = function () {
        setState(defaultState);
        props.onClose();
    };
    const onNav = function (args) {
        setState(defaultState);
        leftNavContext.onNav(args);
    };
    const onOpen = function (name) {
        const allItems = [
            ...current.items,
            ...current.items.filter(val => val.type === "group").map(val => val.items).flat()
        ];
        const item = allItems.find(val => val.name === name);
        setState({
            ...state,
            history: [...state.history, item]
        });
    };
    const onBack = function () {
        const newHistory = state.history.slice(0, -1);
        setState({
            ...state,
            history: newHistory
        });
    };
    const newContext = {
        ...leftNavContext,
        onNav,
        ItemComponent: LeftNavItemMobile
    };
    return (React.createElement(LeftNavDrawer, { open: props.open, onClose: onClose },
        React.createElement(LeftNavContext.Provider, { value: newContext },
            React.createElement(RootDiv, null,
                React.createElement("div", { className: "header" },
                    React.createElement(TridentIcon, null),
                    React.createElement(CloseIcon, { onClick: onClose, className: "closeIcon" })),
                previous !== undefined &&
                    React.createElement(Fragment, null,
                        React.createElement("div", { className: "backButton", onClick: onBack },
                            React.createElement(KeyboardBackspaceIcon, null),
                            React.createElement(BodyText, { className: "buttonLabel" }, previous.label)),
                        React.createElement(LeftNavTitle, { label: current.label })),
                React.createElement(LeftNavScroller, null,
                    React.createElement(LeftNavItems, { items: current.items, onOpen: onOpen }))))));
}
export default LeftNavMobile;
