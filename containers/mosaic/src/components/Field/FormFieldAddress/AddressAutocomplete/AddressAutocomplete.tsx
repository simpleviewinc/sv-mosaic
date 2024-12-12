import type { ReactElement } from "react";

import React, { memo } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import Popover from "@mui/material/Popover";

import type { AddressAutocompleteProps } from "./AddressAutocompleteTypes";

import { libraries } from "@root/components/Field/FormFieldMapCoordinates/MapCoordinatesUtils";

// Styles
import {
	LocationSearchInputWrapper,
	StyledInputSearch,
	SuggestionDescription,
	SuggestionsContainer,
	SuggestionsDescriptionContainer,
} from "./AddressAutocomplete.styled";
import testIds from "@root/utils/testIds";

const AddressAutocomplete = (props: AddressAutocompleteProps): ReactElement => {
	const {
		label,
		className,
		value,
		onChange,
		onBlur,
		onSelect,
		textField,
		placeholder,
		googleMapsApiKey,
		disabled,
		id,
	} = props;
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey,
		libraries,
	});

	const handleFocus = (event) => {
		setAnchorEl(event.target);
	};

	const handleBlur = () => {
		setAnchorEl(null);
		onBlur && onBlur();
	};

	const inputProps = {
		...textField,
		inputProps: {
			"data-testid": "location-search-input",
			"aria-label": label,
		},
		variant: "outlined",
		value,
		onFocus: handleFocus,
		onBlur: handleBlur,
	};

	if (!isLoaded || loadError) {
		return (
			<StyledInputSearch
				{...inputProps}
				fieldSize="lg"
				onChange={({ target: { value } }) => onChange(value)}
				disabled={disabled}
				id={id}
			/>
		);
	}

	return (
		<LocationSearchInputWrapper className={className}>
			<PlacesAutocomplete value={value} onChange={onChange} onSelect={onSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps }) => (
					<div style={{ position: "relative" }}>
						<StyledInputSearch
							{...inputProps}
							{...getInputProps({
								placeholder: placeholder,
							})}
							fieldSize=""
							onFocus={handleFocus}
							onBlur={handleBlur}
							disabled={disabled}
							id={id}
							data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_TEXTBOX}
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
							data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_BACKDROP}
						>
							<SuggestionsContainer data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS}>
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
