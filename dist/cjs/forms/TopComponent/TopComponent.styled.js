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
exports.StyledHelpIcon = exports.StyledHelpIconWrapper = exports.StyledColumn = exports.CheckboxWrapper = exports.Column = exports.Row = exports.FlexContainer = exports.ButtonsWrapper = exports.FormContent = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Components
var Help_1 = __importDefault(require("@mui/icons-material/Help"));
// Utils
var theme_1 = __importStar(require("../../theme/theme"));
var BIG_SCREEN_BREAKPOINT = theme_1.BREAKPOINTS.topComponent.bigScreenView + "px";
var RESPONSIVE_BREAKPOINT = theme_1.BREAKPOINTS.topComponent.responsiveView + "px";
exports.FormContent = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n"], ["\n  padding: ", ";\n"])), function (pr) { return pr.view === "DRAWER" ? "0px 40px" : (pr.view === "RESPONSIVE" || pr.view === "DESKTOP" || pr.view === "BIG_DESKTOP") ? "24px 20px 0px 20px" : "0px"; });
exports.ButtonsWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n\n  .button {\n    margin-right: 20px;\n  }\n\n  .button:last-child {\n    margin-right: 0px;\n  }\n"], ["\n  display: flex;\n\n  .button {\n    margin-right: 20px;\n  }\n\n  .button:last-child {\n    margin-right: 0px;\n  }\n"])));
exports.FlexContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.Row = (0, styled_components_1["default"])(exports.FlexContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  justify-content: space-between;\n\n  @media (min-width: ", ") {\n    justify-content: flex-start;\n  }\n"], ["\n  justify-content: space-between;\n\n  @media (min-width: ", ") {\n    justify-content: flex-start;\n  }\n"])), BIG_SCREEN_BREAKPOINT);
exports.Column = (0, styled_components_1["default"])(exports.FlexContainer)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
exports.CheckboxWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: -10px;\n"], ["\n  margin-left: -10px;\n"])));
exports.StyledColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: white;\n  border-bottom: 2px solid ", ";\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n"], ["\n  background-color: white;\n  border-bottom: 2px solid ", ";\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n"])), theme_1["default"].colors.gray200);
// Icons
exports.StyledHelpIconWrapper = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border-right: ", ";\n  padding-right: ", ";\n\n  @media (max-width: ", ") {\n    border-right: none;\n  }\n"], ["\n  border-right: ", ";\n  padding-right: ", ";\n\n  @media (max-width: ", ") {\n    border-right: none;\n  }\n"])), function (pr) {
    return pr.showActive ? "2px solid ".concat(theme_1["default"].colors.gray200) : "";
}, function (pr) { return (pr.isResponsiveView ? "" : "16px"); }, RESPONSIVE_BREAKPOINT);
exports.StyledHelpIcon = (0, styled_components_1["default"])(Help_1["default"])(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  margin-top: 7px;\n"], ["\n  color: ", ";\n  margin-top: 7px;\n"])), theme_1["default"].colors.almostBlack);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
