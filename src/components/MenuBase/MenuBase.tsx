import * as React from "react";
import { createContext, ReactElement } from "react";

import { MenuBaseProps, MenuBaseContextProps } from "./MenuBaseTypes";
import { StyledMenu } from "./MenuBase.styled";

export const MenuBaseContext = createContext<MenuBaseContextProps>(null);

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<StyledMenu anchorEl={props.anchorEl} open={props.open} onClose={props.onClose} disablePortal={true}>
			<MenuBaseContext.Provider value={{ onClose : props.onClose }}>
				{props.children}
			</MenuBaseContext.Provider>
		</StyledMenu>
	);
}
