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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var MoreHoriz_1 = __importDefault(require("@mui/icons-material/MoreHoriz"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var Button_1 = __importDefault(require("../Button"));
var bulkActionsUtils_1 = require("./utils/bulkActionsUtils");
function DataViewActionsButtonRow(props) {
    var primaryActions = (0, react_1.useMemo)(function () {
        if (props.primaryActions === undefined) {
            return [];
        }
        return props.primaryActions.filter(function (action) {
            return (0, bulkActionsUtils_1.filterAction)(action, { row: props.originalRowData });
        }).map(function (action) {
            var name = action.name, show = action.show, onClick = action.onClick, buttonArgs = __rest(action, ["name", "show", "onClick"]);
            var newOnClick = function () {
                onClick({ data: props.originalRowData });
            };
            return (React.createElement(Button_1["default"], __assign({}, buttonArgs, { key: "primary_".concat(name), attrs: { "data-mosaic-id": "action_primary_".concat(name) }, onClick: newOnClick })));
        });
    }, [props.primaryActions, props.originalRowData]);
    var additionalActions = (0, react_1.useMemo)(function () {
        if (props.additionalActions === undefined) {
            return [];
        }
        var additionalActions = props.additionalActions.filter(function (action) {
            return (0, bulkActionsUtils_1.filterAction)(action, { row: props.originalRowData });
        });
        // if no valid actions hide the dots
        if (additionalActions.length === 0) {
            return [];
        }
        return [
            React.createElement(Button_1["default"], { key: "additional", color: "blue", variant: "icon", mIcon: MoreHoriz_1["default"], attrs: { "data-mosaic-id": "additional_actions_dropdown" }, tooltip: "More actions", menuItems: additionalActions.map(function (action) {
                    var name = action.name, show = action.show, onClick = action.onClick, menuArgs = __rest(action, ["name", "show", "onClick"]);
                    return __assign(__assign({}, menuArgs), { attrs: { "data-mosaic-id": "action_additional_".concat(name) }, onClick: function () {
                            onClick({
                                data: props.originalRowData
                            });
                        } });
                }) })
        ];
    }, [props.additionalActions, props.originalRowData]);
    // concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
    var buttons = (0, react_1.useMemo)(function () {
        return __spreadArray(__spreadArray([], primaryActions, true), additionalActions, true);
    }, [primaryActions, additionalActions]);
    if (buttons.length === 0) {
        return null;
    }
    return (React.createElement(ButtonRow_1["default"], null, buttons));
}
exports["default"] = (0, react_1.memo)(DataViewActionsButtonRow);
