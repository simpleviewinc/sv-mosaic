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
var theme_1 = __importDefault(require("../../theme"));
var StyledH3 = styled_components_1["default"].h3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tpadding: 8px 16px;\n\tfont-family: ", ";\n\tmargin: 0;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 24px;\n\n\t& > span {\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t& > .icon {\n\t\tmargin-right: 16px;\n\t}\n"], ["\n\tcolor: ", ";\n\tpadding: 8px 16px;\n\tfont-family: ", ";\n\tmargin: 0;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 24px;\n\n\t& > span {\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t& > .icon {\n\t\tmargin-right: 16px;\n\t}\n"])), theme_1["default"].colors.gray400, theme_1["default"].fontFamily);
function LeftNavTitle(props) {
    return (React.createElement(StyledH3, { title: props.label },
        props.mIcon &&
            React.createElement(props.mIcon, { className: "icon" }),
        React.createElement("span", null, props.label)));
}
exports["default"] = LeftNavTitle;
var templateObject_1;
