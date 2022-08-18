"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
// Material UI
var material_1 = require("@mui/material");
var InfoOutlined_1 = __importDefault(require("@mui/icons-material/InfoOutlined"));
var theme_1 = __importDefault(require("../../theme"));
var Tooltip_1 = __importDefault(require("../Tooltip"));
var LabelWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", ";\n  justify-content: space-between;\n  width: ", ";\n  font-family: ", ";\n\n  .MuiInputLabel-root {\n    font-family: inherit;\n    font-size: 16px;\n    color:  ", ";\n    word-wrap: break-word;\n\n  :after {\n      content: \"", "\";\n      color: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  margin-bottom: ", ";\n  justify-content: space-between;\n  width: ", ";\n  font-family: ", ";\n\n  .MuiInputLabel-root {\n    font-family: inherit;\n    font-size: 16px;\n    color:  ", ";\n    word-wrap: break-word;\n\n  :after {\n      content: \"", "\";\n      color: ", ";\n    }\n  }\n"])), function (pr) { return pr.labelMargin; }, function (pr) { return pr.size; }, theme_1["default"].fontFamily, function (pr) {
    return pr.disabled ? theme_1["default"].colors.labelDisabled : theme_1["default"].colors.almostBlack;
}, function (pr) { return (pr.required ? "*" : ""); }, theme_1["default"].colors.red);
var CharCounterWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  align-self: flex-end;\n  font-size: 12px;\n"], ["\n  color: ", ";\n  align-self: flex-end;\n  font-size: 12px;\n"])), theme_1["default"].colors.gray600);
var StyledInfoOutlinedIcon = (0, styled_components_1["default"])(InfoOutlined_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n\tfill: ", ";\n\tfont-size: 16px;\n\twidth: 24px;\n\theight: 24px;\n\tmargin-left: 8px;\n  }\n"], ["\n  && {\n\tfill: ", ";\n\tfont-size: 16px;\n\twidth: 24px;\n\theight: 24px;\n\tmargin-left: 8px;\n  }\n"])), theme_1["default"].colors.blueTeal);
var StyledInputTooltipWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var StyledInputLabel = (0, styled_components_1["default"])(material_1.InputLabel)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-self: center;\n"], ["\n  align-self: center;\n"])));
var Label = function (props) {
    var children = props.children, className = props.className, disabled = props.disabled, required = props.required, htmlFor = props.htmlFor, value = props.value, maxCharacters = props.maxCharacters, tooltip = props.tooltip, instructionText = props.instructionText, labelMargin = props.labelMargin;
    return (React.createElement(LabelWrapper, { className: className, disabled: disabled, required: required, labelMargin: labelMargin },
        React.createElement(StyledInputTooltipWrapper, null,
            React.createElement(StyledInputLabel, { htmlFor: htmlFor }, children),
            tooltip &&
                React.createElement(Tooltip_1["default"], { text: instructionText, type: 'advanced' },
                    React.createElement(StyledInfoOutlinedIcon, null))),
        maxCharacters > 0 && (React.createElement(CharCounterWrapper, null, (!value ? "0" : value.length) + "/" + maxCharacters))));
};
exports["default"] = Label;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
