import * as React from "react";
import { memo, ReactElement } from "react";
import { capitalize } from "lodash";

// Components
import Button from "@root/components/Button";

// Styles
import {
	AddressTitle,
	ButtonsWrapper,
	StyledAddressCard,
} from "./AddressCard.styled";

// Types
import { AddressCardProps } from "../AddressTypes";
import countriesWithStates from "@root/forms/FormFieldAddress/countriesStates.json";

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, addressIndex, onEdit, onRemoveAddress, disabled } = props;

	const selectedCountry = countriesWithStates.find((country) => {
		return country.iso2 === address?.country;
	});

	const selectedState = selectedCountry?.states.find((state) => {
		return state.state_code === address?.state;
	});

	return (
		<StyledAddressCard data-testid="address-card-test">
			<AddressTitle>
				{`${address.types?.join(", ").replace(/\w+/g, capitalize)} Address`}
			</AddressTitle>
			<span>{address?.address1}</span>
			{address?.address2 && <span>{address?.address2}</span>}
			{address?.address3 && <span>{address?.address3}</span>}
			<span>
				{`${address?.city}, ${selectedState ? selectedState.name : ""} ${address?.postalCode}`}
			</span>
			<span>{selectedCountry?.name}</span>
			<ButtonsWrapper>
				<Button
					label="Edit"
					color="teal"
					variant="text"
					disabled={disabled}
					muiAttrs={{ disableRipple: true }}
					onClick={() => onEdit(address, addressIndex)}
				></Button>
				<Button
					color="red"
					variant="text"
					muiAttrs={{ disableRipple: true }}
					disabled={disabled}
					label="Remove"
					onClick={() => onRemoveAddress(addressIndex)}
				></Button>
			</ButtonsWrapper>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
