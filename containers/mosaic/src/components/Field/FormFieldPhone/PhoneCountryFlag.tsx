import React, { memo } from "react";

import type { PhoneCountryFlagProps } from "./FormFieldPhoneTypes";

import { StyledFlagIcon } from "./FormFieldPhone.styled";

const flagUrl = "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg";

function PhoneCountryFlag({
	label,
	country,
	disabled,
}: PhoneCountryFlagProps) {
	return (
		<StyledFlagIcon
			src={flagUrl.replace("{XX}", country).replace("{xx}", country.toLowerCase())}
			alt={label}
			loading="lazy"
			aria-hidden
			$disabled={disabled}
		/>
	);
}

export default memo(PhoneCountryFlag);
