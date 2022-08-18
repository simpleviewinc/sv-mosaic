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
var LeftNavTitle_1 = __importDefault(require("./LeftNavTitle"));
var LeftNavItems_1 = __importDefault(require("./LeftNavItems"));
var theme_1 = __importDefault(require("../../theme"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tborder-top: 1px solid ", ";\n"], ["\n\tborder-top: 1px solid ", ";\n"])), theme_1["default"].colors.gray700);
function LeftNavGroup(props) {
    return (React.createElement(StyledDiv, null,
        React.createElement(LeftNavTitle_1["default"], { label: props.item.label, mIcon: props.item.mIcon }),
        React.createElement(LeftNavItems_1["default"], { items: props.item.items, onOpen: props.onOpen, openName: props.openName })));
}
exports["default"] = LeftNavGroup;
var templateObject_1;
