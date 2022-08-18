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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var MenuBase_1 = require("../MenuBase");
var MenuItem_1 = __importDefault(require("../MenuItem"));
function MenuSelect(props) {
    var menuContext = (0, react_1.useContext)(MenuBase_1.MenuBaseContext);
    var options = __spreadArray([], props.options, true);
    if (props.placeholder !== undefined) {
        options.unshift({
            label: React.createElement("i", null, props.placeholder),
            value: ""
        });
    }
    var menuItems = options.map(function (val) {
        var onClick = function () {
            props.onChange(val.value);
            menuContext.onClose();
        };
        var selected = val.value === props.value;
        return (React.createElement(MenuItem_1["default"], { key: val.value, mIcon: val.mIcon, color: val.color, label: val.label, selected: selected, onClick: onClick }));
    });
    return (React.createElement(react_1.Fragment, null, menuItems));
}
exports["default"] = MenuSelect;
