"use strict";
exports.__esModule = true;
exports.filterAction = void 0;
var lodash_1 = require("lodash");
var filterAction = function (action, args) {
    if (args === void 0) { args = {}; }
    if (action.show === undefined) {
        return true;
    }
    var shows = (0, lodash_1.isArray)(action.show) ? action.show : [action.show];
    var isValid = shows.every(function (show) {
        if (typeof show === "boolean") {
            return show;
        }
        else if (typeof show === "function") {
            return show(args);
        }
        else {
            throw new Error("Action ".concat(action.name, ".show must be boolean or a function"));
        }
    });
    return isValid;
};
exports.filterAction = filterAction;
