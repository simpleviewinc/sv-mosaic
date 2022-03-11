import * as React from 'react';
import { memo, ReactElement, useState } from 'react';

// Components
import AddressDrawer from './AddressDrawer';
import Button from '@root/forms/Button';
import Drawer from '@root/components/Drawer.jsx';

// Styles
import { AddAddressWrapper, FlexContainer } from './Address.styled';

// Utils
import AddressCard from './AddressCard';
import { MosaicFieldProps } from '@root/components/Field';
import { IAddress } from '.';

const Address = (props: MosaicFieldProps<unknown, IAddress[]>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
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
	const removeAddressHandler = async (addressIndex: number) => {
		const listOfAddresses = [...value];
		listOfAddresses.splice(addressIndex, 1);

		if (listOfAddresses.length > 0) {
			await onChange(listOfAddresses);
		} else {
			await onChange(undefined);
		}
	};

	/**
	 * Closes the modal and resets the values for
	 * form field.
	 */
	const handleClose = async () => {
		setOpen(false);
		console.log('closing');
		await onBlur();
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
						address={address}
						addressIndex={idx}
						onEdit={showEditModal}
						disabled={fieldDef.disabled}
						onRemoveAddress={removeAddressHandler} />
				))}
			</FlexContainer>
			<Drawer
				open={open}
				onClose={handleClose}
			>
				<AddressDrawer
					open={open}
					value={value}
					onChange={onChange}
					isEditing={isEditing}
					addressIdx={addressIdx}
					handleClose={handleClose}
					setIsEditing={setIsEditing}
					addressToEdit={addressToEdit}
				/>
			</Drawer>
		</div>
	);
};

export default memo(Address);
