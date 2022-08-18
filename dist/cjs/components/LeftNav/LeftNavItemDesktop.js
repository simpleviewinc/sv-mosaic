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
var lodash_1 = require("lodash");
var LeftNavTypes_1 = require("./LeftNavTypes");
var LeftNavItem_1 = __importDefault(require("./LeftNavItem"));
var LeftNavFlyout_1 = __importDefault(require("./LeftNavFlyout"));
function LeftNavItemDesktop(props) {
    var openName = props.openName, onOpen = props.onOpen, item = props.item;
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var aRef = (0, react_1.useRef)(null);
    var open = item.name === openName;
    var hasItems = item.items !== undefined && item.items.length > 0;
    var onNavClick = (0, react_1.useCallback)(function (event) {
        leftNavContext.onNav({ item: item, event: event });
    }, [leftNavContext.onNav]);
    var onPointerMove = (0, lodash_1.throttle)(function () {
        if (openName === item.name) {
            // item already open, no need for action
            return;
        }
        onOpen(item.name);
    }, leftNavContext.enterTimeout, { leading: false, trailing: true });
    // On a desktop device, a touch or swipe triggers onPointerEnter and possibly onClick if it lingers long enough
    // because of this we can cancel the onPointerMove, and rely on the onClick event picking it up.
    // On a mobile device, we're relying on onClick anyways, we can cancel the event without harm.
    var onTouchStart = function (e) {
        onPointerMove.cancel();
    };
    var onOpenChildrenClick = function (e) {
        onOpen(item.name);
    };
    var onPointerLeave = function (e) {
        onPointerMove.cancel();
    };
    // for browsers like Safari which do not support onPointerEnter/onPointerLeave, we are forced to use onMouseMove/onMouseLeave
    var onMouseMove = "PointerEvent" in window ? undefined : onPointerMove;
    var onMouseLeave = "PointerEvent" in window ? undefined : onPointerLeave;
    // If this item is unmounted we need to clear any lingering events
    (0, react_1.useEffect)(function () {
        return function cleanup() {
            onPointerMove.cancel();
        };
    }, [onPointerMove]);
    var attrs = {
        onPointerMove: onPointerMove,
        onPointerLeave: onPointerLeave,
        onTouchStart: onTouchStart,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        onClick: hasItems ? onOpenChildrenClick : onNavClick
    };
    return (React.createElement(react_1.Fragment, null,
        React.createElement(LeftNavItem_1["default"], __assign({}, props, { ref: aRef, attrs: attrs })),
        item.items && open &&
            React.createElement(LeftNavFlyout_1["default"], { parent: item, anchorEl: aRef.current })));
}
exports["default"] = LeftNavItemDesktop;
