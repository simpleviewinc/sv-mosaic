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
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
// Components
var TopComponent_styled_1 = require("../TopComponent.styled");
var material_1 = require("@mui/material");
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var Button_1 = __importDefault(require("../../../components/Button"));
var TitleWrapper_1 = require("../Utils/TitleWrapper");
// Utils
var theme_1 = __importDefault(require("../../../theme/theme"));
var DrawerViewColumn = (0, styled_components_1["default"])(TopComponent_styled_1.StyledColumn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n  z-index: 9999;\n"], ["\n  background-color: ", ";\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n  z-index: 9999;\n"])), theme_1["default"].colors.grayHover);
var DrawerView = function (props) {
    var buttons = props.buttons, onCancel = props.onCancel, view = props.view, title = props.title, tooltipInfo = props.tooltipInfo, helpIcon = props.helpIcon;
    return (React.createElement(React.Fragment, null,
        React.createElement(DrawerViewColumn, { type: view },
            React.createElement(TopComponent_styled_1.Row, null,
                onCancel && (React.createElement(material_1.IconButton, { "data-testid": "close-icon", "aria-label": "close", disableRipple: true, onClick: onCancel, style: { marginRight: "8px" }, size: "large" },
                    React.createElement(Close_1["default"], null))),
                React.createElement(TitleWrapper_1.FormTitle, { type: view, "data-testid": "drawer-title-test" }, title),
                tooltipInfo && helpIcon),
            buttons && (React.createElement(TopComponent_styled_1.ButtonsWrapper, { style: { alignItems: "center" } }, buttons.map(function (button, idx) { return (React.createElement(Button_1["default"], __assign({ key: "".concat(button.label, "-").concat(idx) }, button))); }))))));
};
exports["default"] = (0, react_1.memo)(DrawerView);
var templateObject_1;
