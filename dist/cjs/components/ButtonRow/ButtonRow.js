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
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Button_1 = __importDefault(require("../Button"));
var StyledWrapper = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", "\n\t& > .button + .normalButton {\n\t\tmargin-left: 10px;\n\t}\n"], ["\n\t" /* ensures that the NEXT button spaces itself, if it isn't an icon button */, "\n\t& > .button + .normalButton {\n\t\tmargin-left: 10px;\n\t}\n"])), /* ensures that the NEXT button spaces itself, if it isn't an icon button */ "");
function ButtonRow(props) {
    if (props.children && props.buttons) {
        throw new Error("ButtonRow cannot receive both children and a buttons prop");
    }
    var children = (0, react_1.useMemo)(function () {
        if (props.children) {
            return props.children;
        }
        if (props.buttons) {
            return props.buttons.map(function (button, i) {
                return (React.createElement(Button_1["default"], __assign({ key: i }, button)));
            });
        }
        return null;
    }, [props.children, props.buttons]);
    if (children === null) {
        return null;
    }
    return (React.createElement(StyledWrapper, { className: props.className }, children));
}
exports["default"] = (0, react_1.memo)(ButtonRow);
var templateObject_1;
