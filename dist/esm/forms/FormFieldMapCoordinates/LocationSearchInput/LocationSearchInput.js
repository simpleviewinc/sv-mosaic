import { InputAdornment } from "@mui/material";
import * as React from "react";
import { memo, useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from "react-places-autocomplete";
// Styles
import { LocationSearchInputWrapper, StyledClearIcon, StyledInputSearch, SuggestionDescription, SuggestionsContainer, SuggestionsDescriptionContainer, } from "../MapCoordinates.styled";
const LocationSearchInput = (props) => {
    const { handleCoordinates } = props;
    // State variables
    const [address, setAddress] = useState("");
    /**
     * Gets lat and lng values from the selected suggestion and
     * updates the state of the MapCoordinates component.
     * @param value
     */
    const handleSelect = async (value) => {
        setAddress(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            handleCoordinates(latLng);
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * Reset the address value that is displayed in the autocomplete component.
     */
    const clearValue = () => {
        setAddress("");
    };
    return (React.createElement(LocationSearchInputWrapper, null,
        React.createElement(PlacesAutocomplete, { value: address, onChange: setAddress, onSelect: handleSelect }, ({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (React.createElement("div", null,
                React.createElement(StyledInputSearch, { fieldSize: '100%', inputProps: { "data-testid": "location-search-input" }, ...getInputProps({
                        placeholder: "Type a location, address or city…",
                    }), InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: 'end' },
                            React.createElement(StyledClearIcon, { "data-testid": "location-search-clear-icon", onClick: clearValue }))),
                    }, variant: 'outlined', value: address }),
                (suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) > 0 && (React.createElement(SuggestionsContainer, null, suggestions === null || suggestions === void 0 ? void 0 : suggestions.map((suggestion) => {
                    return (React.createElement(SuggestionsDescriptionContainer, { ...getSuggestionItemProps(suggestion), key: suggestion === null || suggestion === void 0 ? void 0 : suggestion.placeId, isSuggestionActive: suggestion === null || suggestion === void 0 ? void 0 : suggestion.active },
                        React.createElement(SuggestionDescription, null, suggestion === null || suggestion === void 0 ? void 0 : suggestion.description)));
                })))));
        })));
};
export default memo(LocationSearchInput);
