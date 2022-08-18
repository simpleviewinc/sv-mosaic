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
// External libraries
var lodash_1 = require("lodash");
var api_1 = require("@react-google-maps/api");
var react_places_autocomplete_1 = require("react-places-autocomplete");
// Components
var Button_1 = __importDefault(require("../../components/Button"));
var ToggleSwitch_1 = __importDefault(require("../../components/ToggleSwitch"));
var MapCoordinatesDrawer_1 = __importDefault(require("./MapCoordinatesDrawer"));
// Styles
var MapCoordinates_styled_1 = require("./MapCoordinates.styled");
// Utils
var MapCoordinatesUtils_1 = require("./MapCoordinatesUtils");
var Drawer_1 = __importDefault(require("../../components/Drawer"));
var FormFieldMapCoordinates = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var value = props.value, onBlur = props.onBlur, onChange = props.onChange, fieldDef = props.fieldDef;
    // State variables
    var _o = (0, react_1.useState)(false), autocoordinatesChecked = _o[0], setAutocoordinatesChecked = _o[1];
    var _p = (0, react_1.useState)(false), isModalOpen = _p[0], setIsModalOpen = _p[1];
    var _q = (0, react_1.useState)(false), hasUnsavedChanges = _q[0], setUnsavedChanges = _q[1];
    var _r = (0, react_1.useState)(false), dialogOpen = _r[0], setIsDialogOpen = _r[1];
    /**
     * Opens the modal that displays the map.
     */
    var handleAddCoordinates = function () {
        setIsModalOpen(true);
    };
    /**
     * Closes the modal.
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
    /**
     * Clear values for the entered location.
     */
    var removeLocation = function () {
        onChange && onChange(undefined);
    };
    /**
     * Managed the switch state to enable or disable autocoordinates.
     * @param e
     */
    var handleToggleSwitchChange = function (isChecked) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setAutocoordinatesChecked(isChecked);
            return [2 /*return*/];
        });
    }); };
    /**
     * Set map coordinates and lat and lng fields with the values
     * provided by the address that is passed. Is only executed when
     * the autocoordinates value is true.
     */
    var setCoordinatesFromAddress = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var addressString, results, latLng, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    addressString = (0, MapCoordinatesUtils_1.getAddressStringFromAddressObject)((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.address);
                    return [4 /*yield*/, (0, react_places_autocomplete_1.geocodeByAddress)(addressString)];
                case 1:
                    results = _b.sent();
                    return [4 /*yield*/, (0, react_places_autocomplete_1.getLatLng)(results[0])];
                case 2:
                    latLng = _b.sent();
                    onChange && onChange({
                        lat: latLng.lat,
                        lng: latLng.lng
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [(_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.address]);
    /**
     *	When the component is mounted and the auto coordinates flag is true
     *  setCoordinatesFromAddress is executed.
     */
    (0, react_1.useEffect)(function () {
        if (autocoordinatesChecked) {
            setCoordinatesFromAddress();
        }
    }, [autocoordinatesChecked, (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.address]);
    var _s = (0, api_1.useLoadScript)({
        googleMapsApiKey: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.apiKey,
        libraries: MapCoordinatesUtils_1.libraries
    }), isLoaded = _s.isLoaded, loadError = _s.loadError;
    if (loadError)
        return React.createElement("span", null, "Error loading maps");
    if (!isLoaded)
        return React.createElement("span", null, "Loading Maps");
    var mapPosition = {
        lat: (value === null || value === void 0 ? void 0 : value.lat)
            ? Number(value.lat)
            : ((_e = (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.mapPosition) === null || _e === void 0 ? void 0 : _e.lat)
                ? fieldDef.inputSettings.mapPosition.lat
                : MapCoordinatesUtils_1.defaultMapPosition.lat,
        lng: (value === null || value === void 0 ? void 0 : value.lng)
            ? Number(value.lng)
            : ((_g = (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.mapPosition) === null || _g === void 0 ? void 0 : _g.lng)
                ? fieldDef.inputSettings.mapPosition.lng
                : MapCoordinatesUtils_1.defaultMapPosition.lng
    };
    return (React.createElement(React.Fragment, null,
        value || !(0, lodash_1.isEmpty)((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.address) ? (React.createElement("div", null,
            !(0, lodash_1.isEmpty)((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.address) && (React.createElement(MapCoordinates_styled_1.SwitchContainer, null,
                React.createElement(ToggleSwitch_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, label: "Use same as address", labelPlacement: "start", onChange: handleToggleSwitchChange, checked: autocoordinatesChecked }))),
            React.createElement(MapCoordinates_styled_1.CoordinatesCard, { hasAddress: !(0, lodash_1.isEmpty)((_k = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _k === void 0 ? void 0 : _k.address) },
                React.createElement(MapCoordinates_styled_1.MapImageColumn, null,
                    React.createElement(api_1.GoogleMap, { mapContainerStyle: MapCoordinates_styled_1.mapContainerStyle, center: mapPosition, zoom: 10, options: MapCoordinatesUtils_1.mapOptions },
                        React.createElement(api_1.Marker, { position: mapPosition }))),
                React.createElement(MapCoordinates_styled_1.Column, null,
                    React.createElement(MapCoordinates_styled_1.LatLngLabel, null, "Latitude"),
                    React.createElement(MapCoordinates_styled_1.LatitudeValue, null, mapPosition.lat),
                    React.createElement(MapCoordinates_styled_1.LatLngLabel, null, "Longitude"),
                    React.createElement(MapCoordinates_styled_1.CoordinatesValues, null, mapPosition.lng)),
                React.createElement(MapCoordinates_styled_1.ButtonsWrapper, { hasAddress: (0, lodash_1.isEmpty)((_l = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _l === void 0 ? void 0 : _l.address) },
                    !autocoordinatesChecked && (React.createElement(Button_1["default"], { color: "teal", variant: "text", label: "Edit", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: handleAddCoordinates, muiAttrs: { disableRipple: true } })),
                    !autocoordinatesChecked &&
                        (0, lodash_1.isEmpty)((_m = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _m === void 0 ? void 0 : _m.address) && (React.createElement(Button_1["default"], { color: "red", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, variant: "text", label: "Remove", onClick: removeLocation, muiAttrs: { disableRipple: true } })))))) : (React.createElement(Button_1["default"], { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: handleAddCoordinates, color: "gray", variant: "outlined", label: "ADD COORDINATES", muiAttrs: { disableRipple: true } })),
        React.createElement(Drawer_1["default"], { open: isModalOpen, onClose: handleClose },
            React.createElement(MapCoordinatesDrawer_1["default"], { value: value, fieldDef: fieldDef, onChange: onChange, handleClose: handleClose, handleUnsavedChanges: function (e) { return setUnsavedChanges(e); }, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
exports["default"] = (0, react_1.memo)(FormFieldMapCoordinates);
