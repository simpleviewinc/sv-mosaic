"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var ViewQuilt_1 = __importDefault(require("@mui/icons-material/ViewQuilt"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var Button_1 = __importDefault(require("../Button"));
var DataViewViewDrawer_1 = __importDefault(require("./DataViewViewDrawer"));
var DataViewViewSaveDrawer_1 = __importDefault(require("./DataViewViewSaveDrawer"));
var i18n_1 = require("../../i18n");
var ViewSpan = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\t\n\t& > .icon {\n\t\tmargin-right: 3px;\n\t}\n\n\t& > p {\n\t\tmargin: 0;\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical; \n\t}\n"], ["\n\tdisplay: inline-flex;\n\talign-items: center;\n\t\n\t& > .icon {\n\t\tmargin-right: 3px;\n\t}\n\n\t& > p {\n\t\tmargin: 0;\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical; \n\t}\n"])));
var TitleButton = (0, styled_components_1["default"])(Button_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmax-width: 300px;\n"], ["\n\tmax-width: 300px;\n"])));
function DataViewViewControls(props) {
    var _a = (0, react_1.useState)({
        viewOpen: false,
        saveOpen: false
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var toggleViewDrawer = function () {
        setState(__assign(__assign({}, state), { viewOpen: !state.viewOpen }));
    };
    var toggleSaveDrawer = function () {
        setState(__assign(__assign({}, state), { saveOpen: !state.saveOpen }));
    };
    var ViewLabel = (react_1["default"].createElement(ViewSpan, null,
        react_1["default"].createElement(ViewQuilt_1["default"], { className: "icon" }),
        react_1["default"].createElement("p", null, props.savedView.label)));
    var saveMenuItems = [
        {
            label: t("mosaic:DataView.save_as_new_view"),
            onClick: function () {
                toggleSaveDrawer();
            }
        },
        {
            label: t("mosaic:DataView.overwrite_current_view"),
            disabled: props.savedView.type === "default" || (props.savedView.type === "shared" && !props.savedViewAllowSharedViewSave),
            onClick: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, props.savedViewCallbacks.onSave(__assign(__assign({}, props.savedView), { state: props.savedViewState }))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
        }
    ];
    var savedViewData = {
        id: undefined,
        label: "",
        type: "mine",
        state: props.savedViewState
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "right" },
            react_1["default"].createElement(ButtonRow_1["default"], null,
                react_1["default"].createElement(Button_1["default"], { mIcon: ExpandMore_1["default"], iconPosition: "right", label: t("mosaic:DataView.save_as"), variant: "outlined", size: "small", color: "blue", menuItems: saveMenuItems }),
                react_1["default"].createElement(TitleButton, { mIcon: ExpandMore_1["default"], iconPosition: "right", label: ViewLabel, variant: "contained", size: "small", color: "lightBlue", onClick: toggleViewDrawer }))),
        react_1["default"].createElement(DataViewViewSaveDrawer_1["default"], { open: state.saveOpen, data: savedViewData, onClose: toggleSaveDrawer, onSave: props.savedViewCallbacks.onSave, allowSharedViewSave: props.savedViewAllowSharedViewSave }),
        react_1["default"].createElement(DataViewViewDrawer_1["default"], { open: state.viewOpen, onClose: toggleViewDrawer, onRemove: props.savedViewCallbacks.onRemove, onSave: props.savedViewCallbacks.onSave, onChange: props.savedViewCallbacks.onChange, onGetOptions: props.savedViewCallbacks.onGetOptions, allowSharedViewSave: props.savedViewAllowSharedViewSave })));
}
exports["default"] = DataViewViewControls;
var templateObject_1, templateObject_2;
