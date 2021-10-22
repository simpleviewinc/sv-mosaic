import * as React from 'react';
import { memo, ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';

// Styles
import {
	AddressTitle,
	ButtonsWrapper,
	StyledAddressCard,
} from './AddressCard.styled';

type Address = {
  city: string;
  country: string;
  street: string;
  postalCode: string;
  state: string;
  type: string;
};

interface AddressCardProps {
  address: Address;
}

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address } = props;

	return (
		<StyledAddressCard>
			<AddressTitle>{`${address.type} Address`}</AddressTitle>
			<span>{address.street}</span>
			<span>{`${address.city}, ${address.state} ${address.postalCode}`}</span>
			<span>{address.country}</span>
			<ButtonsWrapper>
				<Button buttonType='blueText'>Edit</Button>
				<Button buttonType='redText'>Remove</Button>
			</ButtonsWrapper>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
