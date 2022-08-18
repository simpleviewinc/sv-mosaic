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
var React = __importStar(require("react"));
var react_1 = require("react");
// Components
var Map_1 = __importDefault(require("../Map"));
var MapCoordinates_styled_1 = require("../MapCoordinates.styled");
var ResetButton_1 = __importDefault(require("./ResetButton"));
// Utils
var MapCoordinatesUtils_1 = require("../MapCoordinatesUtils");
var Form_1 = __importStar(require("../../../components/Form"));
var lodash_1 = __importDefault(require("lodash"));
// Layout of the form elements.
var sections = [
    {
        fields: [
            [["placesList"]],
            [["lat"], ["lng"], ["resetButton"]]
        ]
    }
];
var MapCoordinatesDrawer = function (props) {
    var value = props.value, fieldDef = props.fieldDef, onChange = props.onChange, handleClose = props.handleClose, handleUnsavedChanges = props.handleUnsavedChanges, dialogOpen = props.dialogOpen, handleDialogClose = props.handleDialogClose;
    var modalReducer = (0, Form_1.useForm)();
    var initialState = { lat: value.lat ? value.lat : undefined, lng: value.lng ? value.lng : undefined };
    (0, react_1.useEffect)(function () {
        var _a = modalReducer.state.data, lat = _a.lat, lng = _a.lng;
        if (lat !== undefined || lng !== undefined)
            handleUnsavedChanges(!lodash_1["default"].isEqual(initialState, { lat: lat, lng: lng }));
    }, [modalReducer.state.data.lat, modalReducer.state.data.lng]);
    /**
     * When the map is clicked the lat and lng fields and
     * the coordinates that center the map are updated.
     */
    var onMapClick = (0, react_1.useCallback)(function (event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "placesList",
            value: { lat: Number(lat), lng: Number(lng) }
        }));
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "lat",
            value: lat
        }));
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "lng",
            value: lng
        }));
    }, []);
    /**
     * Clear the input fields of latitude and longitude
     */
    var resetLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, modalReducer.dispatch(Form_1.formActions.setFieldValue({ name: "lat", value: undefined }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, modalReducer.dispatch(Form_1.formActions.setFieldValue({ name: "lng", value: undefined }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * Callback function that is executed by the LocationSearchInput
     * when the user selects one of the suggested options by the autocomplete
     * google component.
     */
    var handleCoordinates = function (coordinates) {
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "placesList",
            value: coordinates
        }));
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "lat",
            value: coordinates.lat
        }));
        modalReducer.dispatch(Form_1.formActions.setFieldValue({
            name: "lng",
            value: coordinates.lng
        }));
    };
    /**
     * Executed when the onSubmit event of
     * the form that is contained inside the modal
     * happends.
     */
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var valid, latLngValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, modalReducer.dispatch(Form_1.formActions.submitForm())];
                case 1:
                    valid = (_a.sent()).valid;
                    if (!valid)
                        return [2 /*return*/];
                    latLngValue = __assign(__assign({}, value), { lat: modalReducer.state.data.lat, lng: modalReducer.state.data.lng });
                    return [4 /*yield*/, onChange(latLngValue)];
                case 2:
                    _a.sent();
                    handleClose(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderMap = function (props) {
        var _a, _b, _c;
        return (React.createElement(React.Fragment, null,
            React.createElement(Map_1["default"], { address: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.address, handleCoordinates: handleCoordinates, mapPosition: props.value
                    ? props.value
                    : ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.mapPosition)
                        ? (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.mapPosition
                        : MapCoordinatesUtils_1.defaultMapPosition, onClick: onMapClick }),
            React.createElement(MapCoordinates_styled_1.StyledSpan, null, "Click on the map to update the lattitude and longitude coordinates")));
    };
    var fields = (0, react_1.useMemo)(function () {
        return [
            {
                name: "placesList",
                type: renderMap
            },
            {
                name: "lat",
                label: "Latitude",
                type: "text",
                inputSettings: {
                    type: "number"
                }
            },
            {
                name: "lng",
                label: "Longitude",
                type: "text",
                inputSettings: {
                    type: "number"
                }
            },
            {
                name: "resetButton",
                label: "Reset",
                type: ResetButton_1["default"],
                inputSettings: {
                    resetLocation: resetLocation
                }
            },
        ];
    }, []);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        if (isMounted) {
            var _a = modalReducer.state.data, lat = _a.lat, lng = _a.lng;
            if ((lat === null || lat === void 0 ? void 0 : lat.toString().length) > 0 && (lng === null || lng === void 0 ? void 0 : lng.toString().length) > 0) {
                modalReducer.dispatch(Form_1.formActions.setFieldValue({ name: "resetButton", value: true }));
                modalReducer.dispatch(Form_1.formActions.setFieldValue({
                    name: "placesList",
                    value: { lat: Number(lat), lng: Number(lng) }
                }));
            }
            else {
                modalReducer.dispatch(Form_1.formActions.setFieldValue({ name: "resetButton", value: undefined }));
            }
        }
        return function () {
            isMounted = false;
        };
    }, [modalReducer.state.data.lat, modalReducer.state.data.lng]);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        if (isMounted) {
            modalReducer.dispatch(Form_1.formActions.setFieldValue({
                name: "lat",
                value: value === null || value === void 0 ? void 0 : value.lat
            }));
            modalReducer.dispatch(Form_1.formActions.setFieldValue({
                name: "lng",
                value: value === null || value === void 0 ? void 0 : value.lng
            }));
        }
        return function () {
            isMounted = false;
        };
    }, [modalReducer.dispatch, value]);
    var buttons = [
        {
            label: "Cancel",
            onClick: function () { return handleClose(); },
            color: "gray",
            variant: "outlined"
        },
        {
            label: "Save Coordinates",
            onClick: onSubmit,
            color: "yellow",
            variant: "contained",
            disabled: !modalReducer.state.data.lat || !modalReducer.state.data.lng
        }
    ];
    return (React.createElement(Form_1["default"], { title: 'Map Coordinates', buttons: buttons, type: 'drawer', state: modalReducer === null || modalReducer === void 0 ? void 0 : modalReducer.state, dispatch: modalReducer === null || modalReducer === void 0 ? void 0 : modalReducer.dispatch, sections: sections, fields: fields, onCancel: handleClose, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }));
};
exports["default"] = MapCoordinatesDrawer;
