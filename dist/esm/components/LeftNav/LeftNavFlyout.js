import * as React from "react";
import { useState, useContext, useMemo } from "react";
import styled from "styled-components";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import { throttle } from "lodash";
import { LeftNavContext } from "./LeftNavTypes";
import LeftNavTitle from "./LeftNavTitle";
import LeftNavItems from "./LeftNavItems";
import LeftNavScroller from "./LeftNavScroller";
const StyledDiv = styled.div `
	&.paper {
		background-color: #404045;
		max-width: 250px;
		max-height: 80vh;
		display: flex;
	}
`;
// set aside the popperProps so they do not mutate between renders, cause the Popper system to go haywire and move the component around strangely
// check this https://popper.js.org/docs/v2/ to know more about the PopperProps
const popperProps = {
    open: true,
    placement: "right",
    modifiers: [
        // this prevents popper from using translated3d which causes blurry
        // flyouts in Chrome, instead it will just use top/left positioning
        {
            name: "preventOverflow",
            enabled: true,
            options: {
                rootBoundary: "viewport"
            }
        },
        {
            name: "computeStyles",
            options: {
                gpuAcceleration: false,
            },
        },
    ],
};
function LeftNavFlyout(props) {
    const [state, setState] = useState({
        openName: undefined
    });
    const leftNavContext = useContext(LeftNavContext);
    const onOpen = openName => {
        setState({
            ...state,
            openName
        });
    };
    const onScroll = throttle(function (e) {
        // this scroll listener is being triggered when a scroll occurs within a child, which we don't want
        // so we only trigger if the scroll event happened on this specific flyout
        if (e.target !== e.currentTarget) {
            return;
        }
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
    const style = useMemo(() => ({
        zIndex: leftNavContext.zIndex + 1
    }), [leftNavContext.zIndex]);
    return (React.createElement(Popper, { ...popperProps, anchorEl: props.anchorEl, style: style },
        React.createElement(Paper, { elevation: 3, component: StyledDiv, className: "paper" },
            React.createElement(LeftNavScroller, { attrs: scrollerAttrs },
                React.createElement(LeftNavTitle, { label: props.parent.label }),
                React.createElement(LeftNavItems, { items: props.parent.items, openName: state.openName, onOpen: onOpen })))));
}
export default LeftNavFlyout;
