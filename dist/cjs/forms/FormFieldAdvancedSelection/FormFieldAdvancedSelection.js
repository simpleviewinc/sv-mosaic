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
var React = __importStar(require("react"));
var react_1 = require("react");
// Components
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Button_1 = __importDefault(require("../../components/Button"));
var Drawer_1 = __importDefault(require("../../components/Drawer"));
var AdvancedSelectionDrawer_1 = __importDefault(require("./AdvancedSelectionDrawer"));
var ChipList_1 = __importDefault(require("./ChipList"));
// Styles
var AdvancedSelection_styled_1 = require("./AdvancedSelection.styled");
var theme_1 = require("../../theme/theme");
var FormFieldAdvancedSelection = function (props) {
    var _a;
    var value = props.value, onBlur = props.onBlur, onChange = props.onChange, fieldDef = props.fieldDef;
    // State variables
    var _b = (0, react_1.useState)(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = (0, react_1.useState)(false), isMobileView = _c[0], setIsMobileView = _c[1];
    var _d = (0, react_1.useState)(false), hasUnsavedChanges = _d[0], setUnsavedChanges = _d[1];
    var _e = (0, react_1.useState)(false), dialogOpen = _e[0], setIsDialogOpen = _e[1];
    (0, react_1.useEffect)(function () {
        var setResponsiveness = function () {
            setIsMobileView(window.innerWidth < theme_1.BREAKPOINTS.mobile);
        };
        setResponsiveness();
        window.addEventListener("resize", setResponsiveness);
        return function () {
            window.removeEventListener("resize", setResponsiveness);
        };
    }, []);
    /**
   * Sets the open state of the modal to true.
   */
    var handleOpenModal = function () {
        setIsModalOpen(true);
    };
    /**
   * Sets the open state of the modal to false.
   */
    var handleClose = function (save) {
        if (save === void 0) { save = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof save === "boolean" && save)) return [3 /*break*/, 3];
                        setUnsavedChanges(false);
                        setIsModalOpen(false);
                        if (!onBlur) return [3 /*break*/, 2];
                        return [4 /*yield*/, onBlur()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 6];
                    case 3:
                        if (!hasUnsavedChanges) return [3 /*break*/, 4];
                        setIsDialogOpen(true);
                        return [3 /*break*/, 6];
                    case 4:
                        setUnsavedChanges(false);
                        setIsModalOpen(false);
                        if (!onBlur) return [3 /*break*/, 6];
                        return [4 /*yield*/, onBlur()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    var handleDialogClose = function (close) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!close) return [3 /*break*/, 2];
                    return [4 /*yield*/, handleClose(true)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    setIsDialogOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        value.length > 0 && !isModalOpen ? (React.createElement(AdvancedSelection_styled_1.AdvancedSelectionWrapper, null,
            React.createElement(Button_1["default"], { color: "teal", variant: "text", label: "Add Element", onClick: handleOpenModal, muiAttrs: { disableRipple: true }, mIcon: Add_1["default"], disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, attrs: { style: { marginBottom: "8px" } } }),
            React.createElement(ChipList_1["default"], { fieldDef: {
                    inputSettings: {
                        isModalOpen: isModalOpen,
                        isMobileView: isMobileView,
                        selectedOptions: value,
                        getSelected: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
                        deleteSelectedOption: onChange
                    },
                    disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled
                } }))) : (React.createElement(Button_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: "gray", variant: "outlined", label: "ADD ELEMENT", onClick: handleOpenModal, muiAttrs: { disableRipple: true } })),
        React.createElement(Drawer_1["default"], { open: isModalOpen, onClose: handleClose },
            React.createElement(AdvancedSelectionDrawer_1["default"], { value: value, fieldDef: fieldDef, onChange: onChange, isModalOpen: isModalOpen, isMobileView: isMobileView, handleClose: handleClose, handleUnsavedChanges: function (e) { return setUnsavedChanges(e); }, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
exports["default"] = (0, react_1.memo)(FormFieldAdvancedSelection);
