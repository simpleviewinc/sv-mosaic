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
var LeftNavTypes_1 = require("./LeftNavTypes");
var LeftNavMobile_1 = __importDefault(require("./LeftNavMobile"));
var LeftNavDesktop_1 = __importDefault(require("./LeftNavDesktop"));
// how long to wait onMouseLeave to hide the navigation
var leaveTimeout = 300;
// how long to wait onMouseEnter to show the navigation
var enterTimeout = 100;
// the default z-index to use for the drawer system
var defaultZIndex = 100;
function LeftNav(props) {
    var _a;
    for (var _i = 0, _b = props.items; _i < _b.length; _i++) {
        var val = _b[_i];
        if (val.mIcon === undefined) {
            throw new Error("All top-level navigation items require a mIcon for proper display. '".concat(val.name, "' lacks an icon."));
        }
    }
    var zIndex = (_a = props.zIndex) !== null && _a !== void 0 ? _a : defaultZIndex;
    var Component = props.variant === "mobile" ? LeftNavMobile_1["default"] : LeftNavDesktop_1["default"];
    var onNav = (0, react_1.useCallback)(function (args) {
        var _a, _b;
        // if the handler has onNav false, let the browser handle
        if (args.item.onNav === false) {
            return;
        }
        // if we have an href and it was a ctrl click (win) or command + click (mac) then let the browser handle it
        if (((_b = (_a = args.item) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.href) !== undefined && (args.event.ctrlKey || args.event.metaKey)) {
            // let the default browser handler take care of it
            return;
        }
        // we have determined we will handle it, so preventDefault to prevent the browser from taking over
        args.event.preventDefault();
        if (typeof args.item.onNav === "function") {
            // if the nav item has it's own onNav function
            args.item.onNav(args);
            props.onClose();
        }
        else {
            // else we all onNav for the main app to navigate
            props.onNav(args);
        }
    }, [props.onNav]);
    var contextValue = (0, react_1.useMemo)(function () {
        var context = {
            active: props.active,
            variant: props.variant,
            zIndex: zIndex,
            leaveTimeout: leaveTimeout,
            enterTimeout: enterTimeout,
            onNav: onNav
        };
        return context;
    }, [props.variant, zIndex, props.active]);
    return (React.createElement(LeftNavTypes_1.LeftNavContext.Provider, { value: contextValue },
        React.createElement(Component, __assign({}, props))));
}
exports["default"] = LeftNav;
