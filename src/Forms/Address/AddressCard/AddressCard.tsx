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

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, addressIndex, onEdit, onRemoveAddress } = props;

	return (
		<StyledAddressCard data-testid='address-card-test'>
			<AddressTitle>{`${address.types?.join(', ').replace(/\w+/g, capitalize)} Address`}</AddressTitle>
			<span>{address.address}</span>
			<span>{`${address.city}, ${address.state} ${address.postalCode}`}</span>
			<span>{address.country}</span>
			<ButtonsWrapper>
				<Button buttonType='blueText' onClick={() => onEdit(address, addressIndex)}>Edit</Button>
				<Button buttonType='redText' onClick={() => onRemoveAddress(addressIndex)}>
					Remove
				</Button>
			</ButtonsWrapper>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
