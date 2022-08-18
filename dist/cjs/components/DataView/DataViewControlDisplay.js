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
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Button_1 = __importDefault(require("../Button"));
var MenuSelect_1 = __importDefault(require("../MenuSelect"));
var theme_1 = __importDefault(require("../../theme"));
var StyledSpan = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& .labelIcon {\n\t\tfont-size: ", ";\n\t}\n"], ["\n\t& .labelIcon {\n\t\tfont-size: ", ";\n\t}\n"])), theme_1["default"].iconFontSize);
function DataViewControlDisplay(props) {
    var activeDisplay = props.displayOptions.find(function (val) { return val.name === props.display; });
    var Icon = activeDisplay.mIcon;
    var options = props.displayOptions.map(function (val) {
        return {
            value: val.name,
            label: val.label,
            mIcon: val.mIcon
        };
    });
    var menuContent = (React.createElement(MenuSelect_1["default"], { options: options, onChange: props.onDisplayChange, value: props.display }));
    return (React.createElement(StyledSpan, null,
        React.createElement(Button_1["default"], { variant: "text", color: "black", label: React.createElement(Icon, null), iconPosition: "right", size: "small", mIcon: ExpandMore_1["default"], mIconColor: theme_1["default"].colors.gray600, menuContent: menuContent })));
}
exports["default"] = (0, react_1.memo)(DataViewControlDisplay);
var templateObject_1;
