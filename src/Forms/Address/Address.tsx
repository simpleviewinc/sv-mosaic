import * as React from 'react';
import { memo, ReactElement, useState } from 'react';

// Components
import AddressDrawer from './AddressDrawer';
import Button from '@root/forms/Button';

// Styles
import { AddAddressWrapper, FlexContainer } from './Address.styled';

// Utils
import AddressCard from './AddressCard';
import { MosaicFieldProps } from '@root/components/Field';
import { IAddress } from '.';

const Address = (props: MosaicFieldProps<unknown, IAddress[]>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value
	} = props;

	// State variables
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [addressToEdit, setAddressToEdit] = useState(null)

	// States of the form values
	const [addressIdx, setAddressIdx] = useState(null);

	/**
	 * Opens the modal to create an address card 
	 * and sets editing mode to false.
	 */
	const addAddressHandler = () => {
		setIsEditing(false);
		setOpen(true);
	};

	/**
	 * Removes the clicked address card from the list. 
	 * @param addressToRemove 
	 */
	const removeAddressHandler = async(addressIndex: number) => {
		const listOfAddresses = [...value];
		listOfAddresses.splice(addressIndex, 1);

		if (listOfAddresses.length > 0) {
			await onChange(listOfAddresses);
		} else {
			await onChange(undefined);
		}
	};

	/**
	 * Opens the modal in editing mode and sets the
	 * form fields values with the data of the address 
	 * to be edited.
	 * @param addressToEdit 
	 */
	const showEditModal = (addressToEdit, addressIndex) => {
		const {
			address1,
			address2,
			address3,
			city,
			postalCode,
			types,
			country,
			state,
		} = addressToEdit;

		setAddressToEdit({
			address1,
			address2,
			address3,
			city,
			postalCode,
			types,
			country,
			state,
		});

		setAddressIdx(addressIndex);
		setIsEditing(true);
		setOpen(true);
	};

	return (
		<div>
			<FlexContainer>
				<AddAddressWrapper>
					<Button disabled={fieldDef.disabled} buttonType='secondary' onClick={addAddressHandler}>
						ADD ADDRESS
					</Button>
				</AddAddressWrapper>
				{value && value.map((address, idx) => (
					<AddressCard 
						key={`${idx}`}
						addressIndex={idx}
						address={address}
						disabled={fieldDef.disabled}
						onEdit={showEditModal}
						onRemoveAddress={removeAddressHandler} />
				))}
			</FlexContainer>
			{open && 
				<AddressDrawer
					addressToEdit={addressToEdit}
					isEditing={isEditing}
					addressIdx={addressIdx}
					open={open}
					setOpen={setOpen}
					onChange={onChange}
					setIsEditing={setIsEditing}
					value={value}
				/>
			}
		</div>
	);
};

export default memo(Address);
