import * as React from "react";
import { createContext, ReactElement } from "react";
import MUIMenu from "@mui/material/Menu";

import { MenuBaseProps, MenuBaseContextProps } from "./MenuBaseTypes";
import styled from "styled-components";
import theme from "@root/theme";

export const MenuBaseContext = createContext<MenuBaseContextProps>(null);

const StyledMUIMenu = styled(MUIMenu)`
	& > div {
		box-shadow: 0px 2px 6px ${theme.newColors.almostBlack["20"]};
		margin-top: 4px;
	}
`;

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<StyledMUIMenu anchorEl={props.anchorEl} open={props.open} onClose={props.onClose} disablePortal={true}>
			<MenuBaseContext.Provider value={{ onClose : props.onClose }}>
				{props.children}
			</MenuBaseContext.Provider>
		</StyledMUIMenu>
	);
}
