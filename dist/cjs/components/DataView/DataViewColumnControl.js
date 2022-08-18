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
var react_1 = require("react");
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
var Button_1 = __importDefault(require("../Button"));
var DataViewColumnDrawer_1 = __importDefault(require("./DataViewColumnDrawer"));
var i18n_1 = require("../../i18n");
function DataViewColumnControl(props) {
    var _a = (0, react_1.useState)({
        open: false
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var gearClick = function () {
        setState(__assign(__assign({}, state), { open: !state.open }));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button_1["default"], { color: "black", label: t("mosaic:DataView.columns"), variant: "icon", size: "small", mIcon: Settings_1["default"], onClick: gearClick, iconPosition: "left", tooltip: "Update columns and their order." }),
        props.onChange !== undefined &&
            React.createElement(DataViewColumnDrawer_1["default"], { open: state.open, columns: props.columns, allColumns: props.allColumns, onChange: props.onChange, onClose: gearClick })));
}
exports["default"] = DataViewColumnControl;
