import type { ReactElement } from "react";

import React, { memo } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";

import type { AddressAutocompleteProps } from "./AddressAutocompleteTypes";

import { libraries } from "@root/components/Field/FormFieldMapCoordinates/MapCoordinatesUtils";

// Styles
import {
	LocationSearchInputWrapper,
	StyledInputSearch,
} from "./AddressAutocomplete.styled";
import testIds from "@root/utils/testIds";
import type { TextFieldProps } from "@mui/material/TextField";
import { StyledPopperPaper, StyledPopperListbox, StyledPopperListboxOption, StyledPopper } from "@root/components/common";

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
		error,
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

	const inputProps: TextFieldProps = {
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
				onChange={({ target: { value } }) => onChange(value)}
				disabled={disabled}
				id={id}
				error={Boolean(error)}
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
							onFocus={handleFocus}
							onBlur={handleBlur}
							disabled={disabled}
							id={id}
							data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_TEXTBOX}
							error={Boolean(error)}
						/>
						<StyledPopper
							open={Boolean(anchorEl) && suggestions?.length > 0}
							anchorEl={anchorEl}
							data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_BACKDROP}
							style={{ zIndex: 1200 }}
						>
							<StyledPopperPaper>
								<StyledPopperListbox data-testid={testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS}>
									{suggestions?.map((suggestion) => {
										return (
											<StyledPopperListboxOption
												{...getSuggestionItemProps(suggestion)}
												key={suggestion?.placeId}
												className={suggestion?.active ? "Mui-focused" : ""}
											>
												{suggestion?.description}
											</StyledPopperListboxOption>
										);
									})}
								</StyledPopperListbox>
							</StyledPopperPaper>
						</StyledPopper>
					</div>
				)}
			</PlacesAutocomplete>
		</LocationSearchInputWrapper>
	);
};

export default memo(AddressAutocomplete);
