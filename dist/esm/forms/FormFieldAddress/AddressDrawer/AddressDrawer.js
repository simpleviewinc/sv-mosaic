import * as React from "react";
import { useEffect, useMemo, useState } from "react";
// Components
import Form, { formActions, useForm } from "../../../components/Form";
// Utils
import countriesWithStates from "../countriesStates.json";
import _ from "lodash";
// Layout of the form elements.
const sections = [
    {
        fields: [
            [["country"]],
            [["address1"]],
            [["address2"]],
            [["address3"]],
            [["city"], ["states"], ["postalCode"]],
            [["type"]],
        ],
    },
];
const countries = countriesWithStates === null || countriesWithStates === void 0 ? void 0 : countriesWithStates.map((country) => ({
    label: country.name,
    value: country.iso2,
}));
const addressTypes = [
    {
        label: "Physical",
        value: "physical",
    },
    {
        label: "Billing",
        value: "billing",
    },
    {
        label: "Shipping",
        value: "shipping",
    },
];
const AddressDrawer = (props) => {
    var _a;
    const { value, onChange, open, addressToEdit, isEditing, addressIdx, handleClose, setIsEditing, handleUnsavedChanges, dialogOpen, handleDialogClose, } = props;
    const { dispatch, state } = useForm();
    const [initialState, setInitialState] = useState(state.data);
    useEffect(() => {
        if (state.data !== undefined && initialState !== undefined)
            handleUnsavedChanges(!_.isEqual(initialState, state.data));
    }, [state.data, initialState]);
    useEffect(() => {
        let isMounted = true;
        if (isEditing && open && isMounted) {
            let editingState = {};
            const fullCountryData = countriesWithStates === null || countriesWithStates === void 0 ? void 0 : countriesWithStates.find((c) => c.iso2 === (addressToEdit === null || addressToEdit === void 0 ? void 0 : addressToEdit.country));
            const fullStateData = fullCountryData.states.find((s) => s.state_code === (addressToEdit === null || addressToEdit === void 0 ? void 0 : addressToEdit.state));
            dispatch(formActions.setFieldValue({
                name: "address1",
                value: addressToEdit.address1,
            }));
            editingState = {
                ...editingState,
                "address1": addressToEdit.address1,
            };
            if (addressToEdit.address2) {
                dispatch(formActions.setFieldValue({
                    name: "address2",
                    value: addressToEdit.address2,
                }));
                editingState = {
                    ...editingState,
                    "address2": addressToEdit.address2,
                };
            }
            if (addressToEdit.address3) {
                dispatch(formActions.setFieldValue({
                    name: "address3",
                    value: addressToEdit.address3,
                }));
                editingState = {
                    ...editingState,
                    "address3": addressToEdit.address3,
                };
            }
            dispatch(formActions.setFieldValue({
                name: "city",
                value: addressToEdit.city,
            }));
            editingState = {
                ...editingState,
                "city": addressToEdit.city,
            };
            dispatch(formActions.setFieldValue({
                name: "postalCode",
                value: Number(addressToEdit.postalCode),
            }));
            editingState = {
                ...editingState,
                "postalCode": Number(addressToEdit.postalCode),
            };
            dispatch(formActions.setFieldValue({
                name: "type",
                value: addressToEdit.types,
            }));
            editingState = {
                ...editingState,
                "type": addressToEdit.types,
            };
            dispatch(formActions.setFieldValue({
                name: "country",
                value: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.iso2,
            }));
            editingState = {
                ...editingState,
                "country": { label: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.name, value: fullCountryData === null || fullCountryData === void 0 ? void 0 : fullCountryData.iso2 },
            };
            dispatch(formActions.setFieldValue({
                name: "states",
                value: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.state_code,
            }));
            editingState = {
                ...editingState,
                "states": {
                    label: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.name,
                    value: fullStateData === null || fullStateData === void 0 ? void 0 : fullStateData.state_code,
                },
            };
            setInitialState(editingState);
        }
        return () => {
            isMounted = false;
        };
    }, [addressToEdit]);
    /**
   * Gets the list of states for the
   * selected country
   */
    const listOfStates = useMemo(() => {
        const selectedCountry = countriesWithStates === null || countriesWithStates === void 0 ? void 0 : countriesWithStates.find((c) => { var _a; return c.iso2 === ((_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.country); });
        if (selectedCountry) {
            return selectedCountry.states.map((state) => ({ label: state.name, value: state.state_code }));
        }
        return [];
    }, [(_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.country]);
    /**
     * Executed on the form submit if editing mode is true
     * @returns the list of addresses with the new updates
     */
    const editAddress = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const listOfAddresses = [...value];
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
    const addNewAddress = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const listOfAddresses = [...value];
        const id = (listOfAddresses === null || listOfAddresses === void 0 ? void 0 : listOfAddresses.length) + 1;
        listOfAddresses.push({
            id: id,
            address1: (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.address1,
            address2: (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.address2,
            address3: (_c = state === null || state === void 0 ? void 0 : state.data) === null || _c === void 0 ? void 0 : _c.address3,
            city: (_d = state === null || state === void 0 ? void 0 : state.data) === null || _d === void 0 ? void 0 : _d.city,
            postalCode: Number((_e = state === null || state === void 0 ? void 0 : state.data) === null || _e === void 0 ? void 0 : _e.postalCode),
            country: (_f = state === null || state === void 0 ? void 0 : state.data) === null || _f === void 0 ? void 0 : _f.country,
            state: (_g = state === null || state === void 0 ? void 0 : state.data) === null || _g === void 0 ? void 0 : _g.states,
            types: (_h = state === null || state === void 0 ? void 0 : state.data) === null || _h === void 0 ? void 0 : _h.type,
        });
        setIsEditing(false);
        return listOfAddresses;
    };
    /**
     * Form submit handler.
     * It adds a new address or edits an existing one and then
     * closes the Drawer.
     */
    const onSubmit = async () => {
        const { valid } = await dispatch(formActions.submitForm());
        if (!valid)
            return;
        const listOfAddresses = isEditing ? editAddress() : addNewAddress();
        onChange && (await onChange(listOfAddresses));
        handleClose(true);
    };
    const fields = useMemo(() => [
        {
            name: "country",
            type: "dropdown",
            label: "Country",
            size: "sm",
            required: true,
            inputSettings: {
                options: countries,
            },
        },
        {
            name: "address1",
            type: "text",
            label: "Address",
            size: "lg",
            required: true,
        },
        {
            name: "address2",
            type: "text",
            label: undefined,
            size: "lg",
        },
        {
            name: "address3",
            type: "text",
            label: undefined,
            size: "lg",
        },
        {
            name: "city",
            type: "text",
            label: "City",
            size: "sm",
            required: true,
        },
        {
            name: "states",
            type: "dropdown",
            label: "States",
            size: "sm",
            inputSettings: {
                options: listOfStates,
            },
        },
        {
            name: "postalCode",
            type: "text",
            label: "Postal Code",
            size: "sm",
            required: true,
            inputSettings: {
                type: "number",
            },
        },
        {
            name: "type",
            type: "checkbox",
            label: "Type",
            size: "sm",
            required: true,
            inputSettings: {
                options: addressTypes,
            },
        },
    ], [countries, listOfStates, addressTypes]);
    const buttons = [
        {
            label: "Cancel",
            onClick: () => handleClose(),
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
    return (React.createElement(Form, { title: 'Address Information', buttons: buttons, "data-testid": "address-testid", state: state, dispatch: dispatch, sections: sections, fields: fields, type: 'drawer', dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }));
};
export default AddressDrawer;
