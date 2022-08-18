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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var LeftNavGroup_1 = __importDefault(require("./LeftNavGroup"));
var LeftNavTypes_1 = require("./LeftNavTypes");
/** Renders an array of navigation items. */
function LeftNavItems(props) {
    var leftNavContext = (0, react_1.useContext)(LeftNavTypes_1.LeftNavContext);
    return (React.createElement(react_1.Fragment, null, props.items.map(function (val) {
        var Component = val.type === "group" ? LeftNavGroup_1["default"] : leftNavContext.ItemComponent;
        return (React.createElement(Component, { key: val.name, item: val, showLabel: props.showLabel, openName: props.openName, onOpen: props.onOpen }));
    })));
}
exports["default"] = LeftNavItems;
