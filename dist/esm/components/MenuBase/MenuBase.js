import * as React from "react";
import { createContext } from "react";
import MUIMenu from "@mui/material/Menu";
export const MenuBaseContext = createContext(null);
export default function MenuBase(props) {
    return (React.createElement(MUIMenu, { anchorEl: props.anchorEl, open: props.open, onClose: props.onClose, disablePortal: true },
        React.createElement(MenuBaseContext.Provider, { value: { onClose: props.onClose } }, props.children)));
}
