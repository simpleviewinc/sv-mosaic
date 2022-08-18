"use strict";
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
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
function TridentIcon(props) {
    return (React.createElement(SvgIcon_1["default"], __assign({}, props),
        React.createElement("defs", null,
            React.createElement("path", { d: "M12.79 19.53c2.95 2.14 6.75 2.73 10.21 1.59-.73-3.58-3.15-6.6-6.5-8.08-.54 2.49-1.84 4.76-3.71 6.49z", id: "trident_svg__a" }),
            React.createElement("path", { d: "M11.05 19.53c-1.88-1.73-3.18-4-3.72-6.49-3.35 1.49-5.77 4.5-6.5 8.09 3.47 1.14 7.27.54 10.22-1.6z", id: "trident_svg__b" }),
            React.createElement("path", { d: "M11.92 18.58c1.68-1.55 2.84-3.59 3.32-5.82a10.94 10.94 0 00-6.65 0c.48 2.23 1.64 4.27 3.33 5.82z", id: "trident_svg__c" }),
            React.createElement("path", { d: "M8.14 10.38c0 .38.02.77.06 1.15 2.42-.77 5.01-.77 7.43 0 .04-.38.07-.77.07-1.15 0-3.22-1.37-6.3-3.78-8.44a11.254 11.254 0 00-3.78 8.44z", id: "trident_svg__d" })),
        React.createElement("use", { xlinkHref: "#trident_svg__a", fill: "#8dc63f" }),
        React.createElement("use", { xlinkHref: "#trident_svg__a", fillOpacity: 0, stroke: "#000", strokeOpacity: 0 }),
        React.createElement("use", { xlinkHref: "#trident_svg__b", fill: "#00a4e4" }),
        React.createElement("use", { xlinkHref: "#trident_svg__b", fillOpacity: 0, stroke: "#000", strokeOpacity: 0 }),
        React.createElement("g", null,
            React.createElement("use", { xlinkHref: "#trident_svg__c", fill: "#bebebe" }),
            React.createElement("use", { xlinkHref: "#trident_svg__c", fillOpacity: 0, stroke: "#000", strokeOpacity: 0 })),
        React.createElement("g", null,
            React.createElement("use", { xlinkHref: "#trident_svg__d", fill: "#fdb924" }),
            React.createElement("use", { xlinkHref: "#trident_svg__d", fillOpacity: 0, stroke: "#000", strokeOpacity: 0 }))));
}
exports["default"] = TridentIcon;
