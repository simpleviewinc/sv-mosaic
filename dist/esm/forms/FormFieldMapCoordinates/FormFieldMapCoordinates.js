import * as React from "react";
import { memo, useCallback, useEffect, useState, } from "react";
// External libraries
import { isEmpty } from "lodash";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
// Components
import Button from "../../components/Button";
import ToggleSwitch from "../../components/ToggleSwitch";
import MapCoordinatesDrawer from "./MapCoordinatesDrawer";
// Styles
import { ButtonsWrapper, Column, mapContainerStyle, CoordinatesCard, CoordinatesValues, LatitudeValue, LatLngLabel, MapImageColumn, SwitchContainer, } from "./MapCoordinates.styled";
// Utils
import { defaultMapPosition, getAddressStringFromAddressObject, libraries, mapOptions, } from "./MapCoordinatesUtils";
import Drawer from "../../components/Drawer";
const FormFieldMapCoordinates = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const { value, onBlur, onChange, fieldDef, } = props;
    // State variables
    const [autocoordinatesChecked, setAutocoordinatesChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
    const [dialogOpen, setIsDialogOpen] = useState(false);
    /**
     * Opens the modal that displays the map.
     */
    const handleAddCoordinates = () => {
        setIsModalOpen(true);
    };
    /**
     * Closes the modal.
     */
    const handleClose = async (save = false) => {
        if (typeof save === "boolean" && save) {
            setUnsavedChanges(false);
            setIsModalOpen(false);
            if (onBlur)
                await onBlur();
        }
        else if (hasUnsavedChanges)
            setIsDialogOpen(true);
        else {
            setUnsavedChanges(false);
            setIsModalOpen(false);
            if (onBlur)
                await onBlur();
        }
    };
    const handleDialogClose = async (close) => {
        if (close) {
            await handleClose(true);
        }
        setIsDialogOpen(false);
    };
    /**
     * Clear values for the entered location.
     */
    const removeLocation = () => {
        onChange && onChange(undefined);
    };
    /**
     * Managed the switch state to enable or disable autocoordinates.
     * @param e
     */
    const handleToggleSwitchChange = async (isChecked) => {
        setAutocoordinatesChecked(isChecked);
    };
    /**
     * Set map coordinates and lat and lng fields with the values
     * provided by the address that is passed. Is only executed when
     * the autocoordinates value is true.
     */
    const setCoordinatesFromAddress = useCallback(async () => {
        var _a;
        try {
            const addressString = getAddressStringFromAddressObject((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.address);
            const results = await geocodeByAddress(addressString);
            const latLng = await getLatLng(results[0]);
            onChange && onChange({
                lat: latLng.lat,
                lng: latLng.lng,
            });
        }
        catch (error) {
            console.log(error);
        }
    }, [(_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.address]);
    /**
     *	When the component is mounted and the auto coordinates flag is true
     *  setCoordinatesFromAddress is executed.
     */
    useEffect(() => {
        if (autocoordinatesChecked) {
            setCoordinatesFromAddress();
        }
    }, [autocoordinatesChecked, (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.address]);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.apiKey,
        libraries,
    });
    if (loadError)
        return React.createElement("span", null, "Error loading maps");
    if (!isLoaded)
        return React.createElement("span", null, "Loading Maps");
    const mapPosition = {
        lat: (value === null || value === void 0 ? void 0 : value.lat)
            ? Number(value.lat)
            : ((_e = (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.mapPosition) === null || _e === void 0 ? void 0 : _e.lat)
                ? fieldDef.inputSettings.mapPosition.lat
                : defaultMapPosition.lat,
        lng: (value === null || value === void 0 ? void 0 : value.lng)
            ? Number(value.lng)
            : ((_g = (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.mapPosition) === null || _g === void 0 ? void 0 : _g.lng)
                ? fieldDef.inputSettings.mapPosition.lng
                : defaultMapPosition.lng,
    };
    return (React.createElement(React.Fragment, null,
        value || !isEmpty((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.address) ? (React.createElement("div", null,
            !isEmpty((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.address) && (React.createElement(SwitchContainer, null,
                React.createElement(ToggleSwitch, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, label: "Use same as address", labelPlacement: "start", onChange: handleToggleSwitchChange, checked: autocoordinatesChecked }))),
            React.createElement(CoordinatesCard, { hasAddress: !isEmpty((_k = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _k === void 0 ? void 0 : _k.address) },
                React.createElement(MapImageColumn, null,
                    React.createElement(GoogleMap, { mapContainerStyle: mapContainerStyle, center: mapPosition, zoom: 10, options: mapOptions },
                        React.createElement(Marker, { position: mapPosition }))),
                React.createElement(Column, null,
                    React.createElement(LatLngLabel, null, "Latitude"),
                    React.createElement(LatitudeValue, null, mapPosition.lat),
                    React.createElement(LatLngLabel, null, "Longitude"),
                    React.createElement(CoordinatesValues, null, mapPosition.lng)),
                React.createElement(ButtonsWrapper, { hasAddress: isEmpty((_l = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _l === void 0 ? void 0 : _l.address) },
                    !autocoordinatesChecked && (React.createElement(Button, { color: "teal", variant: "text", label: "Edit", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: handleAddCoordinates, muiAttrs: { disableRipple: true } })),
                    !autocoordinatesChecked &&
                        isEmpty((_m = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _m === void 0 ? void 0 : _m.address) && (React.createElement(Button, { color: "red", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, variant: "text", label: "Remove", onClick: removeLocation, muiAttrs: { disableRipple: true } })))))) : (React.createElement(Button, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: handleAddCoordinates, color: "gray", variant: "outlined", label: "ADD COORDINATES", muiAttrs: { disableRipple: true } })),
        React.createElement(Drawer, { open: isModalOpen, onClose: handleClose },
            React.createElement(MapCoordinatesDrawer, { value: value, fieldDef: fieldDef, onChange: onChange, handleClose: handleClose, handleUnsavedChanges: (e) => setUnsavedChanges(e), dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
export default memo(FormFieldMapCoordinates);
