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
var Button_1 = __importDefault(require("../../components/Button"));
var ImageVideoLinkDocumentBrowsing_styled_1 = require("./ImageVideoLinkDocumentBrowsing.styled");
// Components
var MenuFormFieldCard_1 = __importDefault(require("../MenuFormFieldCard"));
var BrowseOption_1 = __importDefault(require("./BrowseOption"));
var DOCUMENT = "document";
var IMAGE = "image";
var LINK = "link";
var VIDEO = "video";
var FormFieldImageVideoLinkDocumentBrowsing = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var fieldDef = props.fieldDef, value = props.value;
    // State variables
    var _p = (0, react_1.useState)(""), assetType = _p[0], setAssetType = _p[1];
    /**
     * The Browse button should execute the function
     * corresponding to the asset that was loaded.
     */
    var handleBrowse = function (e, asset) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1, error_2, error_3, error_4;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    e.preventDefault();
                    if (!(asset === DOCUMENT)) return [3 /*break*/, 4];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetDocument())];
                case 2:
                    _e.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _e.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    if (!(asset === VIDEO)) return [3 /*break*/, 8];
                    _e.label = 5;
                case 5:
                    _e.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetVideo())];
                case 6:
                    _e.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _e.sent();
                    console.log(error_2);
                    return [3 /*break*/, 8];
                case 8:
                    if (!(asset === LINK)) return [3 /*break*/, 12];
                    _e.label = 9;
                case 9:
                    _e.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetLink())];
                case 10:
                    _e.sent();
                    return [3 /*break*/, 12];
                case 11:
                    error_3 = _e.sent();
                    console.log(error_3);
                    return [3 /*break*/, 12];
                case 12:
                    if (!(asset === IMAGE)) return [3 /*break*/, 16];
                    _e.label = 13;
                case 13:
                    _e.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.handleSetImage())];
                case 14:
                    _e.sent();
                    return [3 /*break*/, 16];
                case 15:
                    error_4 = _e.sent();
                    console.log(error_4);
                    return [3 /*break*/, 16];
                case 16:
                    setAssetType(asset);
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * Executes the remove function that comes from the
     * Form component. This function sets the Form field value
     * to an empty array.
     * @param e click event
     */
    var handleRemove = function (e) {
        var _a;
        e.preventDefault();
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleRemove();
    };
    var tootltipContent = (0, react_1.useMemo)(function () {
        return Array.isArray(value) &&
            (value === null || value === void 0 ? void 0 : value.map(function (property) { return (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.TableRow, { key: "".concat(property.label, "-").concat(property.value) },
                React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.Td, null,
                    React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetLabelTooltip, null, property.label)),
                React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.Td, null, property.value))); }));
    }, [value]);
    // Only show the first four asset's properties on the card
    var assetPropertiesRows = (0, react_1.useMemo)(function () {
        return Array.isArray(value) &&
            (value === null || value === void 0 ? void 0 : value.slice(0, 4).map(function (property, idx) { return (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.TableRow, { key: "".concat(property.label, "-").concat(property.value) },
                React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.Td, null,
                    React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetLabel, null, property.label)),
                React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.Td, null,
                    property.label === "URL" ? (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.StyledAnchor, { href: property.value }, property.value)) : (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetValue, null, property.value)),
                    idx === 3 && value.length > 4 && (React.createElement(React.Fragment, null,
                        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetValue, null, "..."),
                        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.StyledTooltip, { placement: "top", text: React.createElement("table", null,
                                React.createElement("tbody", null, tootltipContent)), type: "advanced" },
                            React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.MoreText, null, "More"))))))); }));
    }, [value]);
    var hasOptions = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetImage) ||
        ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetVideo) ||
        ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetDocument) ||
        ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.handleSetLink);
    return (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.ImageVideoLinkDocumentBrowsingContainer, null, (Array.isArray(value) && (value === null || value === void 0 ? void 0 : value.length) === 0) || !value ? (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.BrowsingContainer, null,
        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.BrowseSpan, null, !hasOptions ? "No browsing options" : "Browse:"),
        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.BrowseOptionsContainer, null,
            ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.handleSetImage) && (React.createElement(BrowseOption_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: IMAGE })),
            ((_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.handleSetVideo) && (React.createElement(BrowseOption_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: VIDEO })),
            ((_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.handleSetDocument) && (React.createElement(BrowseOption_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: DOCUMENT })),
            ((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.handleSetLink) && (React.createElement(BrowseOption_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: LINK }))))) : (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetCard, null,
        ((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.src) &&
            !(assetType === DOCUMENT || assetType === LINK) && (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.Column, null,
            React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.StyledImg, { src: (_k = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _k === void 0 ? void 0 : _k.src, "data-testid": "image-test", width: 257, height: 168 }))),
        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.AssetPropertiesColumn, { hasImage: ((_l = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _l === void 0 ? void 0 : _l.src) &&
                (assetType === IMAGE || assetType === VIDEO) },
            React.createElement("table", null,
                React.createElement("tbody", null, assetPropertiesRows))),
        ((_m = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _m === void 0 ? void 0 : _m.options) && (React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.MenuColumn, null,
            React.createElement(MenuFormFieldCard_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, options: (_o = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _o === void 0 ? void 0 : _o.options }))),
        React.createElement(ImageVideoLinkDocumentBrowsing_styled_1.ButtonsWrapper, null,
            React.createElement(Button_1["default"], { className: "first", color: "teal", variant: "text", label: "Browse", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleBrowse(e, assetType)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); } }),
            React.createElement(Button_1["default"], { color: "red", variant: "text", label: "Remove", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: function (e) { return handleRemove(e); } }))))));
};
exports["default"] = (0, react_1.memo)(FormFieldImageVideoLinkDocumentBrowsing);
