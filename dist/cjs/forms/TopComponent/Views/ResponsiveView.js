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
var Button_1 = __importDefault(require("../../../components/Button"));
var FormNav_1 = __importDefault(require("../../FormNav"));
// Styled components
var styled_components_1 = __importDefault(require("styled-components"));
var TopComponent_styled_1 = require("../TopComponent.styled");
var TitleWrapper_1 = __importDefault(require("../Utils/TitleWrapper"));
var ResponsiveViewColumn = (0, styled_components_1["default"])(TopComponent_styled_1.StyledColumn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: ", ";\n  \tz-index: 1000;\n"], ["\n\tpadding: ", ";\n  \tz-index: 1000;\n"])), function (pr) { return pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"; });
var ResponsiveActionsRow = (0, styled_components_1["default"])(TopComponent_styled_1.Row)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\talign-self: ", ";\n\tmargin-top: 16px;\n\tmargin-bottom: 37px;\n"], ["\n\talign-self: ", ";\n\tmargin-top: 16px;\n\tmargin-bottom: 37px;\n"])), function (pr) { return (pr.showActive ? "" : "flex-end"); });
var ResponsiveDrawer = function (props) {
    var title = props.title, description = props.description, tooltipInfo = props.tooltipInfo, helpIcon = props.helpIcon, showActive = props.showActive, buttons = props.buttons, sections = props.sections, checkbox = props.checkbox, sectionsRefs = props.sectionsRefs, view = props.view;
    return (React.createElement(ResponsiveViewColumn, { sections: sections },
        React.createElement(TopComponent_styled_1.Row, null,
            React.createElement(TitleWrapper_1["default"], { title: title, description: description, view: view }),
            tooltipInfo && helpIcon),
        React.createElement(ResponsiveActionsRow, { showActive: showActive },
            showActive && React.createElement(TopComponent_styled_1.CheckboxWrapper, null, checkbox),
            buttons && (React.createElement(TopComponent_styled_1.ButtonsWrapper, null, buttons.map(function (button, idx) { return (React.createElement(Button_1["default"], __assign({ key: "".concat(button.label, "-").concat(idx) }, button))); })))),
        sections &&
            React.createElement(FormNav_1["default"], { sectionsRefs: sectionsRefs, sections: sections })));
};
exports["default"] = (0, react_1.memo)(ResponsiveDrawer);
var templateObject_1, templateObject_2;
