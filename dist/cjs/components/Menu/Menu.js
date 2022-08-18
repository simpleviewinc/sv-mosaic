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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var MenuBase_1 = __importDefault(require("../MenuBase"));
var MenuItem_1 = __importDefault(require("../MenuItem"));
function Menu(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "items",
                type: "array",
                schema: {
                    type: "object",
                    schema: [
                        {
                            name: "label",
                            type: "string"
                        },
                        {
                            name: "color",
                            type: "string",
                            "enum": ["blue", "red", "black"]
                        },
                        {
                            name: "mIcon",
                            type: "object"
                        },
                        {
                            name: "disabled",
                            type: "boolean"
                        },
                        {
                            name: "selected",
                            type: "boolean"
                        },
                        {
                            name: "onClick",
                            type: "function"
                        },
                        {
                            name: "attrs",
                            type: "object"
                        }
                    ],
                    allowExtraKeys: false
                }
            },
            {
                name: "anchorEl",
                type: "object"
            },
            {
                name: "open",
                type: "boolean",
                required: true
            },
            {
                name: "onClose",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var menuItems = props.items.map(function (item, i) {
        var onClick = function () {
            item.onClick();
            props.onClose();
        };
        return (react_1["default"].createElement(MenuItem_1["default"], __assign({ key: i }, item, { onClick: onClick })));
    });
    return (react_1["default"].createElement(MenuBase_1["default"], { anchorEl: props.anchorEl, open: props.open, onClose: props.onClose }, menuItems));
}
exports["default"] = Menu;
