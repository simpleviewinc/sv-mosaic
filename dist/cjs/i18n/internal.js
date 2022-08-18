"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.defaulti18n = exports.addCoreResourceBundle = exports.addResourceBundle = void 0;
var i18next_1 = __importDefault(require("i18next"));
var common_json_1 = __importDefault(require("./common.json"));
function addResourceBundle(_a) {
    var _b;
    var prefix = _a.prefix, bundle = _a.bundle, namespace = _a.namespace;
    for (var _i = 0, _c = Object.entries(bundle); _i < _c.length; _i++) {
        var _d = _c[_i], lang = _d[0], data = _d[1];
        exports.defaulti18n.addResourceBundle(lang, namespace, (_b = {}, _b[prefix] = data, _b), true, false);
    }
}
exports.addResourceBundle = addResourceBundle;
/**
 * Adds a core resource bundle exposed when using the default i18n or when using the useMosaicSettings() context variant.
 */
function addCoreResourceBundle(_a) {
    var prefix = _a.prefix, bundle = _a.bundle;
    addResourceBundle({ prefix: prefix, bundle: bundle, namespace: "mosaic" });
}
exports.addCoreResourceBundle = addCoreResourceBundle;
exports.defaulti18n = i18next_1["default"].createInstance();
exports.defaulti18n.init({
    resources: {},
    lng: "en",
    fallbackLng: "en"
});
addCoreResourceBundle({
    prefix: "common",
    bundle: common_json_1["default"]
});
