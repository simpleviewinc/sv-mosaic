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
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\toverflow-y: auto;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 12px;\n\t}\n\n\t&::-webkit-scrollbar-track {\n\t\tbackground-color: #26262a;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #7a7a7d;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #5b5b5d;\n\t}\n"], ["\n\toverflow-y: auto;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 12px;\n\t}\n\n\t&::-webkit-scrollbar-track {\n\t\tbackground-color: #26262a;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #7a7a7d;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #5b5b5d;\n\t}\n"])));
function LeftNavScroller(props) {
    var _a = props.attrs, attrs = _a === void 0 ? {} : _a;
    return (React.createElement(StyledDiv, __assign({}, attrs, { className: props.className }), props.children));
}
exports["default"] = LeftNavScroller;
var templateObject_1;
