"use strict";
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
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var InstructionText_styled_1 = require("./InstructionText.styled");
var InstructionText = (0, react_1.forwardRef)(function (props, ref) {
    var children = props.children, tooltip = props.tooltip, labelMargin = props.labelMargin;
    return (React.createElement(InstructionText_styled_1.InstructionTextWrapper, { labelMargin: labelMargin, className: "instruction-text-".concat(!tooltip ? "right" : "tooltip"), ref: ref },
        React.createElement(InstructionText_styled_1.StyledInstructionText, null, children)));
});
InstructionText.displayName = "InstructionText";
exports["default"] = InstructionText;
