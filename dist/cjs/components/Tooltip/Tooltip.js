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
exports.__esModule = true;
var React = __importStar(require("react"));
var Tooltip_styled_1 = require("./Tooltip.styled");
var Tooltip = function (props) {
    var className = props.className, _a = props.text, text = _a === void 0 ? "" : _a, children = props.children, open = props.open, onClose = props.onClose, onOpen = props.onOpen, type = props.type, _b = props.placement, placement = _b === void 0 ? "top-start" : _b;
    return type !== "advanced" ? (React.createElement(Tooltip_styled_1.StyledDefaultTooltip, { open: open, onClose: onClose, onOpen: onOpen, title: text, PopperProps: {
            disablePortal: true
        }, "data-testid": 'tooltip-test-id' }, children)) : (React.createElement(Tooltip_styled_1.StyledAdvancedTooltip, { className: className, open: open, onClose: onClose, onOpen: onOpen, title: text, arrow: true, placement: placement, PopperProps: {
            disablePortal: true
        }, "data-testid": 'tooltip-test-id' }, children));
};
exports["default"] = Tooltip;
