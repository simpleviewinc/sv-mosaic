"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledChipGroup = void 0;
var theme_1 = __importDefault(require("../../theme"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledChipGroup = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& .MuiChip-root {\n\t\tborder: 1px solid ", ";\n  \t\tmargin-right: 12px;\n\t}\n\n\t& .MuiChip-root:last-child {\n  \t\tmargin-right: 0px;\n\t}\n"], ["\n\t& .MuiChip-root {\n\t\tborder: 1px solid ", ";\n  \t\tmargin-right: 12px;\n\t}\n\n\t& .MuiChip-root:last-child {\n  \t\tmargin-right: 0px;\n\t}\n"])), function (pr) { return pr.error ? theme_1["default"].colors.red : "transparent"; });
var templateObject_1;
