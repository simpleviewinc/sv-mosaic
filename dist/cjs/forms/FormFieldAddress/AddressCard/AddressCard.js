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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var lodash_1 = require("lodash");
// Components
var Button_1 = __importDefault(require("../../../components/Button"));
// Styles
var AddressCard_styled_1 = require("./AddressCard.styled");
var countriesStates_json_1 = __importDefault(require("../countriesStates.json"));
var AddressCard = function (props) {
    var _a;
    var address = props.address, addressIndex = props.addressIndex, onEdit = props.onEdit, onRemoveAddress = props.onRemoveAddress, disabled = props.disabled;
    var selectedCountry = countriesStates_json_1["default"].find(function (country) {
        return country.iso2 === (address === null || address === void 0 ? void 0 : address.country);
    });
    var selectedState = selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.states.find(function (state) {
        return state.state_code === (address === null || address === void 0 ? void 0 : address.state);
    });
    return (React.createElement(AddressCard_styled_1.StyledAddressCard, { "data-testid": "address-card-test" },
        React.createElement(AddressCard_styled_1.AddressTitle, null, "".concat((_a = address.types) === null || _a === void 0 ? void 0 : _a.join(", ").replace(/\w+/g, lodash_1.capitalize), " Address")),
        React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address1),
        (address === null || address === void 0 ? void 0 : address.address2) && React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address2),
        (address === null || address === void 0 ? void 0 : address.address3) && React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address3),
        React.createElement("span", null, "".concat(address === null || address === void 0 ? void 0 : address.city, ", ").concat(selectedState ? selectedState.name : "", " ").concat(address === null || address === void 0 ? void 0 : address.postalCode)),
        React.createElement("span", null, selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.name),
        React.createElement(AddressCard_styled_1.ButtonsWrapper, null,
            React.createElement(Button_1["default"], { label: "Edit", color: "teal", variant: "text", disabled: disabled, muiAttrs: { disableRipple: true }, onClick: function () { return onEdit(address, addressIndex); } }),
            React.createElement(Button_1["default"], { color: "red", variant: "text", muiAttrs: { disableRipple: true }, disabled: disabled, label: "Remove", onClick: function () { return onRemoveAddress(addressIndex); } }))));
};
exports["default"] = (0, react_1.memo)(AddressCard);
