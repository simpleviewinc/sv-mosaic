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
var Popper_1 = __importDefault(require("@mui/material/Popper"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var lodash_1 = require("lodash");
var LeftNavTypes_1 = require("./LeftNavTypes");
var LeftNavTitle_1 = __importDefault(require("./LeftNavTitle"));
var LeftNavItems_1 = __importDefault(require("./LeftNavItems"));
var LeftNavScroller_1 = __importDefault(require("./LeftNavScroller"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t&.paper {\n\t\tbackground-color: #404045;\n\t\tmax-width: 250px;\n\t\tmax-height: 80vh;\n\t\tdisplay: flex;\n\t}\n"], ["\n\t&.paper {\n\t\tbackground-color: #404045;\n\t\tmax-width: 250px;\n\t\tmax-height: 80vh;\n\t\tdisplay: flex;\n\t}\n"])));
// set aside the popperProps so they do not mutate between renders, cause the Popper system to go haywire and move the component around strangely
// check this https://popper.js.org/docs/v2/ to know more about the PopperProps
var popperProps = {
    open: true,
    placement: "right",
    modifiers: [
        // this prevents popper from using translated3d which causes blurry
        // flyouts in Chrome, instead it will just use top/left positioning
        {
            name: "preventOverflow",
            enabled: true,
            options: {
                rootBoundary: "viewport"
            }
        },
        {
            name: "computeStyles",
            options: {
                gpuAcceleration: false
            }
        },
    ]
};
function LeftNavFlyout(props) {
    var _a = (0, react_1.useState)({
        openName: undefined
    }), state = _a[0], setState = _a[1];
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var onOpen = function (openName) {
        setState(__assign(__assign({}, state), { openName: openName }));
    };
    var onScroll = (0, lodash_1.throttle)(function (e) {
        // this scroll listener is being triggered when a scroll occurs within a child, which we don't want
        // so we only trigger if the scroll event happened on this specific flyout
        if (e.target !== e.currentTarget) {
            return;
        }
        if (state.openName === undefined) {
            return;
        }
        setState(__assign(__assign({}, state), { openName: undefined }));
    }, 100, { leading: true, trailing: false });
    var scrollerAttrs = {
        onScroll: onScroll
    };
    var style = (0, react_1.useMemo)(function () { return ({
        zIndex: leftNavContext.zIndex + 1
    }); }, [leftNavContext.zIndex]);
    return (React.createElement(Popper_1["default"], __assign({}, popperProps, { anchorEl: props.anchorEl, style: style }),
        React.createElement(Paper_1["default"], { elevation: 3, component: StyledDiv, className: "paper" },
            React.createElement(LeftNavScroller_1["default"], { attrs: scrollerAttrs },
                React.createElement(LeftNavTitle_1["default"], { label: props.parent.label }),
                React.createElement(LeftNavItems_1["default"], { items: props.parent.items, openName: state.openName, onOpen: onOpen })))));
}
exports["default"] = LeftNavFlyout;
var templateObject_1;
