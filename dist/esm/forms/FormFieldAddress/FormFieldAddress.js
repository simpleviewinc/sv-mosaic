import * as React from "react";
import { memo, useState } from "react";
// Components
import AddressDrawer from "./AddressDrawer";
import Button from "../../components/Button";
import Drawer from "../../components/Drawer";
// Styles
import { AddAddressWrapper, FlexContainer } from "./Address.styled";
// Utils
import AddressCard from "./AddressCard";
const FormFieldAddress = (props) => {
    const { value, onBlur, onChange, fieldDef, } = props;
    // State variables
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [addressToEdit, setAddressToEdit] = useState(null);
    // States of the form values
    const [addressIdx, setAddressIdx] = useState(null);
    const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
    const [dialogOpen, setIsDialogOpen] = useState(false);
    /**
     * Opens the modal to create an address card
     * and sets editing mode to false.
     */
    const addAddressHandler = () => {
        setIsEditing(false);
        setOpen(true);
    };
    /**
     * Removes the clicked address card from the list.
     * @param addressToRemove
     */
    const removeAddressHandler = async (addressIndex) => {
        const listOfAddresses = [...value];
        listOfAddresses.splice(addressIndex, 1);
        if (listOfAddresses.length > 0) {
            await onChange(listOfAddresses);
        }
        else {
            await onChange(undefined);
        }
    };
    /**
     * Closes the modal and resets the values for
     * form field.
     */
    const handleClose = async (save = false) => {
        if (typeof save === "boolean" && save) {
            setOpen(false);
            if (onBlur)
                await onBlur();
        }
        else if (hasUnsavedChanges)
            setIsDialogOpen(true);
        else {
            setOpen(false);
            if (onBlur)
                await onBlur();
        }
    };
    const handleDialogClose = async (close) => {
        if (close) {
            setOpen(false);
            //await onBlur();
        }
        setIsDialogOpen(false);
    };
    /**
     * Opens the modal in editing mode and sets the
     * form fields values with the data of the address
     * to be edited.
     * @param addressToEdit
     */
    const showEditModal = (addressToEdit, addressIndex) => {
        const { address1, address2, address3, city, postalCode, types, country, state, } = addressToEdit;
        setAddressToEdit({
            address1,
            address2,
            address3,
            city,
            postalCode,
            types,
            country,
            state,
        });
        setAddressIdx(addressIndex);
        setIsEditing(true);
        setOpen(true);
    };
    return (React.createElement("div", null,
        React.createElement(FlexContainer, null,
            React.createElement(AddAddressWrapper, null,
                React.createElement(Button, { disabled: fieldDef.disabled, color: "gray", variant: "outlined", label: "ADD ADDRESS", onClick: addAddressHandler, muiAttrs: { disableRipple: true } })),
            value &&
                value.map((address, idx) => (React.createElement(AddressCard, { key: `${idx}`, address: address, addressIndex: idx, onEdit: showEditModal, disabled: fieldDef.disabled, onRemoveAddress: removeAddressHandler })))),
        React.createElement(Drawer, { open: open, onClose: handleClose },
            React.createElement(AddressDrawer, { open: open, value: value, onChange: onChange, isEditing: isEditing, addressIdx: addressIdx, handleClose: handleClose, setIsEditing: setIsEditing, addressToEdit: addressToEdit, hasUnsavedChanges: hasUnsavedChanges, handleUnsavedChanges: (e) => setUnsavedChanges(e), dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
export default memo(FormFieldAddress);
