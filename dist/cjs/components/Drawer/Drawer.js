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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var theme_1 = __importDefault(require("../../theme"));
var DrawerContent = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tfont-size: 14px;\n"], ["\n\tfont-family: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tfont-size: 14px;\n"])), theme_1["default"].fontFamily);
var MUIDrawerStyled = (0, styled_components_1["default"])(Drawer_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tz-index: 1100;\n\t", "\n"], ["\n\tz-index: 1100;\n\t", "\n"
    // interface DrawerProps {
    // 	open: boolean;
    // 	onClose?: () => unknown;
    // 	children: JSX.Element;
    // 	key?: unknown;
    // 	anchor?: "left" | "right";
    // 	sx?: SxProps;
    // }
])), function (pr) { return pr.anchorstyle &&
    ".MuiDrawer-paper {\n".concat((pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "right") &&
        "\n\tbackground: white;\n\ttransition: transform 255ms ease-in-out !important;\n\ttransform: translateX(-25vw) !important;\n", "\n\n").concat((pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && pr.display) &&
        "\n\tbackground: white;\n\ttransition: transform 255ms ease-in-out !important;\n\ttransform: translateX(-25vw) !important;\n", "\n\n").concat((pr.anchorstyle.currentStyle === "left" && pr.anchorstyle.previousStyle === "left" && !pr.display) &&
        "\n\tbackground: white;\n\ttransition: transform 255ms ease-in-out !important;\n\ttransform: translateX(-100vw) !important;\n", "\n\t\t}"); });
// interface DrawerProps {
// 	open: boolean;
// 	onClose?: () => unknown;
// 	children: JSX.Element;
// 	key?: unknown;
// 	anchor?: "left" | "right";
// 	sx?: SxProps;
// }
var Drawer = function (props) {
    var open = props.open, onClose = props.onClose, children = props.children, idx = props.idx, _a = props.anchor, anchor = _a === void 0 ? "right" : _a, display = props.display, anchorstyle = props.anchorstyle, exitCB = props.exitCB;
    var prevStyleRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        prevStyleRef.current = anchorstyle;
    }, [anchorstyle]);
    var _b = (0, react_1.useState)({
        open: false
    }), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        if (open === true) {
            setState(__assign(__assign({}, state), { open: true }));
        }
    }, [open]);
    var onExited = function () {
        setState(__assign(__assign({}, state), { open: false }));
        if (exitCB)
            exitCB();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(MUIDrawerStyled, { key: idx, anchorstyle: { currentStyle: anchorstyle, previousStyle: prevStyleRef.current }, anchor: anchor, display: display, open: open, onClose: onClose, SlideProps: {
                onExited: onExited
            } }, state.open &&
            react_1["default"].createElement(DrawerContent, null, children))));
};
exports["default"] = Drawer;
var templateObject_1, templateObject_2;
