import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import MUIMenuItem from "@material-ui/core/MenuItem";

import { MenuItemProps } from "./MenuItemTypes";
import theme from "../../utils/theme";
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

	& > .menuLabel {
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