"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ButtonPopoverContext = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var Button_1 = __importDefault(require("@mui/material/Button"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var Popper_1 = __importDefault(require("@mui/material/Popper"));
var Menu_1 = __importDefault(require("../Menu"));
var MenuBase_1 = __importDefault(require("../MenuBase"));
var Button_styled_1 = require("./Button.styled");
exports.ButtonPopoverContext = (0, react_1.createContext)(null);
function Button(props) {
    var _a = props.attrs, attrs = _a === void 0 ? {} : _a, _b = props.muiAttrs, muiAttrs = _b === void 0 ? {} : _b;
    var _c = (0, react_1.useState)(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var _d = (0, react_1.useState)(null), popoverAnchorEl = _d[0], setPopoverAnchorEl = _d[1];
    var _e = (0, react_1.useState)(null), tooltipEl = _e[0], setTooltipEl = _e[1];
    var addAttrs = {};
    // const textLink = props.variant === "text" && props.href ? "_link" : "";
    // const MyButton = types[`${props.color}_${props.variant}${textLink}`];
    var MyButton = Button_styled_1.types["".concat(props.color, "_").concat(props.variant)];
    if (MyButton === undefined) {
        throw new Error("Color '".concat(props.color, "' and variant '").concat(props.variant, "' combination is not valid"));
    }
    var MaterialIcon = props.mIcon;
    var iconPosition = props.iconPosition || "left";
    function openMenu(event) {
        setAnchorEl(event.currentTarget);
    }
    function closeMenu() {
        setAnchorEl(null);
    }
    function openPopover(event) {
        setPopoverAnchorEl(event.currentTarget);
        setTooltipEl(null);
    }
    function closePopover() {
        setPopoverAnchorEl(null);
    }
    function onMouseEnter(e) {
        setTooltipEl(e.currentTarget);
    }
    function onMouseLeave(e) {
        setTooltipEl(null);
    }
    var onClick = props.popover ? openPopover
        : props.menuItems ? openMenu
            : props.menuContent ? openMenu
                : props.onClick;
    var size = props.size || "medium";
    if (props.tooltip !== undefined && props.disabled !== true) {
        addAttrs.onMouseEnter = onMouseEnter;
        addAttrs.onMouseLeave = onMouseLeave;
    }
    return (React.createElement(MyButton, __assign({}, attrs, addAttrs, { className: "\n\t\t\t\t".concat(props.className ? props.className : "", "\n\t\t\t\tbutton\n\t\t\t\t").concat(props.variant === "icon" ? "iconButton" : "normalButton", "\n\t\t\t\t").concat(props.fullWidth ? "fullWidth" : "", "\n\t\t\t\tsize_").concat(size, "\n\t\t\t\tvariant_").concat(props.variant, "\n\t\t\t") }),
        props.variant !== "icon" &&
            React.createElement(Button_1["default"], __assign({}, muiAttrs, { variant: props.variant, onClick: onClick, size: size, fullWidth: props.fullWidth, disabled: props.disabled, href: props.href }),
                props.mIcon && iconPosition === "left" &&
                    React.createElement(MaterialIcon, { className: "icon icon_left", style: { color: props.mIconColor } }),
                props.label,
                props.mIcon && iconPosition === "right" &&
                    React.createElement(MaterialIcon, { className: "icon icon_right", style: { color: props.mIconColor } })),
        props.variant === "icon" &&
            React.createElement(IconButton_1["default"], __assign({}, muiAttrs, { onClick: onClick, disabled: props.disabled, size: "large" }), props.mIcon && React.createElement(MaterialIcon, { "data-testid": "icon-button-test", className: "icon" })),
        props.menuItems &&
            React.createElement(Menu_1["default"], { items: props.menuItems, anchorEl: anchorEl, open: Boolean(anchorEl), onClose: closeMenu }),
        props.menuContent &&
            React.createElement(MenuBase_1["default"], { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: closeMenu }, props.menuContent),
        props.popover &&
            React.createElement(Popover_1["default"], { open: Boolean(popoverAnchorEl), anchorEl: popoverAnchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                }, transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                }, onClose: closePopover, disableRestoreFocus: true },
                React.createElement(Button_styled_1.PopoverWrapper, null,
                    React.createElement(exports.ButtonPopoverContext.Provider, { value: { onClose: closePopover } }, props.popover))),
        props.tooltip &&
            React.createElement(Popper_1["default"], { open: Boolean(tooltipEl), anchorEl: tooltipEl, style: { zIndex: 10, pointerEvents: "none" } },
                React.createElement(Button_styled_1.TooltipContent, null, props.tooltip))));
}
exports["default"] = (0, react_1.memo)(Button);
