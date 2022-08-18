import * as React from "react";
import { memo } from "react";
import { capitalize } from "lodash";
// Components
import Button from "../../../components/Button";
// Styles
import { AddressTitle, ButtonsWrapper, StyledAddressCard, } from "./AddressCard.styled";
import countriesWithStates from "../countriesStates.json";
const AddressCard = (props) => {
    var _a;
    const { address, addressIndex, onEdit, onRemoveAddress, disabled } = props;
    const selectedCountry = countriesWithStates.find((country) => {
        return country.iso2 === (address === null || address === void 0 ? void 0 : address.country);
    });
    const selectedState = selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.states.find((state) => {
        return state.state_code === (address === null || address === void 0 ? void 0 : address.state);
    });
    return (React.createElement(StyledAddressCard, { "data-testid": "address-card-test" },
        React.createElement(AddressTitle, null, `${(_a = address.types) === null || _a === void 0 ? void 0 : _a.join(", ").replace(/\w+/g, capitalize)} Address`),
        React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address1),
        (address === null || address === void 0 ? void 0 : address.address2) && React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address2),
        (address === null || address === void 0 ? void 0 : address.address3) && React.createElement("span", null, address === null || address === void 0 ? void 0 : address.address3),
        React.createElement("span", null, `${address === null || address === void 0 ? void 0 : address.city}, ${selectedState ? selectedState.name : ""} ${address === null || address === void 0 ? void 0 : address.postalCode}`),
        React.createElement("span", null, selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.name),
        React.createElement(ButtonsWrapper, null,
            React.createElement(Button, { label: "Edit", color: "teal", variant: "text", disabled: disabled, muiAttrs: { disableRipple: true }, onClick: () => onEdit(address, addressIndex) }),
            React.createElement(Button, { color: "red", variant: "text", muiAttrs: { disableRipple: true }, disabled: disabled, label: "Remove", onClick: () => onRemoveAddress(addressIndex) }))));
};
export default memo(AddressCard);
