"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.customTheme = void 0;
var theme_1 = __importDefault(require("../../../theme"));
var styles_1 = require("@mui/material/styles");
exports.customTheme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            main: theme_1["default"].colors.blueTeal
        }
    }
});
