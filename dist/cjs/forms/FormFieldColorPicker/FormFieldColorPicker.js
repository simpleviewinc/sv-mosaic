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
// External libraries
var react_color_1 = require("react-color");
// Styles
var ColorPicker_styled_1 = require("./ColorPicker.styled");
var FormFieldColorPicker = function (props) {
    var fieldDef = props.fieldDef, value = props.value, onChange = props.onChange;
    // State variables
    var _a = (0, react_1.useState)(false), displayColorPicker = _a[0], setDisplayColorPicker = _a[1];
    var _b = (0, react_1.useState)(null), color = _b[0], setColor = _b[1];
    var handleClick = function () {
        setDisplayColorPicker(!displayColorPicker);
    };
    var handleClose = function () {
        setDisplayColorPicker(false);
    };
    var onColorChange = function (color) {
        setColor(color);
        onChange(color.hex);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ColorPicker_styled_1.ColorContainer, { displayColorPicker: displayColorPicker, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled },
            React.createElement(ColorPicker_styled_1.ColorDiv, { "data-testid": 'colordiv-test', disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: (color === null || color === void 0 ? void 0 : color.rgb) || value || { r: 0, g: 141, b: 168, a: 1 }, onClick: handleClick })),
        displayColorPicker && !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) && (React.createElement(ColorPicker_styled_1.PopOver, null,
            React.createElement(ColorPicker_styled_1.Cover, { onClick: handleClose }),
            React.createElement(react_color_1.SketchPicker, { color: value ? color === null || color === void 0 ? void 0 : color.rgb : "#008DA8", onChange: onColorChange })))));
};
exports["default"] = (0, react_1.memo)(FormFieldColorPicker);
