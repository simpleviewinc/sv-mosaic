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
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var Button_1 = __importDefault(require("../../../components/Button"));
var TitleWrapper_1 = __importDefault(require("../Utils/TitleWrapper"));
var TopComponent_styled_1 = require("../TopComponent.styled");
// Utils
var theme_1 = __importDefault(require("../../../theme/theme"));
var MobileActionsRow = (0, styled_components_1["default"])(TopComponent_styled_1.Row)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 12px 20px;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n\n  .button {\n    margin-right: 20px;\n  }\n\n  .button:last-child {\n    margin-right: 0px;\n  }\n\n  svg {\n    align-self: center;\n  }\n"], ["\n  background-color: ", ";\n  padding: 12px 20px;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n\n  .button {\n    margin-right: 20px;\n  }\n\n  .button:last-child {\n    margin-right: 0px;\n  }\n\n  svg {\n    align-self: center;\n  }\n"])), theme_1["default"].colors.gray200);
var StyledClearIcon = (0, styled_components_1["default"])(Clear_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), theme_1["default"].colors.almostBlack);
var MobileCheckboxHelpIconRow = (0, styled_components_1["default"])(TopComponent_styled_1.Row)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 20px 20px 20px;\n"], ["\n  padding: 0 20px 20px 20px;\n"])));
var MobileView = function (props) {
    var buttons = props.buttons, onCancel = props.onCancel, title = props.title, description = props.description, showActive = props.showActive, tooltipInfo = props.tooltipInfo, helpIcon = props.helpIcon, checkbox = props.checkbox, view = props.view;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileActionsRow, null,
            React.createElement(StyledClearIcon, { onClick: onCancel }),
            buttons && (React.createElement("div", null, buttons.map(function (button, idx) { return (React.createElement(Button_1["default"], __assign({ key: "".concat(button.label, "-").concat(idx) }, button))); })))),
        React.createElement(TitleWrapper_1["default"], { title: title, description: description, view: view }),
        (showActive || tooltipInfo) && (React.createElement(MobileCheckboxHelpIconRow, null,
            showActive && React.createElement(TopComponent_styled_1.CheckboxWrapper, null, checkbox),
            tooltipInfo && helpIcon))));
};
exports["default"] = (0, react_1.memo)(MobileView);
var templateObject_1, templateObject_2, templateObject_3;
