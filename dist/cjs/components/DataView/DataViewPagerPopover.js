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
var Button_1 = __importStar(require("../Button"));
var theme_1 = __importDefault(require("../../theme"));
var PopoverDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-size: 14px;\n\tdisplay: inline-flex;\n\talign-items: center;\n\n\t& > input {\n\t\twidth: 40px;\n\t\tmargin: 0px 8px;\n\t}\n\n\t&.invalid > input {\n\t\toutline: ", " auto 1px;\n\t}\n\n\t& > .goButton {\n\t\tmargin-left: 8px;\n\t}\n"], ["\n\tfont-size: 14px;\n\tdisplay: inline-flex;\n\talign-items: center;\n\n\t& > input {\n\t\twidth: 40px;\n\t\tmargin: 0px 8px;\n\t}\n\n\t&.invalid > input {\n\t\toutline: ", " auto 1px;\n\t}\n\n\t& > .goButton {\n\t\tmargin-left: 8px;\n\t}\n"])), theme_1["default"].colors.red);
function DataViewPagerPopover(props) {
    var buttonPopoverContext = (0, react_1.useContext)(Button_1.ButtonPopoverContext);
    var _a = (0, react_1.useState)({
        currentPage: props.currentPage,
        invalid: false
    }), state = _a[0], setState = _a[1];
    var onChange = function (e) {
        var val = Number(e.currentTarget.value);
        var invalid = !Number.isInteger(val) || val <= 0 || val > props.totalPages;
        setState(__assign(__assign({}, state), { invalid: invalid, currentPage: e.currentTarget.value }));
    };
    var onSubmit = function () {
        if (state.invalid === true) {
            return;
        }
        buttonPopoverContext.onClose();
        props.onSkipChange({ skip: (state.currentPage - 1) * props.limit });
    };
    var onKeyDown = function (e) {
        if (e.key === "Enter") {
            return onSubmit();
        }
    };
    return (React.createElement(PopoverDiv, { className: "\n\t\t\t\t".concat(state.invalid ? "invalid" : "", "\n\t\t\t") },
        React.createElement("span", null, "Page"),
        React.createElement("input", { type: "text", onKeyDown: onKeyDown, onChange: onChange, autoFocus: true }),
        React.createElement("span", null,
            "of ",
            props.totalPages),
        React.createElement(Button_1["default"], { className: "goButton", color: "blue", variant: "contained", size: "small", onClick: onSubmit, label: "Go" })));
}
exports["default"] = (0, react_1.memo)(DataViewPagerPopover);
var templateObject_1;
