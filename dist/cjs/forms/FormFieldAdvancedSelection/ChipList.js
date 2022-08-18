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
var Chip_1 = __importDefault(require("../../components/Chip"));
var React = __importStar(require("react"));
var react_1 = require("react");
var AdvancedSelection_styled_1 = require("./AdvancedSelection.styled");
var MAX_CHIPS_TO_SHOW = 8;
var ChipList = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var fieldDef = props.fieldDef;
    var _k = (0, react_1.useState)(false), showMore = _k[0], setShowMore = _k[1];
    var _l = (0, react_1.useState)([]), chipsToRender = _l[0], setChipsToRender = _l[1];
    /**
     * Called when the cross icon of a single chip is clicked.
     * @param optionValue is used to filter the chip from the
     * optionsChecked array.
     */
    var onChipDelete = function (optionValue) {
        var _a, _b;
        var filteredChips = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.selectedOptions.filter(function (option) { return option !== optionValue; });
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.deleteSelectedOption(filteredChips);
    };
    /**
     * Used to toggle the state of showMore to
     * conditionally display 'X more' or 'Hide'.
     */
    var handleShowMore = function () {
        setShowMore(!showMore);
    };
    /**
     * JSX element with the list of selected options displayed
     * as chips.
     */
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        var getSelectedOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var optionsChecked;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.selectedOptions))];
                    case 1:
                        optionsChecked = _c.sent();
                        setChipsToRender(optionsChecked);
                        return [2 /*return*/];
                }
            });
        }); };
        if (isMounted) {
            getSelectedOptions();
        }
        return function () {
            isMounted = false;
        };
    }, [
        fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.selectedOptions,
    ]);
    return ((_d = (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.selectedOptions) === null || _d === void 0 ? void 0 : _d.length) > 0 && (React.createElement(AdvancedSelection_styled_1.OptionsCheckedModalWrapper, { isModalOpen: (_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.isModalOpen },
        React.createElement(AdvancedSelection_styled_1.ChipsWrapper, { isModalOpen: (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.isModalOpen, isMobileView: (_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.isMobileView, "data-testid": 'as-chiplist' }, showMore ?
            chipsToRender === null || chipsToRender === void 0 ? void 0 : chipsToRender.map(function (option, idx) { return (React.createElement(Chip_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: "".concat(option === null || option === void 0 ? void 0 : option.label, "-").concat(idx), label: option === null || option === void 0 ? void 0 : option.label, onDelete: function () { return onChipDelete(option === null || option === void 0 ? void 0 : option.value); } })); })
            :
                chipsToRender === null || chipsToRender === void 0 ? void 0 : chipsToRender.slice(0, MAX_CHIPS_TO_SHOW).map(function (option, idx) { return (React.createElement(Chip_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: "".concat(option === null || option === void 0 ? void 0 : option.label, "-").concat(idx), label: option === null || option === void 0 ? void 0 : option.label, onDelete: function () { return onChipDelete(option === null || option === void 0 ? void 0 : option.value); } })); })),
        ((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.selectedOptions.length) > MAX_CHIPS_TO_SHOW && (React.createElement("div", { onClick: handleShowMore }, showMore ? (React.createElement(AdvancedSelection_styled_1.ShowHideSpan, null,
            "Hide",
            " ",
            React.createElement(AdvancedSelection_styled_1.StyledExpandLessIcon, null))) : (React.createElement(AdvancedSelection_styled_1.ShowHideSpan, null, "".concat(((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.selectedOptions.length) - MAX_CHIPS_TO_SHOW, " more"),
            React.createElement(AdvancedSelection_styled_1.StyledExpandMoreIcon, null)))))));
};
exports["default"] = (0, react_1.memo)(ChipList);
