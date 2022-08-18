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
var Button_1 = __importDefault(require("../Button"));
var Card_styled_1 = require("./Card.styled");
var Card = function (props) {
    var bottomAction = props.bottomAction, content = props.content, title = props.title, titleIcon = props.titleIcon, topAction = props.topAction;
    return (React.createElement(Card_styled_1.CardWrapper, null,
        React.createElement(Card_styled_1.TitleBar, null,
            React.createElement(Card_styled_1.TitleWrapper, null,
                titleIcon,
                title),
            topAction && React.createElement(Button_1["default"], __assign({}, topAction))),
        React.createElement(Card_styled_1.ContentWrapper, null, content.map(function (element, idx) { return (React.createElement("div", { key: "card-content-".concat(idx) },
            element,
            idx !== content.length - 1 && React.createElement(Card_styled_1.StyledHr, null))); })),
        bottomAction && (React.createElement(Card_styled_1.BottomActionWrapper, null,
            React.createElement(Button_1["default"], __assign({}, bottomAction))))));
};
exports["default"] = Card;
