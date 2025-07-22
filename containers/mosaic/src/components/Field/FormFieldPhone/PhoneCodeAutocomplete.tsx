import type { ReactElement } from "react";
import type { AutocompleteProps as MuiAutocompleteProps, AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

import React, { memo, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { getCountryCallingCode, isSupportedCountry } from "react-phone-number-input";
import SearchIcon from "@mui/icons-material/Search";

import type { PhoneCodeAutocompleteProps } from "./FormFieldPhoneTypes";

import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import { StyledAutocomplete, StyledAutocompletePaper } from "./FormFieldPhone.styled";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import { isLabelValue, isReactNode } from "@root/types";
import PhoneCountryFlag from "./PhoneCountryFlag";

type AutocompleteProps = MuiAutocompleteProps<PhoneCodeAutocompleteProps["options"][number], false, true, false>;

function PhoneCodeAutocomplete({
	options,
	onChange,
	value,
}: PhoneCodeAutocompleteProps): ReactElement {
	const { setAutocompleteOpen } = useContext(FormFieldPhoneContext);
	const autocompleteInputRef = useRef<HTMLInputElement>();

	const autocompleteProps = useMemo<Pick<AutocompleteProps, "renderInput" | "getOptionLabel" | "getOptionKey" | "PopperComponent" | "isOptionEqualToValue" | "renderOption">>(() => {
		return {
			renderInput: (props: AutocompleteRenderInputParams) => (
				<StyledTextField
					{...props}
					InputProps={{
						inputRef: autocompleteInputRef, ...props.InputProps,
						startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
					}}
				/>
			),
			getOptionLabel: ({ label }) => label,
			getOptionKey: ({ value }) => value,
			PopperComponent: ({ children, placement, disablePortal, anchorEl, ...props }) => (
				<div {...props}>
					{isReactNode(children) ? children : children({ placement })}
				</div>
			),
			isOptionEqualToValue: (option, value) => isLabelValue(option) && isLabelValue(value) && option.value === value.value,
			renderOption: ({ key: _, ...props }, option, __, { getOptionKey, getOptionLabel }) => {
				const value = String(getOptionKey(option));
				const label = getOptionLabel(option);

				return (
					<li key={value} {...props}>
						<PhoneCountryFlag
							aria-hidden
							country={value}
							label={label}
						/>
						{label}
						<span>{isSupportedCountry(value) && `+${getCountryCallingCode(value)}`}</span>
					</li>
				);
			},
		};
	}, []);

	const _onChange = useCallback((_: React.SyntheticEvent, option?: PhoneCodeAutocompleteProps["options"][number]) => {
		onChange(option?.value || "ZZ");
	}, [onChange]);

	useEffect(() => {
		autocompleteInputRef.current?.focus();
		setTimeout(() => autocompleteInputRef.current?.select());
	}, []);

	return (
		<StyledAutocomplete
			{...autocompleteProps}
			options={options}
			openOnFocus
			fullWidth
			onClose={() => setAutocompleteOpen(false)}
			onChange={_onChange}
			value={value}
			disableClearable
			popupIcon={false}
			PaperComponent={StyledAutocompletePaper}
			open
		/>
	);
}

export default memo(PhoneCodeAutocomplete);
