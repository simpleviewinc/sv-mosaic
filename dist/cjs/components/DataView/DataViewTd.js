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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Typography_1 = require("../Typography");
var StyledTd = styled_components_1["default"].td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 40px;\n\n\t", "\n\t&:not(.expandCell) {\n\t\twidth: 1%;\n\t\twhite-space: nowrap;\n\t}\n\n\t", "\n\t&.paddingRight {\n\t\tpadding-right: 12px;\n\t}\n\n\t&.paddingLeft {\n\t\tpadding-left: 12px;\n\t}\n\n\t&.bold {\n\t\tfont-weight: bold;\n\t}\n\n\t&.italic {\n\t\tfont-style: italic;\n\t}\n\n\t&.strikeThrough {\n\t\ttext-decoration-line: line-through;\n\t}\n\n\t& > div.noWrap {\n\t\twhite-space: nowrap;\n\t}\n\n\t& > div.ellipsis {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n"], ["\n\theight: 40px;\n\n\t" /* This ensures that the td collapses to it's content size if it doesn't have the .expandCell class */, "\n\t&:not(.expandCell) {\n\t\twidth: 1%;\n\t\twhite-space: nowrap;\n\t}\n\n\t" /* If it has the .paddingRight class, add padding to the right of the cell */, "\n\t&.paddingRight {\n\t\tpadding-right: 12px;\n\t}\n\n\t&.paddingLeft {\n\t\tpadding-left: 12px;\n\t}\n\n\t&.bold {\n\t\tfont-weight: bold;\n\t}\n\n\t&.italic {\n\t\tfont-style: italic;\n\t}\n\n\t&.strikeThrough {\n\t\ttext-decoration-line: line-through;\n\t}\n\n\t& > div.noWrap {\n\t\twhite-space: nowrap;\n\t}\n\n\t& > div.ellipsis {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n"])), /* This ensures that the td collapses to it's content size if it doesn't have the .expandCell class */ "", /* If it has the .paddingRight class, add padding to the right of the cell */ "");
function DataViewTd(props) {
    var expandCell = props.expandCell !== undefined ? props.expandCell : false;
    var paddingRight = props.paddingRight !== undefined ? props.paddingRight : false;
    var paddingLeft = props.paddingLeft !== undefined ? props.paddingLeft : false;
    var bold = props.bold !== undefined ? props.bold : false;
    var italic = props.italic !== undefined ? props.italic : false;
    var strikeThrough = props.strikeThrough !== undefined ? props.strikeThrough : false;
    var noWrap = props.noWrap !== undefined ? props.noWrap : false;
    var ellipsis = props.ellipsis !== undefined ? props.ellipsis : false;
    var maxWidth = props.maxWidth !== undefined ? props.maxWidth : undefined;
    var textTransform = props.textTransform !== undefined ? props.textTransform : undefined;
    return (react_1["default"].createElement(StyledTd, { className: "\n\t\t\t\t".concat(expandCell ? "expandCell" : "", "\n\t\t\t\t").concat(paddingRight ? "paddingRight" : "", "\n\t\t\t\t").concat(paddingLeft ? "paddingLeft" : "", "\n\t\t\t\t").concat(bold ? "bold" : "", "\n\t\t\t\t").concat(italic ? "italic" : "", "\n\t\t\t\t").concat(strikeThrough ? "strikeThrough" : "", "\n\t\t\t") },
        react_1["default"].createElement(Typography_1.BodyText, { as: "div", className: "\n\t\t\t\t\t".concat(noWrap ? "noWrap" : "", "\n\t\t\t\t\t").concat(ellipsis ? "ellipsis" : "", "\n\t\t\t\t"), style: { maxWidth: maxWidth, textTransform: textTransform }, title: ellipsis ? props.children : undefined }, props.children)));
}
exports["default"] = (0, react_1.memo)(DataViewTd);
var templateObject_1;
