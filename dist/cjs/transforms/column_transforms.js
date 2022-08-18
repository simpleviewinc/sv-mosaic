"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.transform_thumbnail = exports.transform_join = exports.transform_mapGet = exports.transform_get = exports.transform_dateFormat = exports.transform_boolean = void 0;
var lodash_1 = require("lodash");
var date_fns_1 = require("date-fns");
var react_1 = require("react");
var Image_1 = __importDefault(require("../components/Image"));
function transform_boolean() {
    return function (_a) {
        var data = _a.data;
        if (data === true) {
            return "Yes";
        }
        else {
            return "No";
        }
    };
}
exports.transform_boolean = transform_boolean;
function transform_dateFormat() {
    return function (_a) {
        var data = _a.data;
        return (0, date_fns_1.format)(data, "M/d/yyyy");
    };
}
exports.transform_dateFormat = transform_dateFormat;
function transform_get(path) {
    return function (_a) {
        var data = _a.data;
        return (0, lodash_1.get)(data, path);
    };
}
exports.transform_get = transform_get;
function transform_mapGet(path) {
    return function (_a) {
        var data = _a.data;
        var results = (0, lodash_1.map)(data, function (obj) {
            return (0, lodash_1.get)(obj, path);
        });
        // filters out undefined, null values
        return results.filter(function (val) { return val; });
    };
}
exports.transform_mapGet = transform_mapGet;
function transform_join() {
    return function (_a) {
        var data = _a.data;
        return data.join(", ");
    };
}
exports.transform_join = transform_join;
function transform_thumbnail(_a) {
    var width = _a.width, height = _a.height;
    return function (_a) {
        var data = _a.data;
        var newUrl = data.replace(/\/upload\//, "/upload/c_fill,h_".concat(height, ",w_").concat(width, "/"));
        var element = (0, react_1.createElement)(Image_1["default"], {
            src: newUrl,
            className: "transform_thumbnail"
        }, null);
        return element;
    };
}
exports.transform_thumbnail = transform_thumbnail;
