import React, { memo, useContext, useMemo } from "react";
import { getCountryCallingCode, isSupportedCountry } from "react-phone-number-input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import type { PhoneCodeSelectProps } from "./FormFieldPhoneTypes";

import { StyledFlagSelect } from "./FormFieldPhone.styled";
import PhoneCodeAutocomplete from "./PhoneCodeAutocomplete";
import FormFieldPhoneContext from "./FormFieldPhoneContext";
import PhoneCountryFlag from "./PhoneCountryFlag";
import { Row, StyledPopper, StyledPopperPaper } from "@root/components/common";
import Button from "@root/components/Button";

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
	const {
		disabled,
		autocompleteOpen,
		setAutocompleteOpen,
		container,
		international,
	} = useContext(FormFieldPhoneContext);
	const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);
	const countryCallingCode = isSupportedCountry(value) && getCountryCallingCode(value);

	return (
		<StyledFlagSelect>
			<Button
				muiAttrs={props}
				variant="contained"
				size="xlarge"
				bluntRight
				onClick={() => setAutocompleteOpen(true)}
				mIcon={autocompleteOpen ? ExpandLessIcon : ExpandMoreIcon}
				iconPosition="right"
				disabled={disabled}
				label={(
					<Row $align="center" $gap={[2]}>
						<PhoneCountryFlag
							aria-hidden
							country={value}
							label={selectedOption?.label}
							disabled={disabled}
						/>
						{!international && countryCallingCode && (
							<span>
								{`+${countryCallingCode}`}
							</span>
						)}
					</Row>
				)}
			/>
			<StyledPopper
				open={autocompleteOpen}
				anchorEl={container}
				$width={container?.clientWidth}
				modifiers={popperModifiers}
			>
				<StyledPopperPaper $hideBorder>
					<PhoneCodeAutocomplete
						options={options}
						onChange={onChange}
						value={selectedOption}
					/>
				</StyledPopperPaper>
			</StyledPopper>
		</StyledFlagSelect>
	);
}

export default memo(PhoneCodeSelect);
