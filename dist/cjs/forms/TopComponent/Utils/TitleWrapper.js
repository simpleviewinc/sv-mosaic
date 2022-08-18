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
exports.TitleRow = exports.FormTitle = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
// Styled components
var styled_components_1 = __importDefault(require("styled-components"));
// Utils
var theme_1 = __importStar(require("../../../theme/theme"));
var BIG_SCREEN_BREAKPOINT = theme_1.BREAKPOINTS.topComponent.bigScreenView + "px";
exports.FormTitle = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\t", ";\n\n\t@media (max-width: ", ") {\n\t\tmargin: 0;\n\t}\n"], ["\n\tfont-family: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\t", ";\n\n\t@media (max-width: ", ") {\n\t\tmargin: 0;\n\t}\n"])), function (pr) { return !pr.type && theme_1["default"].museoFont; }, theme_1["default"].colors.almostBlack, function (pr) { return pr.type && pr.type === "DRAWER" ? "20px" : "28px"; }, function (pr) { return pr.type === "DRAWER" &&
    "\n\t\t\t\tfont-weight: normal;\n\t\t\t\tmargin: auto;\n\t\t\t"; }, theme_1["default"].breakpoints.mobile);
var Description = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tmargin-top: 8px;\n\n\t@media (max-width: ", ") {\n\t\talign-self: center;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tmargin-top: 8px;\n\n\t@media (max-width: ", ") {\n\t\talign-self: center;\n\t}\n"])), theme_1["default"].colors.gray600, theme_1["default"].breakpoints.mobile);
exports.TitleRow = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tfont-family: ", ";\n\t", "\n"], ["\n\tdisplay: flex;\n\tfont-family: ", ";\n\t", "\n"])), theme_1["default"].fontFamily, function (pr) { return pr.view === "MOBILE" ?
    "flex-direction: row;\n\t\tjustify-content: space-between;\n\n\t\t@media (min-width: ".concat(BIG_SCREEN_BREAKPOINT, ") {\n\t\t\tjustify-content: flex-start;\n\t\t}\n\t\tpadding: 20px;\n\t\t")
    :
        "\n\t\tflex-direction: column;\n\t\tmargin-right: auto;\n\t\t"; });
var TitleWrapper = function (props) {
    var title = props.title, description = props.description, view = props.view;
    return (React.createElement(exports.TitleRow, { view: view },
        React.createElement(exports.FormTitle, null, title),
        description && React.createElement(Description, null, description)));
};
exports["default"] = (0, react_1.memo)(TitleWrapper);
var templateObject_1, templateObject_2, templateObject_3;
