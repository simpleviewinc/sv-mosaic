"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var Snackbar_styled_1 = require("./Snackbar.styled");
// Material UI
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Button_1 = __importDefault(require("../Button"));
var Snackbar = function (props) {
    var action = props.action, _a = props.autoHideDuration, autoHideDuration = _a === void 0 ? 4000 : _a, label = props.label, leadingIcon = props.leadingIcon, onClose = props.onClose, _b = props.open, open = _b === void 0 ? false : _b;
    var MaterialIcon = leadingIcon;
    var milisecondsDuration = autoHideDuration;
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
    return (React.createElement(Snackbar_styled_1.StyledSnackbar, { autoHideDuration: milisecondsDuration, onClose: onClose, open: open, anchorOrigin: { vertical: "bottom", horizontal: "right" } },
        React.createElement(Snackbar_styled_1.ContentWrapper, null,
            leadingIcon && React.createElement(MaterialIcon, { "data-testid": "leading-snackbar-icon" }),
            React.createElement(Snackbar_styled_1.MessageWrapper, null,
                React.createElement("p", null, label),
                (action === null || action === void 0 ? void 0 : action["function"]) && (action === null || action === void 0 ? void 0 : action.label) && (React.createElement(Snackbar_styled_1.ActionWrapper, null,
                    React.createElement(Button_1["default"], { color: "teal", variant: "text", onClick: action["function"], label: action.label, muiAttrs: { disableRipple: true } })))),
            React.createElement(IconButton_1["default"], { "aria-label": "Close", "data-testid": "close-icon", disableRipple: true, key: "close", onClick: onClose, size: "large" },
                React.createElement(Snackbar_styled_1.StyledCloseIcon, null)))));
};
exports["default"] = (0, react_1.memo)(Snackbar);
