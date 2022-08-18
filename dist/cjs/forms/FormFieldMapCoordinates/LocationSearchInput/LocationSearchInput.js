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
exports.__esModule = true;
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
var react_1 = require("react");
var react_places_autocomplete_1 = __importStar(require("react-places-autocomplete"));
// Styles
var MapCoordinates_styled_1 = require("../MapCoordinates.styled");
var LocationSearchInput = function (props) {
    var handleCoordinates = props.handleCoordinates;
    // State variables
    var _a = (0, react_1.useState)(""), address = _a[0], setAddress = _a[1];
    /**
     * Gets lat and lng values from the selected suggestion and
     * updates the state of the MapCoordinates component.
     * @param value
     */
    var handleSelect = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var results, latLng, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setAddress(value);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, (0, react_places_autocomplete_1.geocodeByAddress)(value)];
                case 2:
                    results = _a.sent();
                    return [4 /*yield*/, (0, react_places_autocomplete_1.getLatLng)(results[0])];
                case 3:
                    latLng = _a.sent();
                    handleCoordinates(latLng);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Reset the address value that is displayed in the autocomplete component.
     */
    var clearValue = function () {
        setAddress("");
    };
    return (React.createElement(MapCoordinates_styled_1.LocationSearchInputWrapper, null,
        React.createElement(react_places_autocomplete_1["default"], { value: address, onChange: setAddress, onSelect: handleSelect }, function (_a) {
            var getInputProps = _a.getInputProps, suggestions = _a.suggestions, getSuggestionItemProps = _a.getSuggestionItemProps;
            return (React.createElement("div", null,
                React.createElement(MapCoordinates_styled_1.StyledInputSearch, __assign({ fieldSize: '100%', inputProps: { "data-testid": "location-search-input" } }, getInputProps({
                    placeholder: "Type a location, address or city…"
                }), { InputProps: {
                        endAdornment: (React.createElement(material_1.InputAdornment, { position: 'end' },
                            React.createElement(MapCoordinates_styled_1.StyledClearIcon, { "data-testid": "location-search-clear-icon", onClick: clearValue })))
                    }, variant: 'outlined', value: address })),
                (suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) > 0 && (React.createElement(MapCoordinates_styled_1.SuggestionsContainer, null, suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(function (suggestion) {
                    return (React.createElement(MapCoordinates_styled_1.SuggestionsDescriptionContainer, __assign({}, getSuggestionItemProps(suggestion), { key: suggestion === null || suggestion === void 0 ? void 0 : suggestion.placeId, isSuggestionActive: suggestion === null || suggestion === void 0 ? void 0 : suggestion.active }),
                        React.createElement(MapCoordinates_styled_1.SuggestionDescription, null, suggestion === null || suggestion === void 0 ? void 0 : suggestion.description)));
                })))));
        })));
};
exports["default"] = (0, react_1.memo)(LocationSearchInput);
