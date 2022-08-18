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
// Components
var Tooltip_1 = __importDefault(require("../Tooltip"));
var IconButton_styled_1 = require("./IconButton.styled");
var IconButton = function (props) {
    var className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, icon = props.icon, tooltipText = props.tooltipText, onClick = props.onClick;
    var MaterialIcon = icon;
    return tooltipText && !disabled ? (React.createElement(Tooltip_1["default"], { text: tooltipText },
        React.createElement(IconButton_styled_1.StyledIconButton, { className: className, disabled: disabled, disableRipple: true, onClick: onClick },
            React.createElement(MaterialIcon, { "data-testid": 'icon-button-test' })))) : (React.createElement(IconButton_styled_1.StyledIconButton, { className: className, disabled: disabled, disableRipple: true, onClick: onClick },
        React.createElement(MaterialIcon, { "data-testid": 'icon-button-test' })));
};
exports["default"] = IconButton;
