"use strict";
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
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var LeftNavTypes_1 = require("./LeftNavTypes");
// set aside the drawerProps so they are static and do not change between renders to prevent glitches with material-ui
var drawerProps = {
    anchor: "left",
    variant: "temporary",
    ModalProps: { disableEnforceFocus: true },
    PaperProps: { style: { borderRight: "0px", zIndex: "auto" } }
};
/** Renders the drawer used in all variants of the LeftNav. */
function LeftNavDrawer(props) {
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var drawerStyle = (0, react_1.useMemo)(function () { return ({
        zIndex: leftNavContext.zIndex
    }); }, [leftNavContext.zIndex]);
    return (React.createElement(Drawer_1["default"], __assign({}, drawerProps, { open: props.open, onClose: props.onClose, style: drawerStyle }), props.children));
}
exports["default"] = LeftNavDrawer;
