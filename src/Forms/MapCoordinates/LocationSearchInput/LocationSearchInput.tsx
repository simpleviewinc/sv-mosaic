import { InputAdornment } from '@material-ui/core';
import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
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
import { LocationSearchInputProps } from '../MapCoordinatesTypes';

const LocationSearchInput = (props: LocationSearchInputProps): ReactElement => {
	const { handleCoordinates } = props;

	// State variables
	const [address, setAddress] = useState('');
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
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * Reset the address value that is displayed in the autocomplete component. 
	 */
	const clearValue = () => {
		setAddress('');
	};

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
								fieldSize='100%'
								inputProps={{ "data-testid": "location-search-input" }}
								{...getInputProps({
									placeholder: 'Type a location, address or city…',
								})}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<StyledClearIcon data-testid={'location-search-clear-icon'} onClick={clearValue} />
										</InputAdornment>
									),
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
