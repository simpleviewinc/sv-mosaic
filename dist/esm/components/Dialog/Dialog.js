import * as React from "react";
// Components
import Button from "../Button";
// Material UI
import { DialogActions, DialogContent } from "@mui/material";
import { StyledDialog, StyledDialogTitle } from "./Dialog.styled";
const Dialog = (props) => {
    const { children, dialogTitle, open, primaryAction, primaryBtnLabel = "Apply", secondaryAction, secondaryBtnLabel = "Cancel", } = props;
    return (React.createElement(StyledDialog, { open: open },
        React.createElement(StyledDialogTitle, null, dialogTitle),
        React.createElement(DialogContent, null, children),
        React.createElement(DialogActions, null,
            React.createElement(Button, { color: "gray", variant: "outlined", label: secondaryBtnLabel, onClick: secondaryAction, muiAttrs: { disableRipple: true } }),
            React.createElement(Button, { color: "yellow", variant: "contained", onClick: primaryAction, label: primaryBtnLabel, muiAttrs: { disableRipple: true } }))));
};
export default Dialog;
