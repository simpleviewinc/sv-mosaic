"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.BadgeWrapper = exports.Badge = exports.SectionWrapper = exports.StyledLink = exports.SidebarWrap = exports.LinkWrapper = exports.SideNavStyle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
exports.SideNavStyle = styled_components_1["default"].nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: white;\n\tborder: 2px solid ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 196px;\n\tmin-width: 196px;\n\theight: 100%;\n\toverflow-y: auto;\n"], ["\n\tbackground: white;\n\tborder: 2px solid ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 196px;\n\tmin-width: 196px;\n\theight: 100%;\n\toverflow-y: auto;\n"])), theme_1["default"].colors.gray200);
exports.LinkWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  \talign-items: center;\n  \tdisplay: flex;\n  \tgap: 8px;\n\tbackground-color: ", ";\n\t\tborder-left: ", ";\n\tpadding: 12px 20px;\n\n\tspan {\n\t\tfont-weight: ", ";\n\t}\n\n\t&:hover {\n\t\t.MuiSvgIcon-root:not(:first-child) {\n\t\t\tdisplay: block;\n\t\t\tcolor: ", ";\n\t\t\tmargin-right: -12px;\n\t\t\tmargin-left: auto;\n\t\t\twidth: 16px;\n\t\t}\n\t}\n\n\t.MuiSvgIcon-root:first-child {\n\t\tcolor: ", ";\n\t\twidth: 16px;\n\t}\n\n\t.MuiSvgIcon-root:not(:first-child) {\n\t\tdisplay: none;\n\t}\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  \talign-items: center;\n  \tdisplay: flex;\n  \tgap: 8px;\n\tbackground-color: ", ";\n\t\tborder-left: ", ";\n\tpadding: 12px 20px;\n\n\tspan {\n\t\tfont-weight: ", ";\n\t}\n\n\t&:hover {\n\t\t.MuiSvgIcon-root:not(:first-child) {\n\t\t\tdisplay: block;\n\t\t\tcolor: ", ";\n\t\t\tmargin-right: -12px;\n\t\t\tmargin-left: auto;\n\t\t\twidth: 16px;\n\t\t}\n\t}\n\n\t.MuiSvgIcon-root:first-child {\n\t\tcolor: ", ";\n\t\twidth: 16px;\n\t}\n\n\t.MuiSvgIcon-root:not(:first-child) {\n\t\tdisplay: none;\n\t}\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (pr) {
    return pr.idx === pr.selectedLink ? theme_1["default"].colors.gray200 : "";
}, function (pr) {
    return pr.idx === pr.selectedLink ? "4px solid #FCB731" : "4px solid transparent";
}, function (pr) {
    return pr.idx === pr.selectedLink ? theme_1["default"].fontWeight.semiBold : "";
}, theme_1["default"].colors.gray600, theme_1["default"].colors.almostBlack, theme_1["default"].colors.gray200);
exports.SidebarWrap = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  \tfont-family: ", ";\n\tdiv:last-child {\n\t\tborder-bottom: 0;\n\t};\n"], ["\n  \tfont-family: ", ";\n\tdiv:last-child {\n\t\tborder-bottom: 0;\n\t};\n"])), theme_1["default"].fontFamily);
exports.StyledLink = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\twidth: auto;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 20px;\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\twidth: auto;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 20px;\n"])), theme_1["default"].colors.almostBlack);
exports.SectionWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tborder-bottom: 2px solid ", ";\n\tcursor: pointer;\n"], ["\n\tborder-bottom: 2px solid ", ";\n\tcursor: pointer;\n"])), theme_1["default"].colors.gray200);
exports.Badge = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 10px;\n\tfont-weight: ", ";\n"], ["\n\tcolor: ", ";\n\tfont-size: 10px;\n\tfont-weight: ", ";\n"])), theme_1["default"].colors.gray700, theme_1["default"].fontWeight.semiBold);
exports.BadgeWrapper = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\talign-items: center;\n\tbackground-color: ", ";\n\tborder-radius: 20px;\n\tdisplay: flex;\n\theight: 20px;\n\tjustify-content: center;\n\tmin-width: 20px;\n"], ["\n\talign-items: center;\n\tbackground-color: ", ";\n\tborder-radius: 20px;\n\tdisplay: flex;\n\theight: 20px;\n\tjustify-content: center;\n\tmin-width: 20px;\n"])), theme_1["default"].colors.simplyGold);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
