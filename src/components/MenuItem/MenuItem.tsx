import * as React from "react";
import styled from "styled-components";
import MUIMenuItem from '@material-ui/core/MenuItem';

import { MenuItemProps } from "./MenuItemTypes";
import { theme } from "../../";
import { BodyText } from "../Typography";

const StyledMenuItem = styled(MUIMenuItem)`
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

	& > .label {
		font-family: ${theme.fontFamily};
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
			color: ${theme.colors.red};
		}
	`
}

export default function MenuItem(props: MenuItemProps) {
	const Icon = props.mIcon;
	
	const MyIcon = props.color !== undefined ? iconTypes[props.color] : StyledIcon;
	
	return (
		<StyledMenuItem onClick={props.onClick} disabled={props.disabled} selected={props.selected}>
			{
				props.mIcon &&
				<MyIcon className="icon">
					<Icon/>
				</MyIcon>
			}
			<BodyText className="label">{props.label}</BodyText>
		</StyledMenuItem>
	)
}