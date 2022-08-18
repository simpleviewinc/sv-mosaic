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
var styled_components_1 = __importDefault(require("styled-components"));
var Button_1 = __importDefault(require("../Button"));
var theme_1 = __importDefault(require("../../theme"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttext-align: center;\n\tfont-weight: normal;\n\tcolor: ", ";\n\tborder-bottom: ", ";\n\tline-height: 1.75;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t& > .bulkText {\n\t\tmargin-right: 6px;\n\t}\n"], ["\n\ttext-align: center;\n\tfont-weight: normal;\n\tcolor: ", ";\n\tborder-bottom: ", ";\n\tline-height: 1.75;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t& > .bulkText {\n\t\tmargin-right: 6px;\n\t}\n"])), theme_1["default"].colors.gray600, theme_1["default"].borders.lightGray);
function DataViewBulkAllBar(props) {
    return (React.createElement(StyledDiv, null,
        React.createElement("span", { className: "bulkText" },
            props.checkedAllPages &&
                React.createElement(react_1.Fragment, null,
                    "All ",
                    React.createElement("b", null, props.count),
                    " records are selected."),
            !props.checkedAllPages &&
                React.createElement(react_1.Fragment, null,
                    "All ",
                    React.createElement("b", null, props.rowCount),
                    " records on this page are selected.")),
        React.createElement(Button_1["default"], { color: "blue", variant: "text", label: !props.checkedAllPages ? "Select All ".concat(props.count, " Records") : "Clear Selection", onClick: props.onCheckAllPagesClick })));
}
exports["default"] = (0, react_1.memo)(DataViewBulkAllBar);
var templateObject_1;
