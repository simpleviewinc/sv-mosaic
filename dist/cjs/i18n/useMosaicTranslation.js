"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var MosaicContext_1 = __importDefault(require("../components/MosaicContext"));
function useMosaicTranslation() {
    var context = (0, react_1.useContext)(MosaicContext_1["default"]);
    var _a = (0, react_i18next_1.useTranslation)(context.i18n.options.ns[0], {
        i18n: context.i18n
    }), t = _a.t, i18n = _a.i18n;
    return {
        t: t,
        i18n: i18n
    };
}
exports["default"] = useMosaicTranslation;
