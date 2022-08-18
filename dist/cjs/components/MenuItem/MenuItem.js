"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var theme_1 = __importDefault(require("../../theme"));
var Typography_1 = require("../Typography");
var StyledMenuItem = (0, styled_components_1["default"])(MenuItem_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmin-width: 150px;\n\n\t&.MuiMenuItem-root {\n\t\tmin-height: 42px;\n\t}\n\n\t& > .icon {\n\t\tmargin-right: 10px;\n\t}\n\n\t& > .icon > svg {\n\t\tfont-size: ", ";\n\t}\n\n\t& > .menuLabel {\n\t\tfont-family: ", ";\n\t}\n"], ["\n\tmin-width: 150px;\n\n\t&.MuiMenuItem-root {\n\t\tmin-height: 42px;\n\t}\n\n\t& > .icon {\n\t\tmargin-right: 10px;\n\t}\n\n\t& > .icon > svg {\n\t\tfont-size: ", ";\n\t}\n\n\t& > .menuLabel {\n\t\tfont-family: ", ";\n\t}\n"])), theme_1["default"].iconFontSize, theme_1["default"].fontFamily);
var StyledIcon = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: inline-flex;\n"], ["\n\tdisplay: inline-flex;\n"])));
var iconTypes = {
    blue: (0, styled_components_1["default"])(StyledIcon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t& svg {\n\t\t\tcolor: ", ";\n\t\t}\n\t"], ["\n\t\t& svg {\n\t\t\tcolor: ", ";\n\t\t}\n\t"])), theme_1["default"].colors.blue),
    red: (0, styled_components_1["default"])(StyledIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t& svg {\n\t\t\tcolor: ", ";\n\t\t}\n\t"], ["\n\t\t& svg {\n\t\t\tcolor: ", ";\n\t\t}\n\t"])), theme_1["default"].colors.red)
};
function MenuItem(props) {
    var Icon = props.mIcon;
    var MyIcon = props.color !== undefined ? iconTypes[props.color] : StyledIcon;
    var attrs = props.attrs || {};
    return (React.createElement(StyledMenuItem, __assign({}, attrs, { onClick: props.onClick, disabled: props.disabled, selected: props.selected }),
        props.mIcon &&
            React.createElement(MyIcon, { className: "icon" },
                React.createElement(Icon, null)),
        React.createElement(Typography_1.BodyText, { className: "menuLabel" }, props.label)));
}
exports["default"] = MenuItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
