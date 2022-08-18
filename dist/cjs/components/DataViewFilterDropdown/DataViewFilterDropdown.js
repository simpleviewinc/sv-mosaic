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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var theme_1 = __importDefault(require("../../theme"));
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tpadding: 10px;\n\tborder-radius: 8px;\n\tbackground: white;\n"], ["\n\tfont-family: ", ";\n\tpadding: 10px;\n\tborder-radius: 8px;\n\tbackground: white;\n"])), theme_1["default"].fontFamily);
function DataViewFilterDropdown(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            { name: "anchorEl", type: "object" },
            { name: "children", type: "object" },
            { name: "onClose", type: "function" },
            { name: "onEntered", type: "function" },
            { name: "onExited", type: "function" }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    // track whether the content of the dropdown should be visible
    var _a = (0, react_1.useState)(false), exists = _a[0], setExists = _a[1];
    // if the anchorEl exists, we phase in
    (0, react_1.useEffect)(function () {
        if (Boolean(props.anchorEl) === true) {
            setExists(true);
        }
    }, [props.anchorEl]);
    // wait for the animation to complete before hiding
    var onExited = function () {
        setExists(false);
        if (props.onExited) {
            props.onExited();
        }
    };
    // avoid processing the content of the dropdown until we have been invoked
    if (exists === false) {
        return null;
    }
    return (react_1["default"].createElement(Popover_1["default"], { anchorEl: props.anchorEl, onClose: props.onClose, open: Boolean(props.anchorEl), TransitionProps: {
            onExited: onExited,
            onEntered: props.onEntered
        } },
        react_1["default"].createElement(StyledWrapper, null, props.children)));
}
exports["default"] = DataViewFilterDropdown;
var templateObject_1;
