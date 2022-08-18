"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.EditorWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.EditorWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \t.jodit-container {\n\t\twidth: 620px !important;\n\t\tborder: none !important;\n\t}\n\n\t.jodit-toolbar__box {\n\t\tbackground-color: white !important;\n\t\tborder-radius: 0px !important;\n\t\tmargin-bottom: 8px !important;\n\t\tborder: ", " !important;\n\t}\n\n\t.jodit-workplace {\n\t\tbackground-color: ", " !important;\n\t\tmax-height: 200px !important;\n\t\toverflow-y: auto !important;\n\t\tpadding: 16px !important;\n\t\tborder: ", " !important;\n\n\t\t& .jodit-wysiwyg {\n\t\t\tpadding: 0px !important;\n\t\t\tmargin: 0px !important;\n\t\t\twidth: 100% !important;\n\t\t\theight: 100% !important;\n\n\t\t\t& p:first-child {\n\t\t\t\tmargin-top: 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t&:focus-within {\n\t\t\tbox-shadow: 0px 0px 5px #1A1A1A29;\n\t\t\tborder: 1px solid ", " !important;\n\t\t}\n\t}\n\n\t.jodit-placeholder {\n\t\tpadding: 16px !important;\n\t}\n\n\t.jodit-workplace:focus-within + .jodit-status-bar {\n\t\tbox-shadow: 0px 0px 5px #1A1A1A29;\n\t\tborder: 1px solid ", " !important;\n\t\tborder-top: none !important;\n\t}\n\n\t.jodit-status-bar {\n\t\tborder-radius: 0px !important;\n\t\tborder: ", " !important;\n\t\tborder-top: none !important;\n\t\tfont-family: ", ";\n\t\tbackground-color: ", ";\n\t}\n"], ["\n  \t.jodit-container {\n\t\twidth: 620px !important;\n\t\tborder: none !important;\n\t}\n\n\t.jodit-toolbar__box {\n\t\tbackground-color: white !important;\n\t\tborder-radius: 0px !important;\n\t\tmargin-bottom: 8px !important;\n\t\tborder: ", " !important;\n\t}\n\n\t.jodit-workplace {\n\t\tbackground-color: ", " !important;\n\t\tmax-height: 200px !important;\n\t\toverflow-y: auto !important;\n\t\tpadding: 16px !important;\n\t\tborder: ", " !important;\n\n\t\t& .jodit-wysiwyg {\n\t\t\tpadding: 0px !important;\n\t\t\tmargin: 0px !important;\n\t\t\twidth: 100% !important;\n\t\t\theight: 100% !important;\n\n\t\t\t& p:first-child {\n\t\t\t\tmargin-top: 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t&:focus-within {\n\t\t\tbox-shadow: 0px 0px 5px #1A1A1A29;\n\t\t\tborder: 1px solid ", " !important;\n\t\t}\n\t}\n\n\t.jodit-placeholder {\n\t\tpadding: 16px !important;\n\t}\n\n\t.jodit-workplace:focus-within + .jodit-status-bar {\n\t\tbox-shadow: 0px 0px 5px #1A1A1A29;\n\t\tborder: 1px solid ", " !important;\n\t\tborder-top: none !important;\n\t}\n\n\t.jodit-status-bar {\n\t\tborder-radius: 0px !important;\n\t\tborder: ", " !important;\n\t\tborder-top: none !important;\n\t\tfont-family: ", ";\n\t\tbackground-color: ", ";\n\t}\n"])), function (pr) { return (pr.error ? theme_1["default"].borders.error : theme_1["default"].borders.simplyGray); }, theme_1["default"].colors.gray100, function (pr) {
    if (pr.error)
        return theme_1["default"].borders.error;
    return theme_1["default"].borders.simplyGray;
}, theme_1["default"].colors.almostBlack, theme_1["default"].colors.almostBlack, function (pr) {
    if (pr.error)
        return theme_1["default"].borders.error;
    return theme_1["default"].borders.simplyGray;
}, theme_1["default"].fontFamily, theme_1["default"].colors.grayHover);
var templateObject_1;
