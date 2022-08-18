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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
// Components
var Form_1 = __importStar(require("../../../components/Form"));
// Utils
var countriesStates_json_1 = __importDefault(require("../countriesStates.json"));
var lodash_1 = __importDefault(require("lodash"));
// Layout of the form elements.
var sections = [
    {
        fields: [
            [["country"]],
            [["address1"]],
            [["address2"]],
            [["address3"]],
            [["city"], ["states"], ["postalCode"]],
            [["type"]],
        ]
    },
];
var countries = countriesStates_json_1["default"] === null || countriesStates_json_1["default"] === void 0 ? void 0 : countriesStates_json_1["default"].map(function (country) { return ({
    label: country.name,
    value: country.iso2
}); });
var addressTypes = [
    {
        label: "Physical",
        value: "physical"
    },
    {
        label: "Billing",
        value: "billing"
    },
    {
        label: "Shipping",
        value: "shipping"
    },
];
var AddressDrawer = function (props) {
    var _a;
    var value = props.value, onChange = props.onChange, open = props.open, addressToEdit = props.addressToEdit, isEditing = props.isEditing, addressIdx = props.addressIdx, handleClose = props.handleClose, setIsEditing = props.setIsEditing, handleUnsavedChanges = props.handleUnsavedChanges, dialogOpen = props.dialogOpen, handleDialogClose = props.handleDialogClose;
    var _b = (0, Form_1.useForm)(), dispatch = _b.dispatch, state = _b.state;
    var _c = (0, react_1.useState)(state.data), initialState = _c[0], setInitialState = _c[1];
    (0, react_1.useEffect)(function () {
        if (state.data !== undefined && initialState !== undefined)
            handleUnsavedChanges(!lodash_1["default"].isEqual(initialState, state.data));
    }, [state.data, initialState]);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        if (isEditing && open && isMounted) {
            var editingState = {};
            var fullCountryData = countriesStates_json_1["default"] === null || countriesStates_json_1["default"] === void 0 ? void 0 : countriesStates_json_1["default"].find(function (c) { return c.iso2 === (addressToEdit === null || addressToEdit === void 0 ? void 0 : addressToEdit.country); });
            var fullStateData = fullCountryData.states.find(function (s) { return s.state_code === (addressToEdit === null || addressToEdit === void 0 ? void 0 : addressToEdit.state); });
            dispatch(Form_1.formActions.setFieldValue({
                name: "address1",
                value: addressToEdit.address1
            }));
            editingState = __assign(__assign({}, editingState), { "address1": addressToEdit.address1 });
            if (addressToEdit.address2) {
                dispatch(Form_1.formActions.setFieldValue({
                    name: "address2",
                    value: addressToEdit.address2
                }));
                editingState = __assign(__assign({}, editingState), { "address2": addressToEdit.address2 });
            }
            if (addressToEdit.address3) {
                dispatch(Form_1.formActions.setFieldValue({
                    name: "address3",
                    value: addressToEdit.address3
                }));
                editingState = __assign(__assign({}, editingState), { "address3": addressToEdit.address3 });
            }
            dispatch(Form_1.formActions.setFieldValue({
                name: "city",
                value: addressToEdit.city
            }));
            editingState = __assign(__assign({}, editingState), { "city": addressToEdit.city });
            dispatch(Form_1.formActions.setFieldValue({
                name: "postalCode",
                value: Number(addressToEdit.postalCode)
            }));
            editingState = __assign(__assign({}, editingState), { "postalCode": Number(addressToEdit.postalCode) });
            dispatch(Form_1.formActions.setFieldValue({
                name: "type",
                value: addressToEdit.types
            }));
            editingState = __assign(__assign({}, editingState), { "type": addressToEdit.types });
            dispatch(Form_1.formActions.setFieldValue({
                name: "country",
                value: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.iso2
            }));
            editingState = __assign(__assign({}, editingState), { "country": { label: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.name, value: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.iso2 } });
            dispatch(Form_1.formActions.setFieldValue({
                name: "states",
                value: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.state_code
            }));
            editingState = __assign(__assign({}, editingState), { "states": {
                    label: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.name,
                    value: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.state_code
                } });
            setInitialState(editingState);
        }
        return function () {
            isMounted = false;
        };
    }, [addressToEdit]);
    /**
   * Gets the list of states for the
   * selected country
   */
    var listOfStates = (0, react_1.useMemo)(function () {
        var selectedCountry = countriesStates_json_1["default"] === null || countriesStates_json_1["default"] === void 0 ? void 0 : countriesStates_json_1["default"].find(function (c) { var _a; return c.iso2 === ((_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.country); });
        if (selectedCountry) {
            return selectedCountry.states.map(function (state) { return ({ label: state.name, value: state.state_code }); });
        }
        return [];
    }, [(_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.country]);
    /**
     * Executed on the form submit if editing mode is true
     * @returns the list of addresses with the new updates
     */
    var editAddress = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var listOfAddresses = __spreadArray([], value, true);
        listOfAddresses[addressIdx].address1 = (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.address1;
        listOfAddresses[addressIdx].address2 = (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.address2;
        listOfAddresses[addressIdx].address3 = (_c = state === null || state === void 0 ? void 0 : state.data) === null || _c === void 0 ? void 0 : _c.address3;
        listOfAddresses[addressIdx].city = (_d = state === null || state === void 0 ? void 0 : state.data) === null || _d === void 0 ? void 0 : _d.city;
        listOfAddresses[addressIdx].postalCode = Number((_e = state === null || state === void 0 ? void 0 : state.data) === null || _e === void 0 ? void 0 : _e.postalCode);
        listOfAddresses[addressIdx].country = (_f = state === null || state === void 0 ? void 0 : state.data) === null || _f === void 0 ? void 0 : _f.country;
        listOfAddresses[addressIdx].state = (_g = state === null || state === void 0 ? void 0 : state.data) === null || _g === void 0 ? void 0 : _g.states;
        listOfAddresses[addressIdx].types = (_h = state === null || state === void 0 ? void 0 : state.data) === null || _h === void 0 ? void 0 : _h.type;
        return listOfAddresses;
    };
    /**
     * Executed on the form submit if editing mode is false
     * @returns the lists of addresses with the new ones created
     */
    var addNewAddress = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var listOfAddresses = __spreadArray([], value, true);
        var id = (listOfAddresses === null || listOfAddresses === void 0 ? void 0 : listOfAddresses.length) + 1;
        listOfAddresses.push({
            id: id,
            address1: (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.address1,
            address2: (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.address2,
            address3: (_c = state === null || state === void 0 ? void 0 : state.data) === null || _c === void 0 ? void 0 : _c.address3,
            city: (_d = state === null || state === void 0 ? void 0 : state.data) === null || _d === void 0 ? void 0 : _d.city,
            postalCode: Number((_e = state === null || state === void 0 ? void 0 : state.data) === null || _e === void 0 ? void 0 : _e.postalCode),
            country: (_f = state === null || state === void 0 ? void 0 : state.data) === null || _f === void 0 ? void 0 : _f.country,
            state: (_g = state === null || state === void 0 ? void 0 : state.data) === null || _g === void 0 ? void 0 : _g.states,
            types: (_h = state === null || state === void 0 ? void 0 : state.data) === null || _h === void 0 ? void 0 : _h.type
        });
        setIsEditing(false);
        return listOfAddresses;
    };
    /**
     * Form submit handler.
     * It adds a new address or edits an existing one and then
     * closes the Drawer.
     */
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var valid, listOfAddresses, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dispatch(Form_1.formActions.submitForm())];
                case 1:
                    valid = (_b.sent()).valid;
                    if (!valid)
                        return [2 /*return*/];
                    listOfAddresses = isEditing ? editAddress() : addNewAddress();
                    _a = onChange;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, onChange(listOfAddresses)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    _a;
                    handleClose(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var fields = (0, react_1.useMemo)(function () {
        return [
            {
                name: "country",
                type: "dropdown",
                label: "Country",
                size: "sm",
                required: true,
                inputSettings: {
                    options: countries
                }
            },
            {
                name: "address1",
                type: "text",
                label: "Address",
                size: "lg",
                required: true
            },
            {
                name: "address2",
                type: "text",
                label: undefined,
                size: "lg"
            },
            {
                name: "address3",
                type: "text",
                label: undefined,
                size: "lg"
            },
            {
                name: "city",
                type: "text",
                label: "City",
                size: "sm",
                required: true
            },
            {
                name: "states",
                type: "dropdown",
                label: "States",
                size: "sm",
                inputSettings: {
                    options: listOfStates
                }
            },
            {
                name: "postalCode",
                type: "text",
                label: "Postal Code",
                size: "sm",
                required: true,
                inputSettings: {
                    type: "number"
                }
            },
            {
                name: "type",
                type: "checkbox",
                label: "Type",
                size: "sm",
                required: true,
                inputSettings: {
                    options: addressTypes
                }
            },
        ];
    }, [countries, listOfStates, addressTypes]);
    var buttons = [
        {
            label: "Cancel",
            onClick: function () { return handleClose(); },
            color: "gray",
            variant: "outlined"
        },
        {
            label: "Save",
            onClick: onSubmit,
            color: "yellow",
            variant: "contained"
        }
    ];
    return (React.createElement(Form_1["default"], { title: 'Address Information', buttons: buttons, "data-testid": "address-testid", state: state, dispatch: dispatch, sections: sections, fields: fields, type: 'drawer', dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }));
};
exports["default"] = AddressDrawer;
