import { InputAdornment } from '@material-ui/core';
import * as React from 'react';
import { memo, ReactElement, useCallback, useRef, useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

// Styles
import {
  LocationSearchInputWrapper,
  StyledClearIcon,
  StyledInputSearch,
  SuggestionDescription,
  SuggestionsContainer,
  SuggestionsDescriptionContainer,
} from '../MapCoordinates.styled';

const LocationSearchInput = (): ReactElement => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    setAddress(value);
    /* const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    console.log('Lalitude longitude: ', latLng);
    setAddress(address);
    setCoordinates(latLng); */
  };

  const clearValue = () => {
    setAddress('');
  }

  return (
    <LocationSearchInputWrapper>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => {
          return (
            <div>
              <StyledInputSearch
                {...getInputProps({
                  placeholder: 'Type a location, address or city…',
                })}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><StyledClearIcon onClick={clearValue} /></InputAdornment>,
                }}
                variant='outlined'
                value={address}
              />
              {suggestions?.length > 0 && (
                <SuggestionsContainer>
                  {suggestions?.map((suggestion) => {
                    return (
                      <SuggestionsDescriptionContainer
                        {...getSuggestionItemProps(suggestion)}
                        key={suggestion?.placeId}
                        isSuggestionActive={suggestion?.active}
                      >
                        <SuggestionDescription>
                          {suggestion?.description}
                        </SuggestionDescription>
                      </SuggestionsDescriptionContainer>
                    );
                  })}
                </SuggestionsContainer>
              )}
            </div>
          );
        }}
      </PlacesAutocomplete>
    </LocationSearchInputWrapper>
  );
};

export default memo(LocationSearchInput);
