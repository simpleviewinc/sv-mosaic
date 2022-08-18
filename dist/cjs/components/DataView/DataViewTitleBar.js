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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var DataViewViewControls_1 = __importDefault(require("./DataViewViewControls"));
var Typography_1 = require("../Typography");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\twidth: 100%;\n\t\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t\n\t& > .left > *:last-child {\n\t\tdisplay: flex;\n\t\tmargin-right: 0px;\n\t}\n\t\n\t& > .left > h1 {\n\t\tmargin-right: 20px;\n\t\tmargin-bottom: 0px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\twidth: 100%;\n\t\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t\n\t& > .left > *:last-child {\n\t\tdisplay: flex;\n\t\tmargin-right: 0px;\n\t}\n\t\n\t& > .left > h1 {\n\t\tmargin-right: 20px;\n\t\tmargin-bottom: 0px;\n\t}\n"])));
function DataViewTitleBar(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            { name: "title", type: "string" },
            { name: "buttons", type: "array" },
            { name: "savedViewEnabled", type: "boolean" },
            { name: "savedView", type: "object" },
            { name: "savedViewState", type: "object" },
            { name: "savedViewCallbacks", type: "object" },
            { name: "savedViewAllowSharedViewSave", type: "boolean" },
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var buttons = (0, react_1.useMemo)(function () {
        if (props.buttons === undefined) {
            return;
        }
        return props.buttons.map(function (button) {
            var name = button.name, buttonArgs = __rest(button, ["name"]);
            buttonArgs.attrs = { "data-mosaic-id": "button_".concat(name) };
            return buttonArgs;
        });
    }, [props.buttons]);
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement("div", { className: "left" },
            props.title &&
                react_1["default"].createElement(Typography_1.H1, null, props.title),
            props.buttons &&
                react_1["default"].createElement(ButtonRow_1["default"], { buttons: buttons })),
        props.savedViewEnabled &&
            react_1["default"].createElement(DataViewViewControls_1["default"], { savedView: props.savedView, savedViewState: props.savedViewState, savedViewCallbacks: props.savedViewCallbacks, savedViewAllowSharedViewSave: props.savedViewAllowSharedViewSave })));
}
exports["default"] = DataViewTitleBar;
var templateObject_1;
