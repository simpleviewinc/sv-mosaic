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
// Components
var MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Button_1 = __importDefault(require("../../components/Button"));
// Styles
var MenuFormFieldCard_styled_1 = require("./MenuFormFieldCard.styled");
var MenuFormFieldCard = function (props) {
    var className = props.className, disabled = props.disabled, options = props.options;
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleMoreIconClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var closeMenuHandler = function () {
        setAnchorEl(null);
    };
    return (React.createElement("div", { className: className },
        React.createElement(Button_1["default"], { "data-testid": "icon-button-test", color: "gray", variant: "icon", mIcon: MoreVert_1["default"], onClick: handleMoreIconClick, disabled: disabled }),
        React.createElement(MenuFormFieldCard_styled_1.StyledMenu, { anchorEl: anchorEl, anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "left"
            }, keepMounted: true, open: open, onClose: closeMenuHandler }, options === null || options === void 0 ? void 0 : options.map(function (option) { return (React.createElement(MenuItem_1["default"], { key: "label-".concat(option.label), onClick: option.action }, option.label)); }))));
};
exports["default"] = (0, react_1.memo)(MenuFormFieldCard);
