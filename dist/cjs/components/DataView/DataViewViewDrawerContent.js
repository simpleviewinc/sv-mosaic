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
var Create_1 = __importDefault(require("@mui/icons-material/Create"));
var DataView_1 = __importDefault(require("./DataView"));
var DrawerContent_1 = __importDefault(require("../DrawerContent"));
var DataViewViewSaveDrawer_1 = __importDefault(require("./DataViewViewSaveDrawer"));
var i18n_1 = require("../../i18n");
var startingState = {
    options: undefined,
    loading: true,
    formOpen: false,
    formData: {}
};
function DataViewViewDrawerContent(props) {
    var _a = (0, react_1.useState)(__assign({}, startingState)), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    (0, react_1.useEffect)(function () {
        function getOptions() {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, props.onGetOptions()];
                        case 1:
                            results = _a.sent();
                            setState(__assign(__assign({}, state), { loading: false, options: results }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        getOptions();
    }, [state.loading]);
    var closeForm = function () {
        setState(__assign({}, startingState));
    };
    var canAct = function (row) {
        if (row.type === "default") {
            return false;
        }
        else if (!props.allowSharedViewSave) {
            return row.type === "mine";
        }
        else {
            return true;
        }
    };
    var DataViewConfig = {
        primaryActions: [
            {
                name: "select",
                variant: "text",
                label: t("mosaic:common.select"),
                color: "blue",
                onClick: function (_a) {
                    var data = _a.data;
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, props.onChange(data)];
                                case 1:
                                    _b.sent();
                                    props.onClose();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
            },
            {
                name: "edit",
                show: function (_a) {
                    var row = _a.row;
                    return canAct(row);
                },
                variant: "icon",
                color: "blue",
                mIcon: Create_1["default"],
                onClick: function (_a) {
                    var data = _a.data;
                    setState(__assign(__assign({}, state), { formOpen: true, formData: data }));
                }
            }
        ],
        additionalActions: [
            {
                name: "remove",
                show: function (_a) {
                    var row = _a.row;
                    return canAct(row);
                },
                label: t("mosaic:common.remove"),
                onClick: function (_a) {
                    var data = _a.data;
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, props.onRemove(data)];
                                case 1:
                                    _b.sent();
                                    setState(__assign(__assign({}, state), { options: undefined, loading: true }));
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
            }
        ],
        data: state.options,
        loading: state.loading,
        columns: [
            {
                name: "id",
                label: "ID"
            },
            {
                name: "label",
                label: t("mosaic:common.label")
            },
            {
                name: "type",
                label: t("mosaic:common.type"),
                style: {
                    textTransform: "capitalize"
                }
            }
        ],
        activeColumns: ["label", "type"]
    };
    return (react_1["default"].createElement(DrawerContent_1["default"], { title: t("mosaic:DataView.saved_views"), onClose: props.onClose },
        state.options &&
            react_1["default"].createElement(DataView_1["default"], __assign({}, DataViewConfig)),
        react_1["default"].createElement(DataViewViewSaveDrawer_1["default"], { open: state.formOpen, data: state.formData, onClose: closeForm, onSave: props.onSave, allowSharedViewSave: props.allowSharedViewSave })));
}
exports["default"] = DataViewViewDrawerContent;
