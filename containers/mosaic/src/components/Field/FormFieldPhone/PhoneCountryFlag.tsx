import React, { memo } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import type { PhoneCountryFlagProps } from "./FormFieldPhoneTypes";

import { StyledFlagIcon, StyledUnknownFlag } from "./FormFieldPhone.styled";

const flagUrl = "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg";

function PhoneCountryFlag({
	label = "Unknown",
	country,
	disabled,
}: PhoneCountryFlagProps) {
	if (!country) {
		return (
			<StyledUnknownFlag>
				<QuestionMarkIcon />
			</StyledUnknownFlag>
		);
	}

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
