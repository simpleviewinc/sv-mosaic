"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var theme_1 = __importDefault(require("../../theme"));
function Spinner(props) {
    return (react_1["default"].createElement(CircularProgress_1["default"], { style: { color: theme_1["default"].colors.blue }, size: 30, className: props.className }));
}
exports["default"] = Spinner;
