"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var theme_1 = __importDefault(require("../../theme"));
var styled_components_1 = __importDefault(require("styled-components"));
// Components
var Row_1 = __importDefault(require("./Row"));
var StyledSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tscroll-margin-top: 60px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: calc(100% - 4px); //LAYOUT: Could be reused.\n\tborder: ", ";\n\tmargin-bottom: ", ";\n\n\t& h1 {\n\t\tbackground-color: ", ";\n\t\tmargin: 0px;\n\t\tpadding: 16px 40px;\n\t}\n"], ["\n\tscroll-margin-top: 60px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: calc(100% - 4px); //LAYOUT: Could be reused.\n\tborder: ", ";\n\tmargin-bottom: ", ";\n\n\t& h1 {\n\t\tbackground-color: ", ";\n\t\tmargin: 0px;\n\t\tpadding: 16px 40px;\n\t}\n"])), function (pr) { return !pr.hasTitle ? "2px solid transparent" : "2px solid ".concat(theme_1["default"].colors.grayHover); }, function (pr) { return !pr.hasTitle ? "0px" : "40px"; }, theme_1["default"].colors.grayHover);
var StyledDescription = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\theight: 46px;\n\tmargin: 0px;\n\tpadding: 50px 40px 20px 40px;\n\tfont-size: 16px;\n\tfont-family: ", ";\n"], ["\n\theight: 46px;\n\tmargin: 0px;\n\tpadding: 50px 40px 20px 40px;\n\tfont-size: 16px;\n\tfont-family: ", ";\n"])), theme_1["default"].fontFamily);
var StyledRows = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: grid;\n\trow-gap: 20px;\n\tmargin: 0px;\n\tpadding: ", " ;\n"], ["\n\tdisplay: grid;\n\trow-gap: 20px;\n\tmargin: 0px;\n\tpadding: ", " ;\n"])), function (pr) { return !pr.hasTitle ? "0px" : "0px 40px 50px 40px"; });
var StyledTitle = styled_components_1["default"].h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfont-size: 20px;\n\tfont-family: ", ";\n\tfont-weight: 500;\n"], ["\n\tfont-size: 20px;\n\tfont-family: ", ";\n\tfont-weight: 500;\n"])), theme_1["default"].fontFamily);
var Section = (0, react_1.forwardRef)(function (props, ref) {
    var title = props.title, description = props.description, fieldsDef = props.fieldsDef, rows = props.rows, dispatch = props.dispatch, sectionIdx = props.sectionIdx, state = props.state;
    return (React.createElement(StyledSection, { ref: ref, hasTitle: title, id: sectionIdx },
        title && React.createElement(StyledTitle, null, title),
        description && React.createElement(StyledDescription, null, description),
        rows && (React.createElement(StyledRows, { hasTitle: title }, rows.map(function (row, i) { return (React.createElement(Row_1["default"], { key: "row-".concat(i), row: row, rowIdx: i, sectionIdx: sectionIdx, state: state, fieldsDef: fieldsDef, dispatch: dispatch })); })))));
});
Section.displayName = "Section";
exports["default"] = (0, react_1.memo)(Section);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
