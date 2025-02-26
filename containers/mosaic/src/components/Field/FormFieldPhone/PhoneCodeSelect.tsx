import React, { memo, useContext, useMemo, useRef } from "react";
import { StyledFlagSelect, StyledFlagSelectButton, StyledPopper } from "./FormFieldPhone.styled";
import type { PhoneCodeSelectProps } from "./FormFieldPhoneTypes";
import PhoneCodeAutocomplete from "./PhoneCodeAutocomplete";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import { getCountryCallingCode, isSupportedCountry } from "react-phone-number-input";
import PhoneCountryFlag from "./PhoneCountryFlag";

const popperModifiers = [
	{
		name: "offset",
		options: {
			offset: [0, 4],
		},
	},
];

function PhoneCodeSelect({
	value,
	options,
	onChange,
	iconComponent: _,
	...props
}: PhoneCodeSelectProps) {
	const { disabled, error, hasFocus, autocompleteOpen, setAutocompleteOpen, container } = useContext(FormFieldPhoneContext);
	const flagButtonRef = useRef<HTMLButtonElement>();

	const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);
	const countryCallingCode = isSupportedCountry(value) && getCountryCallingCode(value);

	return (
		<StyledFlagSelect>
			<StyledFlagSelectButton
				{...props}
				disabled={disabled}
				type="button"
				onClick={() => setAutocompleteOpen(true)}
				ref={flagButtonRef}
				$hasFocus={hasFocus}
				$error={error}
			>
				<PhoneCountryFlag
					aria-hidden
					country={value}
					label={selectedOption?.label}
				/>
				<span>
					{`+${countryCallingCode}`}
				</span>
			</StyledFlagSelectButton>
			<StyledPopper
				open={autocompleteOpen}
				anchorEl={container}
				$width={container?.clientWidth}
				modifiers={popperModifiers}
			>
				<PhoneCodeAutocomplete
					options={options}
					onChange={onChange}
					value={selectedOption}
				/>
			</StyledPopper>
		</StyledFlagSelect>
	);
}

export default memo(PhoneCodeSelect);
