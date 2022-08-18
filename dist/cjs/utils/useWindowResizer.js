"use strict";
exports.__esModule = true;
exports.useWindowResizer = void 0;
var react_1 = require("react");
var theme_1 = require("../theme/theme");
var lodash_1 = require("lodash");
var responsiveBreakpoint = theme_1.BREAKPOINTS.topComponent.responsiveView;
var mobileBreakpoint = theme_1.BREAKPOINTS.mobile;
var bigScreenBreakpoint = theme_1.BREAKPOINTS.topComponent.bigScreenView;
var getView = function () {
    var innerWidth = window.innerWidth;
    if (innerWidth < mobileBreakpoint) {
        return "MOBILE";
    }
    else if (innerWidth < responsiveBreakpoint &&
        innerWidth >= mobileBreakpoint) {
        return "RESPONSIVE";
    }
    else if (innerWidth > bigScreenBreakpoint) {
        return "BIG_DESKTOP";
    }
    else {
        return "DESKTOP";
    }
};
var useWindowResizer = function (type) {
    var _a = (0, react_1.useState)(getView()), view = _a[0], setView = _a[1];
    var setResponsiveness = function () {
        var view = getView();
        setView(view);
    };
    var setResponsivenessDebounced = (0, lodash_1.debounce)(setResponsiveness, 300);
    (0, react_1.useEffect)(function () {
        if (type === "drawer") {
            setView("DRAWER");
        }
        else {
            setResponsivenessDebounced();
            window.addEventListener("resize", setResponsiveness);
            return function () {
                window.removeEventListener("resize", setResponsiveness);
            };
        }
    }, []);
    return { view: view };
};
exports.useWindowResizer = useWindowResizer;
