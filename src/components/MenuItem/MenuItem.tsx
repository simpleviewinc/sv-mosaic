import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";

import { MenuItemProps } from "./MenuItemTypes";
import theme from "@root/theme";
import { BodyText } from "../Typography";

const StyledMenuItem = styled(MUIMenuItem)`

	&.MuiMenuItem-root {
		min-height: 42px;
		background-color: ${theme.colors.white} !important;
	}

	&.menu-item.Mui-selected {
		.menuLabel {
			font-weight: ${theme.fontWeight.bold};
		}
	}

	&.menu-item {
		padding: 8px 16px;
		&:hover {
			background-color: ${theme.colors.gray200} !important;
		}
		&:active span {
			color: ${theme.newColors.almostBlack["100"]};
		}
		& .MuiTouchRipple-child {
			background-color: ${theme.colors.grayHover};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${theme.fontFamily};
		color: ${theme.newColors.grey4["100"]};

	}
`

const StyledIcon = styled.div`
	display: inline-flex;
`

const iconTypes = {
	blue : styled(StyledIcon)`
		& svg {
			color: ${theme.colors.blue};
		}
	`,
	red : styled(StyledIcon)`
		& svg {
			color: ${theme.newColors.darkRed["100"]};
		}
	`
}

export default function MenuItem(props: MenuItemProps): ReactElement {
	const Icon = props.mIcon;

	const MyIcon = props.color !== undefined ? iconTypes[props.color] : StyledIcon;

	const attrs = props.attrs || {};

	return (
		<StyledMenuItem
			{ ...attrs }
			onClick={props.onClick}
			disabled={props.disabled}
			selected={props.selected}
			className="menu-item"
			disableRipple={true}
		>
			{
				props.mIcon &&
				<MyIcon className="icon">
					<Icon/>
				</MyIcon>
			}
			<BodyText className="menuLabel">{props.label}</BodyText>
		</StyledMenuItem>
	)
}
