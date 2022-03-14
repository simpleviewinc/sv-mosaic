import * as React from 'react';
import { memo, ReactElement } from 'react';
import { capitalize } from 'lodash';

// Components
import Button from '@root/forms/Button';

// Styles
import {
	AddressTitle,
	ButtonsWrapper,
	StyledAddressCard,
} from './AddressCard.styled';

// Types
import { AddressCardProps } from '../AddressTypes';
import countriesWithStates from '@root/forms/Address/countriesStates.json';

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, addressIndex, onEdit, onRemoveAddress, disabled } = props;

	const selectedCountry = countriesWithStates.find(country => {
		return country.iso2 === address?.country;
	});

	const selectedState = selectedCountry.states.find(state => {
		return state.state_code === address?.state;
	});

	return (
		<StyledAddressCard data-testid='address-card-test'>
			<AddressTitle>
				{`${address.types?.join(', ').replace(/\w+/g, capitalize)} Address`}
			</AddressTitle>
			<span>{address?.address1}</span>
			{address?.address2 && <span>{address?.address2}</span>}
			{address?.address3 && <span>{address?.address3}</span>}
			<span>
				{`${address?.city}, ${selectedState ? selectedState.name : ''} ${address?.postalCode}`}
			</span>
			<span>{selectedCountry.name}</span>
			<ButtonsWrapper>
				<Button 
					buttonType='blueText' 
					disabled={disabled} 
					onClick={() => onEdit(address, addressIndex)}
				>
					Edit
				</Button>
				<Button 
					buttonType='redText'
					disabled={disabled}
					onClick={() => onRemoveAddress(addressIndex)}
				>
					Remove
				</Button>
			</ButtonsWrapper>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
