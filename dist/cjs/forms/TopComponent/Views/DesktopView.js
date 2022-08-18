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
// Components
var FormNav_1 = __importDefault(require("../../FormNav"));
var Button_1 = __importDefault(require("../../../components/Button"));
// Styled components
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../../theme"));
var TopComponent_styled_1 = require("../TopComponent.styled");
// Utils
var theme_2 = require("../../../theme/theme");
var TitleWrapper_1 = __importDefault(require("../Utils/TitleWrapper"));
var BIG_SCREEN_BREAKPOINT = theme_2.BREAKPOINTS.topComponent.bigScreenView + "px";
var DesktopViewColumn = (0, styled_components_1["default"])(TopComponent_styled_1.StyledColumn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tjustify-content: space-between;\n\tpadding: ", ";\n\ttop: 0;\n\tz-index: 1000;\n\n\t& .form-nav-wrapper {\n\t\tmargin-top: 30px;\n\t}\n\n\t@media (min-width: ", ") {\n\t\tborder-bottom: 2px solid ", ";\n\t\tmargin-bottom: 0px;\n\t\tpadding: 24px 20px 20px 20px;\n\t}\n"], ["\n\tjustify-content: space-between;\n\tpadding: ", ";\n\ttop: 0;\n\tz-index: 1000;\n\n\t& .form-nav-wrapper {\n\t\tmargin-top: 30px;\n\t}\n\n\t@media (min-width: ", ") {\n\t\tborder-bottom: 2px solid ", ";\n\t\tmargin-bottom: 0px;\n\t\tpadding: 24px 20px 20px 20px;\n\t}\n"])), function (pr) { return pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"; }, BIG_SCREEN_BREAKPOINT, theme_1["default"].colors.gray200);
var DesktopActionsRow = (0, styled_components_1["default"])(TopComponent_styled_1.FlexContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: flex-start;\n\n  button:last-child {\n    margin-left: 20px;\n  }\n\n  .MuiFormControlLabel-root {\n    margin-right: 20px;\n  }\n"], ["\n  align-items: flex-start;\n\n  button:last-child {\n    margin-left: 20px;\n  }\n\n  .MuiFormControlLabel-root {\n    margin-right: 20px;\n  }\n"])));
var DesktopView = function (props) {
    var title = props.title, description = props.description, tooltipInfo = props.tooltipInfo, buttons = props.buttons, helpIcon = props.helpIcon, showActive = props.showActive, sections = props.sections, checkbox = props.checkbox, view = props.view, sectionsRefs = props.sectionsRefs;
    return (React.createElement(DesktopViewColumn, { sections: sections },
        React.createElement(TopComponent_styled_1.FlexContainer, null,
            React.createElement(TitleWrapper_1["default"], { title: title, description: description, view: view }),
            React.createElement(DesktopActionsRow, null,
                tooltipInfo && helpIcon,
                showActive && checkbox,
                buttons && buttons.map(function (button, idx) { return (React.createElement(Button_1["default"], __assign({ key: "".concat(button.label, "-").concat(idx) }, button))); }))),
        (view !== "BIG_DESKTOP" && sections) && (React.createElement(TopComponent_styled_1.FlexContainer, null,
            React.createElement(FormNav_1["default"], { sectionsRefs: sectionsRefs, sections: sections })))));
};
exports["default"] = (0, react_1.memo)(DesktopView);
var templateObject_1, templateObject_2;
