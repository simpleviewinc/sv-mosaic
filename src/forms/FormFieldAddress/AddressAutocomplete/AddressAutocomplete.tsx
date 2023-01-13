import * as React from "react";
import { memo, ReactElement } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { AddressAutocompleteProps } from "./AddressAutocompleteTypes";

// Styles
import {
	LocationSearchInputWrapper,
	StyledInputSearch,
	SuggestionDescription,
	SuggestionsContainer,
	SuggestionsDescriptionContainer,
} from "./AddressAutocomplete.styled";

const AddressAutocomplete = (props: AddressAutocompleteProps): ReactElement => {
	const {
		className,
		value,
		onChange,
		onSelect,
		textField,
		fieldSize,
		placeholder,
	} = props;

	return (
		<LocationSearchInputWrapper className={className}>
			<PlacesAutocomplete value={value} onChange={onChange} onSelect={onSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps }) => (
					<div>
						<StyledInputSearch
							{...textField}
							fieldSize={fieldSize}
							inputProps={{ "data-testid": "location-search-input" }}
							{...getInputProps({
								placeholder: placeholder,
							})}
							variant="outlined"
							value={value}
						/>
						{suggestions?.length > 0 && (
							<SuggestionsContainer>
								{suggestions?.map((suggestion) => {
									return (
										<SuggestionsDescriptionContainer
											fieldSize={fieldSize}
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
				)}
			</PlacesAutocomplete>
		</LocationSearchInputWrapper>
	);
};

export default memo(AddressAutocomplete);
