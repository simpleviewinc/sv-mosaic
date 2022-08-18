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
var lodash_1 = require("lodash");
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
var LeftNavTypes_1 = require("./LeftNavTypes");
var LeftNavItems_1 = __importDefault(require("./LeftNavItems"));
var LeftNavItemDesktop_1 = __importDefault(require("./LeftNavItemDesktop"));
var LeftNavScroller_1 = __importDefault(require("./LeftNavScroller"));
var LeftNavDrawer_1 = __importDefault(require("./LeftNavDrawer"));
var LeftNavRoot_1 = __importDefault(require("./LeftNavRoot"));
var theme_1 = __importDefault(require("../../theme"));
var i18n_1 = require("../../i18n");
var RootDiv = (0, styled_components_1["default"])(LeftNavRoot_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmax-width: 250px;\n\n\t& > .top {\n\t\tflex: 1 1 0;\n\t\toverflow-y: auto;\n\t}\n\n\t& > .bottom {\n\t\tflex: 0 0 auto;\n\t\tborder-top: 1px solid ", ";\n\t}\n"], ["\n\tmax-width: 250px;\n\n\t& > .top {\n\t\tflex: 1 1 0;\n\t\toverflow-y: auto;\n\t}\n\n\t& > .bottom {\n\t\tflex: 0 0 auto;\n\t\tborder-top: 1px solid ", ";\n\t}\n"])), theme_1["default"].colors.gray600);
function LeftNavDesktop(props) {
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var _a = (0, react_1.useState)({
        openName: undefined
    }), state = _a[0], setState = _a[1];
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    var onOpen = function (openName) {
        setState(__assign(__assign({}, state), { openName: openName }));
    };
    var onClose = function () {
        setState(__assign(__assign({}, state), { openName: undefined }));
        props.onClose();
    };
    var onNav = function (args) {
        // when we nav we want to close any flyouts we have
        setState(__assign(__assign({}, state), { openName: undefined }));
        if (args.item.name.startsWith("_internal.")) {
            // if the display switcher was used, we call onVariantChange
            var variant = args.item.name.match(/_internal.(.*)/)[1];
            props.onVariantChange(variant);
        }
        else {
            leftNavContext.onNav(args);
        }
    };
    var showLabel = props.variant === "icons_only" ? false : true;
    var allItems = props.variant === "icons_only" ? props.items.map(function (val) { return (__assign(__assign({}, val), { type: "item" })); }) : props.items;
    var items = allItems.filter(function (_a) {
        var pinned = _a.pinned;
        return pinned === undefined;
    });
    var bottomItems = allItems.filter(function (_a) {
        var pinned = _a.pinned;
        return pinned === "bottom";
    });
    var activeLabel = function (name) {
        if (name === props.variant) {
            return " (".concat(t("mosaic:LeftNav.active"), ")");
        }
        else {
            return "";
        }
    };
    var settingsItem = {
        name: "_internal",
        label: t("mosaic:LeftNav.nav_display"),
        type: "item",
        mIcon: Settings_1["default"],
        items: [
            {
                name: "_internal.full",
                label: "".concat(t("mosaic:LeftNav.full")).concat(activeLabel("full"))
            },
            {
                name: "_internal.icons_only",
                label: "".concat(t("mosaic:LeftNav.icons_only")).concat(activeLabel("icons_only"))
            },
            {
                name: "_internal.hidden",
                label: "".concat(t("mosaic:LeftNav.hidden")).concat(activeLabel("hidden"))
            }
        ]
    };
    bottomItems.push(settingsItem);
    // if the mouse leaves the component and it's children entirely, wait a duration to close
    var onMouseLeave = (0, lodash_1.debounce)(function () {
        setState(__assign(__assign({}, state), { openName: undefined }));
    }, leftNavContext.leaveTimeout);
    var onMouseEnter = function () {
        onMouseLeave.cancel();
    };
    var onScroll = (0, lodash_1.throttle)(function (e) {
        // this scroll listener is being trigger when a flyout scrolls as well, which we don't want
        // so we only trigger if the scroll event happened on this specific element
        if (e.target !== e.currentTarget) {
            return;
        }
        // if the state is already undefined, no reason to re-render
        if (state.openName === undefined) {
            return;
        }
        setState(__assign(__assign({}, state), { openName: undefined }));
    }, 100, { leading: true, trailing: false });
    var scrollerAttrs = {
        onScroll: onScroll
    };
    (0, react_1.useEffect)(function () {
        // cleanup the timeout that may have been set due to enter/leave mechanics
        return function cleanup() {
            onMouseLeave.cancel();
        };
    }, [onMouseLeave]);
    var newContext = __assign(__assign({}, leftNavContext), { onNav: onNav, ItemComponent: LeftNavItemDesktop_1["default"] });
    var navContent = (React.createElement(RootDiv, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement(LeftNavTypes_1.LeftNavContext.Provider, { value: newContext },
            React.createElement(LeftNavScroller_1["default"], { className: "top", attrs: scrollerAttrs },
                React.createElement(LeftNavItems_1["default"], { items: items, showLabel: showLabel, onOpen: onOpen, openName: state.openName })),
            React.createElement("div", { className: "bottom" },
                React.createElement(LeftNavItems_1["default"], { items: bottomItems, showLabel: showLabel, onOpen: onOpen, openName: state.openName })))));
    var drawerContent = (React.createElement(LeftNavDrawer_1["default"], { open: props.open, onClose: onClose }, navContent));
    if (["icons_only", "full"].includes(props.variant)) {
        return navContent;
    }
    else {
        return drawerContent;
    }
}
exports["default"] = LeftNavDesktop;
var templateObject_1;
