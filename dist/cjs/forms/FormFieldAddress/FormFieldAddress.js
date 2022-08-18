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
var AddressDrawer_1 = __importDefault(require("./AddressDrawer"));
var Button_1 = __importDefault(require("../../components/Button"));
var Drawer_1 = __importDefault(require("../../components/Drawer"));
// Styles
var Address_styled_1 = require("./Address.styled");
// Utils
var AddressCard_1 = __importDefault(require("./AddressCard"));
var FormFieldAddress = function (props) {
    var value = props.value, onBlur = props.onBlur, onChange = props.onChange, fieldDef = props.fieldDef;
    // State variables
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = (0, react_1.useState)(null), addressToEdit = _c[0], setAddressToEdit = _c[1];
    // States of the form values
    var _d = (0, react_1.useState)(null), addressIdx = _d[0], setAddressIdx = _d[1];
    var _e = (0, react_1.useState)(false), hasUnsavedChanges = _e[0], setUnsavedChanges = _e[1];
    var _f = (0, react_1.useState)(false), dialogOpen = _f[0], setIsDialogOpen = _f[1];
    /**
     * Opens the modal to create an address card
     * and sets editing mode to false.
     */
    var addAddressHandler = function () {
        setIsEditing(false);
        setOpen(true);
    };
    /**
     * Removes the clicked address card from the list.
     * @param addressToRemove
     */
    var removeAddressHandler = function (addressIndex) { return __awaiter(void 0, void 0, void 0, function () {
        var listOfAddresses;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listOfAddresses = __spreadArray([], value, true);
                    listOfAddresses.splice(addressIndex, 1);
                    if (!(listOfAddresses.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, onChange(listOfAddresses)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, onChange(undefined)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Closes the modal and resets the values for
     * form field.
     */
    var handleClose = function (save) {
        if (save === void 0) { save = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof save === "boolean" && save)) return [3 /*break*/, 3];
                        setOpen(false);
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
                        setOpen(false);
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
            if (close) {
                setOpen(false);
                //await onBlur();
            }
            setIsDialogOpen(false);
            return [2 /*return*/];
        });
    }); };
    /**
     * Opens the modal in editing mode and sets the
     * form fields values with the data of the address
     * to be edited.
     * @param addressToEdit
     */
    var showEditModal = function (addressToEdit, addressIndex) {
        var address1 = addressToEdit.address1, address2 = addressToEdit.address2, address3 = addressToEdit.address3, city = addressToEdit.city, postalCode = addressToEdit.postalCode, types = addressToEdit.types, country = addressToEdit.country, state = addressToEdit.state;
        setAddressToEdit({
            address1: address1,
            address2: address2,
            address3: address3,
            city: city,
            postalCode: postalCode,
            types: types,
            country: country,
            state: state
        });
        setAddressIdx(addressIndex);
        setIsEditing(true);
        setOpen(true);
    };
    return (React.createElement("div", null,
        React.createElement(Address_styled_1.FlexContainer, null,
            React.createElement(Address_styled_1.AddAddressWrapper, null,
                React.createElement(Button_1["default"], { disabled: fieldDef.disabled, color: "gray", variant: "outlined", label: "ADD ADDRESS", onClick: addAddressHandler, muiAttrs: { disableRipple: true } })),
            value &&
                value.map(function (address, idx) { return (React.createElement(AddressCard_1["default"], { key: "".concat(idx), address: address, addressIndex: idx, onEdit: showEditModal, disabled: fieldDef.disabled, onRemoveAddress: removeAddressHandler })); })),
        React.createElement(Drawer_1["default"], { open: open, onClose: handleClose },
            React.createElement(AddressDrawer_1["default"], { open: open, value: value, onChange: onChange, isEditing: isEditing, addressIdx: addressIdx, handleClose: handleClose, setIsEditing: setIsEditing, addressToEdit: addressToEdit, hasUnsavedChanges: hasUnsavedChanges, handleUnsavedChanges: function (e) { return setUnsavedChanges(e); }, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
exports["default"] = (0, react_1.memo)(FormFieldAddress);
