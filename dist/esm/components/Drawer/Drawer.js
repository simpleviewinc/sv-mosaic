import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MUIDrawer from "@mui/material/Drawer";
import theme from "../../theme";
const DrawerContent = styled.div `
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`;
const MUIDrawerStyled = styled(MUIDrawer) `
	z-index: 1100;
	${pr => pr.anchorstyle &&
    `.MuiDrawer-paper {
${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "right") &&
        `
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`}

${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && pr.display) &&
        `
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-25vw) !important;
`}

${(pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && !pr.display) &&
        `
	background: white;
	transition: transform 255ms ease-in-out !important;
	transform: translateX(-100vw) !important;
`}
		}`}
`;
// interface DrawerProps {
// 	open: boolean;
// 	onClose?: () => unknown;
// 	children: JSX.Element;
// 	key?: unknown;
// 	anchor?: "left" | "right";
// 	sx?: SxProps;
// }
const Drawer = (props) => {
    const { open, onClose, children, idx, anchor = "right", display, anchorstyle, exitCB } = props;
    const prevStyleRef = useRef();
    useEffect(() => {
        prevStyleRef.current = anchorstyle;
    }, [anchorstyle]);
    const [state, setState] = useState({
        open: false
    });
    useEffect(() => {
        if (open === true) {
            setState({
                ...state,
                open: true
            });
        }
    }, [open]);
    const onExited = function () {
        setState({
            ...state,
            open: false,
        });
        if (exitCB)
            exitCB();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MUIDrawerStyled, { key: idx, anchorstyle: { currentStyle: anchorstyle, previousStyle: prevStyleRef.current }, anchor: anchor, display: display, open: open, onClose: onClose, SlideProps: {
                onExited,
            } }, state.open &&
            React.createElement(DrawerContent, null, children))));
};
export default Drawer;
