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
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var LeftNavTypes_1 = require("./LeftNavTypes");
var Typography_1 = require("../Typography");
var theme_1 = __importDefault(require("../../theme"));
var StyledA = styled_components_1["default"].a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 8px 16px;\n\tcolor: ", ";\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-decoration: none;\n\n\t&.hasItems > .right > .arrow {\n\t\tvisibility: visible;\n\t}\n\n\t&.active {\n\t\tbackground: ", ";\n\t\tcolor: white;\n\t}\n\n\t&.active:hover {\n\t\tbackground: ", ";\n\t}\n\n\t&:hover {\n\t\tbackground: #505057;\n\t}\n\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 0 0px;\n\t\tmin-width: 0;\n\t}\n\n\t&.showLabel > .left {\n\t\tmargin-right: 10px;\n\t}\n\n\t&.showLabel > .left > .icon {\n\t\tmargin-right: 16px;\n\t}\n\n\t& > .left > .navLabel {\n\t\tcolor: ", ";\n\t\tfont-size: 14px;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t& > .right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 0 0 auto;\n\t}\n\n\t& > .right > * {\n\t\tfont-size: 20px;\n\t\tvisibility: hidden;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 8px 16px;\n\tcolor: ", ";\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-decoration: none;\n\n\t&.hasItems > .right > .arrow {\n\t\tvisibility: visible;\n\t}\n\n\t&.active {\n\t\tbackground: ", ";\n\t\tcolor: white;\n\t}\n\n\t&.active:hover {\n\t\tbackground: ", ";\n\t}\n\n\t&:hover {\n\t\tbackground: #505057;\n\t}\n\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 0 0px;\n\t\tmin-width: 0;\n\t}\n\n\t&.showLabel > .left {\n\t\tmargin-right: 10px;\n\t}\n\n\t&.showLabel > .left > .icon {\n\t\tmargin-right: 16px;\n\t}\n\n\t& > .left > .navLabel {\n\t\tcolor: ", ";\n\t\tfont-size: 14px;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t& > .right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 0 0 auto;\n\t}\n\n\t& > .right > * {\n\t\tfont-size: 20px;\n\t\tvisibility: hidden;\n\t}\n"])), theme_1["default"].colors.gray400, theme_1["default"].colors.blue, theme_1["default"].colors.blueHover, theme_1["default"].colors.gray200);
function LeftNavItem(props, ref) {
    var item = props.item, _a = props.showLabel, showLabel = _a === void 0 ? true : _a, _b = props.attrs, attrs = _b === void 0 ? {} : _b;
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var hasItems = item.items !== undefined;
    // if this item is active, or it has a child that is active
    var active = leftNavContext.active && (leftNavContext.active === item.name || leftNavContext.active.startsWith("".concat(item.name, ".")));
    // no icon and if we aren't showing the label, nothing to show
    if (!item.mIcon && !showLabel) {
        return null;
    }
    return (React.createElement(StyledA, __assign({}, item.attrs, attrs, { ref: ref, className: "\n\t\t\t\t".concat(hasItems ? "hasItems" : "", "\n\t\t\t\t").concat(showLabel ? "showLabel" : "", "\n\t\t\t\t").concat(active ? "active" : "", "\n\t\t\t"), title: item.label }),
        React.createElement("span", { className: "left" },
            item.mIcon &&
                React.createElement(item.mIcon, { className: "icon" }),
            showLabel &&
                React.createElement(Typography_1.BodyText, { className: "navLabel" }, item.label)),
        showLabel &&
            React.createElement("span", { className: "right" },
                React.createElement(ChevronRight_1["default"], { className: "arrow" }))));
}
exports["default"] = (0, react_1.forwardRef)(LeftNavItem);
var templateObject_1;
