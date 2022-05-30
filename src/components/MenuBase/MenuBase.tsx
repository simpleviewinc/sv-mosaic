import * as React from "react";
import { createContext, ReactElement } from "react";
import MUIMenu from "@mui/material/Menu";

import { MenuBaseProps, MenuBaseContextProps } from "./MenuBaseTypes";

export const MenuBaseContext = createContext<MenuBaseContextProps>(null);

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<MUIMenu anchorEl={props.anchorEl} open={props.open} onClose={props.onClose}>
			<MenuBaseContext.Provider value={{ onClose : props.onClose }}>
				{props.children}
			</MenuBaseContext.Provider>
		</MUIMenu>
	)
}