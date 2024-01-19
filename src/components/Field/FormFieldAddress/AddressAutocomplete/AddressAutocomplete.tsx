import * as React from "react";
import { memo, ReactElement } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { AddressAutocompleteProps } from "./AddressAutocompleteTypes";
import Popover from "@mui/material/Popover"

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
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const handleFocus = (event) => {
		setAnchorEl(event.target);
	};

	const handleBlur = () => {
		setAnchorEl(null);
	};

	return (
		<LocationSearchInputWrapper className={className}>
			<PlacesAutocomplete value={value} onChange={onChange} onSelect={onSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps }) => (
					<div style={{position: "relative"}}>
						<StyledInputSearch
							{...textField}
							fieldSize={fieldSize}
							inputProps={{ "data-testid": "location-search-input" }}
							{...getInputProps({
								placeholder: placeholder,
							})}
							variant="outlined"
							value={value}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
						<Popover
							open={Boolean(anchorEl) && suggestions?.length > 0}
							anchorEl={anchorEl}
							onClose={handleBlur}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							disableAutoFocus={true}
							disableEnforceFocus={true}
						>
							<SuggestionsContainer>
								{suggestions?.map((suggestion) => {
									return (
										<SuggestionsDescriptionContainer
											{...getSuggestionItemProps(suggestion)}
											key={suggestion?.placeId}
											$isSuggestionActive={suggestion?.active}
										>
											<SuggestionDescription>
												{suggestion?.description}
											</SuggestionDescription>
										</SuggestionsDescriptionContainer>
									);
								})}
							</SuggestionsContainer>
						</Popover>
					</div>
				)}
			</PlacesAutocomplete>
		</LocationSearchInputWrapper>
	);
};

export default memo(AddressAutocomplete);
