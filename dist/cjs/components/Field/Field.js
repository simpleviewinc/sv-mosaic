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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var Field_styled_1 = require("./Field.styled");
var Label_1 = __importDefault(require("./Label"));
var HelperText_1 = __importDefault(require("./HelperText"));
var InstructionText_1 = __importDefault(require("./InstructionText"));
var theme_1 = require("../../theme");
var lodash_1 = require("lodash");
var Field = function (_a) {
    var _b;
    var children = _a.children, error = _a.error, fieldDef = _a.fieldDef, colsInRow = _a.colsInRow, value = _a.value;
    var _c = (0, react_1.useState)(false), renderAsTooltip = _c[0], setRenderAsTooltip = _c[1];
    var description = (0, react_1.useRef)(null);
    var fieldContainer = (0, react_1.useRef)(null);
    var fieldRef = (0, react_1.useRef)(null);
    var errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    var handleDescriptionRender = function () {
        var container = fieldContainer.current;
        var containerStyle = container && window.getComputedStyle(container);
        var widthcontainer = containerStyle && parseFloat(containerStyle.getPropertyValue("width"));
        var field = fieldRef.current;
        var fieldStyle = field && window.getComputedStyle(field);
        var fieldWidth = fieldStyle && parseFloat(fieldStyle.getPropertyValue("width"));
        setRenderAsTooltip(false);
        if (widthcontainer - fieldWidth > 20 && renderAsTooltip === true) {
            setRenderAsTooltip(false);
        }
        else {
            if (description.current) {
                var node = description.current;
                var nodeStyle = window.getComputedStyle(node);
                var marginLeft = parseFloat(nodeStyle.getPropertyValue("margin-left"));
                if (marginLeft > 20) {
                    setRenderAsTooltip(false);
                }
                else {
                    setRenderAsTooltip(true);
                }
            }
        }
    };
    var handleDescriptionDebounced = (0, lodash_1.debounce)(handleDescriptionRender, 300);
    (0, react_1.useEffect)(function () {
        if (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText)
            if (colsInRow === 1) {
                if ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "imageUpload" || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table") {
                    setRenderAsTooltip(true);
                }
                else {
                    handleDescriptionDebounced();
                    window.addEventListener("resize", handleDescriptionDebounced);
                    return function () {
                        window.removeEventListener("resize", handleDescriptionDebounced);
                    };
                }
            }
            else {
                setRenderAsTooltip(true);
            }
    }, []);
    var renderBottomText = function () {
        if ((errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required)))) {
            return React.createElement(HelperText_1["default"], { error: !!error }, error);
        }
        else if (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.helperText) {
            return React.createElement(HelperText_1["default"], null, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.helperText);
        }
    };
    var labelMargin = (0, react_1.useMemo)(function () {
        var labelMargin = "8px";
        if (
        //fieldDef?.type === 'advancedSelection' ||
        (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "imageUpload" ||
            (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "address") {
            return (labelMargin = "16px");
        }
        else if ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table") {
            return (labelMargin = "13px");
        }
        return labelMargin;
    }, [fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type]);
    return (React.createElement(Field_styled_1.StyledFieldContainer, { className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, style: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.style },
        React.createElement(Field_styled_1.StyledFieldWrapper, { error: errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required)), size: ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "chip" || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "linkSetup") ? theme_1.Sizes.md : (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table" ? "fit-content" : fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, ref: fieldRef },
            (((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label) && ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label) === null || _b === void 0 ? void 0 : _b.length) > 0)
                || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.maxCharacters)
                || ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText) && renderAsTooltip))
                &&
                    React.createElement(Label_1["default"], { labelMargin: labelMargin, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required, htmlFor: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name, maxCharacters: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.maxCharacters, value: value, tooltip: renderAsTooltip, instructionText: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText }, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label),
            children,
            renderBottomText()),
        ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText) && colsInRow === 1 && !renderAsTooltip) &&
            React.createElement(InstructionText_1["default"], { ref: description, tooltip: renderAsTooltip, labelMargin: labelMargin }, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText)));
};
exports["default"] = (0, react_1.memo)(Field);
