"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.formActions = exports.useForm = exports["default"] = void 0;
var Form_1 = require("./Form");
__createBinding(exports, Form_1, "default");
__exportStar(require("./Form"), exports);
__exportStar(require("./FormTypes"), exports);
var formUtils_1 = require("./formUtils");
__createBinding(exports, formUtils_1, "useForm");
var formActions_1 = require("./formActions");
__createBinding(exports, formActions_1, "formActions");
