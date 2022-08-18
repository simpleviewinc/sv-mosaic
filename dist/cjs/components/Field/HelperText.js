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
var HelperText_styled_1 = require("./HelperText.styled");
var HelperText = function (_a) {
    var children = _a.children, _b = _a.error, error = _b === void 0 ? false : _b;
    return error ? (React.createElement(HelperText_styled_1.ErrorTextWrapper, null,
        React.createElement(HelperText_styled_1.StyledErrorIcon, { "data-testid": 'error-icon-test-id' }),
        React.createElement(HelperText_styled_1.StyledText, { error: error }, children))) : (React.createElement(HelperText_styled_1.StyledText, { error: error }, children));
};
exports["default"] = HelperText;
