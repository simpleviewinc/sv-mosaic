"use strict";
exports.__esModule = true;
var react_1 = require("react");
var i18n_1 = require("../i18n");
function useMosaicSettings(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.i18nNamespace, i18nNamespace = _c === void 0 ? "app" : _c, _d = _b.i18nInitialLocale, i18nInitialLocale = _d === void 0 ? "en" : _d;
    var ns = (0, react_1.useMemo)(function () { return [i18nNamespace, "mosaic"]; }, []);
    // due to glitches in react-i18next we cannot spin a new instance when deps change, it cause all sorts of systems to get out of whack
    var i18n = (0, react_1.useMemo)(function () {
        var i18n = i18n_1.defaulti18n.cloneInstance({
            lng: i18nInitialLocale,
            ns: ns,
            defaultNS: i18nNamespace
        });
        return i18n;
    }, []);
    var returnObj = (0, react_1.useMemo)(function () {
        return {
            i18n: i18n
        };
    }, [i18n]);
    return returnObj;
}
exports["default"] = useMosaicSettings;
