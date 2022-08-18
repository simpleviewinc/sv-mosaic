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
exports.StyledAdvancedTooltip = exports.StyledDefaultTooltip = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
// Material UI
var material_1 = require("@mui/material");
var theme_1 = __importDefault(require("../../theme"));
exports.StyledDefaultTooltip = (0, styled_components_1["default"])(function (props) { return (React.createElement(material_1.Tooltip, __assign({ classes: { popper: props.className, tooltip: "tooltip" } }, props))); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& .tooltip {\n\t\tbackground-color: ", ";\n\t\tcolor: white;\n\t\tpadding: 4px 8px;\n\t\tmargin-top: 4px;\n\t\tfont-size: 12px; \n\t}\n"], ["\n\t& .tooltip {\n\t\tbackground-color: ", ";\n\t\tcolor: white;\n\t\tpadding: 4px 8px;\n\t\tmargin-top: 4px;\n\t\tfont-size: 12px; \n\t}\n"])), theme_1["default"].colors.almostBlack);
exports.StyledAdvancedTooltip = (0, styled_components_1["default"])(function (props) { return (React.createElement(material_1.Tooltip, __assign({ classes: { popper: props.className, tooltip: "tooltip", arrow: "arrow" } }, props))); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t& .tooltip {\n\t\tbackground-color: white;\n\t\tcolor: ", ";\n\t\tpadding: 12px;\n\t\tmargin-bottom: 8px;\n\t\tfont-size: 12px;\n\t\tmax-width: 280px;\n\t\tbox-shadow: 0px 2px 6px #00000029;\n\t\tborder: 1px solid ", ";\n\t\tleft: ", ";\n\t}\n\n\t& .arrow {\n\t\tcolor: white;\n\t\tleft: ", ";\n\t}\n"], ["\n\t& .tooltip {\n\t\tbackground-color: white;\n\t\tcolor: ", ";\n\t\tpadding: 12px;\n\t\tmargin-bottom: 8px;\n\t\tfont-size: 12px;\n\t\tmax-width: 280px;\n\t\tbox-shadow: 0px 2px 6px #00000029;\n\t\tborder: 1px solid ", ";\n\t\tleft: ", ";\n\t}\n\n\t& .arrow {\n\t\tcolor: white;\n\t\tleft: ", ";\n\t}\n"])), theme_1["default"].colors.gray600, theme_1["default"].colors.gray200, function (pr) { return pr.placement !== "top" ? "-30px !important" : ""; }, function (pr) { return pr.placement !== "top" ? "32px !important" : ""; });
var templateObject_1, templateObject_2;
