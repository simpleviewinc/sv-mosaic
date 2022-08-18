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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var KeyboardBackspace_1 = __importDefault(require("@mui/icons-material/KeyboardBackspace"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var LeftNavDrawer_1 = __importDefault(require("./LeftNavDrawer"));
var LeftNavRoot_1 = __importDefault(require("./LeftNavRoot"));
var LeftNavItems_1 = __importDefault(require("./LeftNavItems"));
var LeftNavItemMobile_1 = __importDefault(require("./LeftNavItemMobile"));
var LeftNavScroller_1 = __importDefault(require("./LeftNavScroller"));
var LeftNavTitle_1 = __importDefault(require("./LeftNavTitle"));
var LeftNavTypes_1 = require("./LeftNavTypes");
var Typography_1 = require("../Typography");
var theme_1 = __importDefault(require("../../theme"));
var TridentIcon_1 = __importDefault(require("../../theme/TridentIcon"));
var RootDiv = (0, styled_components_1["default"])(LeftNavRoot_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 80vw;\n\tmax-width: 250px;\n\n\t& > .header {\n\t\tpadding: 8px 16px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\n\t& > .header > .closeIcon {\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t}\n\n\t& > .backButton {\n\t\tpadding: 8px 16px;\n\t\tcolor: ", ";\n\t\tline-height: 24px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tborder-bottom: 1px solid ", ";\n\t\tcursor: pointer;\n\t}\n\n\t& > .backButton > .buttonLabel {\n\t\tmargin-left: 16px;\n\t\tcolor: white;\n\t}\n"], ["\n\twidth: 80vw;\n\tmax-width: 250px;\n\n\t& > .header {\n\t\tpadding: 8px 16px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\n\t& > .header > .closeIcon {\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t}\n\n\t& > .backButton {\n\t\tpadding: 8px 16px;\n\t\tcolor: ", ";\n\t\tline-height: 24px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tborder-bottom: 1px solid ", ";\n\t\tcursor: pointer;\n\t}\n\n\t& > .backButton > .buttonLabel {\n\t\tmargin-left: 16px;\n\t\tcolor: white;\n\t}\n"])), theme_1["default"].colors.gray600, theme_1["default"].colors.gray400, theme_1["default"].colors.gray400, theme_1["default"].colors.gray700);
function LeftNavMobile(props) {
    var mobileRoot = (0, react_1.useMemo)(function () { return ({
        name: "root",
        label: "Main Menu",
        items: props.items
    }); }, [props.items]);
    var defaultState = {
        history: [mobileRoot]
    };
    var _a = (0, react_1.useState)(defaultState), state = _a[0], setState = _a[1];
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var current = state.history[state.history.length - 1];
    var previous = state.history.length > 1 ? state.history[state.history.length - 2] : undefined;
    var onClose = function () {
        setState(defaultState);
        props.onClose();
    };
    var onNav = function (args) {
        setState(defaultState);
        leftNavContext.onNav(args);
    };
    var onOpen = function (name) {
        var allItems = __spreadArray(__spreadArray([], current.items, true), current.items.filter(function (val) { return val.type === "group"; }).map(function (val) { return val.items; }).flat(), true);
        var item = allItems.find(function (val) { return val.name === name; });
        setState(__assign(__assign({}, state), { history: __spreadArray(__spreadArray([], state.history, true), [item], false) }));
    };
    var onBack = function () {
        var newHistory = state.history.slice(0, -1);
        setState(__assign(__assign({}, state), { history: newHistory }));
    };
    var newContext = __assign(__assign({}, leftNavContext), { onNav: onNav, ItemComponent: LeftNavItemMobile_1["default"] });
    return (React.createElement(LeftNavDrawer_1["default"], { open: props.open, onClose: onClose },
        React.createElement(LeftNavTypes_1.LeftNavContext.Provider, { value: newContext },
            React.createElement(RootDiv, null,
                React.createElement("div", { className: "header" },
                    React.createElement(TridentIcon_1["default"], null),
                    React.createElement(Close_1["default"], { onClick: onClose, className: "closeIcon" })),
                previous !== undefined &&
                    React.createElement(react_1.Fragment, null,
                        React.createElement("div", { className: "backButton", onClick: onBack },
                            React.createElement(KeyboardBackspace_1["default"], null),
                            React.createElement(Typography_1.BodyText, { className: "buttonLabel" }, previous.label)),
                        React.createElement(LeftNavTitle_1["default"], { label: current.label })),
                React.createElement(LeftNavScroller_1["default"], null,
                    React.createElement(LeftNavItems_1["default"], { items: current.items, onOpen: onOpen }))))));
}
exports["default"] = LeftNavMobile;
var templateObject_1;
