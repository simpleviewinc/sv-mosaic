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
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var styled_components_1 = __importDefault(require("styled-components"));
var DrawerContent_1 = __importDefault(require("../DrawerContent"));
var i18n_1 = require("../../i18n");
var StyledForm = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& .font16 {\n\t\tfont-size: 16px;\n\t}\n"], ["\n\t& .font16 {\n\t\tfont-size: 16px;\n\t}\n"])));
var InputLabelProps = {
    className: "font16"
};
var inputProps = {
    className: "font16"
};
var classes = {
    label: "font16"
};
function DataViewViewSaveDrawerContent(props) {
    var _a = (0, react_1.useState)(__assign(__assign({}, props.data), { type: (props.allowSharedViewSave === true) ? props.data.type : "mine" })), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var onSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, props.onSave(__assign({}, state))];
                    case 1:
                        _a.sent();
                        props.onClose();
                        return [2 /*return*/];
                }
            });
        });
    };
    var onSubmit = function (event) {
        event.preventDefault();
        onSave();
    };
    var handleChange = function (name) { return function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[name] = event.target.value, _a)));
    }; };
    var handleSwitch = function (name) { return function (event) {
        setState(__assign(__assign({}, state), { type: event.target.checked ? "shared" : "mine" }));
    }; };
    return (react_1["default"].createElement(DrawerContent_1["default"], { title: t("mosaic:DataView.save_view"), onSave: onSave, onClose: props.onClose, onCancel: props.onClose, background: "gray" },
        react_1["default"].createElement(StyledForm, { onSubmit: onSubmit, autoComplete: "off" },
            react_1["default"].createElement(FormGroup_1["default"], { row: true },
                react_1["default"].createElement(TextField_1["default"], { autoFocus: true, id: "label", label: t("mosaic:common.label"), value: state.label, onChange: handleChange("label"), fullWidth: true, required: true, variant: "filled", InputLabelProps: InputLabelProps, inputProps: inputProps })),
            props.allowSharedViewSave &&
                react_1["default"].createElement(FormGroup_1["default"], { row: true },
                    react_1["default"].createElement(FormControl_1["default"], { margin: "normal" },
                        react_1["default"].createElement(FormControlLabel_1["default"], { classes: classes, control: react_1["default"].createElement(Switch_1["default"], { checked: state.type === "shared", onChange: handleSwitch("shared"), value: "what", color: "primary" }), label: t("mosaic:DataView.show_for_all_users") }))))));
}
exports["default"] = DataViewViewSaveDrawerContent;
var templateObject_1;
