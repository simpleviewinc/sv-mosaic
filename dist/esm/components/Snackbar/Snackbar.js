import * as React from "react";
import { memo } from "react";
import { ActionWrapper, ContentWrapper, MessageWrapper, StyledCloseIcon, StyledSnackbar, } from "./Snackbar.styled";
// Material UI
import IconButton from "@mui/material/IconButton";
import Button from "../Button";
const Snackbar = (props) => {
    const { action, autoHideDuration = 4000, label, leadingIcon, onClose, open = false, } = props;
    const MaterialIcon = leadingIcon;
    let milisecondsDuration = autoHideDuration;
    /**
   * If the milliseconds for the autoHideDuration is lower than the minimum,
   * then is set to 4000ms. If exceeds the maximum, then is set to 10000ms.
   */
    if (autoHideDuration < 4000) {
        milisecondsDuration = 4000;
    }
    else if (autoHideDuration > 10000) {
        milisecondsDuration = 10000;
    }
    return (React.createElement(StyledSnackbar, { autoHideDuration: milisecondsDuration, onClose: onClose, open: open, anchorOrigin: { vertical: "bottom", horizontal: "right" } },
        React.createElement(ContentWrapper, null,
            leadingIcon && React.createElement(MaterialIcon, { "data-testid": "leading-snackbar-icon" }),
            React.createElement(MessageWrapper, null,
                React.createElement("p", null, label),
                (action === null || action === void 0 ? void 0 : action.function) && (action === null || action === void 0 ? void 0 : action.label) && (React.createElement(ActionWrapper, null,
                    React.createElement(Button, { color: "teal", variant: "text", onClick: action.function, label: action.label, muiAttrs: { disableRipple: true } })))),
            React.createElement(IconButton, { "aria-label": "Close", "data-testid": "close-icon", disableRipple: true, key: "close", onClick: onClose, size: "large" },
                React.createElement(StyledCloseIcon, null)))));
};
export default memo(Snackbar);
