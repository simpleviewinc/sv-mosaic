import * as React from "react";
import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";
import theme from "../../theme";
import { BodyText } from "../Typography";
const StyledMenuItem = styled(MUIMenuItem) `
	min-width: 150px;

	&.MuiMenuItem-root {
		min-height: 42px;
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${theme.fontFamily};
	}
`;
const StyledIcon = styled.div `
	display: inline-flex;
`;
const iconTypes = {
    blue: styled(StyledIcon) `
		& svg {
			color: ${theme.colors.blue};
		}
	`,
    red: styled(StyledIcon) `
		& svg {
			color: ${theme.colors.red};
		}
	`
};
export default function MenuItem(props) {
    const Icon = props.mIcon;
    const MyIcon = props.color !== undefined ? iconTypes[props.color] : StyledIcon;
    const attrs = props.attrs || {};
    return (React.createElement(StyledMenuItem, { ...attrs, onClick: props.onClick, disabled: props.disabled, selected: props.selected },
        props.mIcon &&
            React.createElement(MyIcon, { className: "icon" },
                React.createElement(Icon, null)),
        React.createElement(BodyText, { className: "menuLabel" }, props.label)));
}
