import * as React from "react";
import { createContext, ReactElement } from "react";
import MUIMenu from "@mui/material/Menu";

import { MenuBaseProps, MenuBaseContextProps } from "./MenuBaseTypes";
import styled from "@emotion/styled";
import theme from "@root/theme";

export const MenuBaseContext = createContext<MenuBaseContextProps>(null);

const StyledMUIMenu = styled(MUIMenu)`
	& > div {
		box-shadow: 0px 2px 6px rgba(26, 26, 26, 0.16);
		margin-top: 4px;

		& > ul {
			& .MuiTouchRipple-child {
				background-color: ${theme.colors.grayHover};
			}
			& > li {
				padding: 8px 16px;
				&:active {
					span {
						color: #1a1a1a;
					}
				}
			}
		}
	}
`

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<StyledMUIMenu anchorEl={props.anchorEl} open={props.open} onClose={props.onClose} disablePortal={true}>
			<MenuBaseContext.Provider value={{ onClose : props.onClose }}>
				{props.children}
			</MenuBaseContext.Provider>
		</StyledMUIMenu>
	)
}
